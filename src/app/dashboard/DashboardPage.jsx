"use client";

import { initializeAdminTeams } from "@/Redux/adminTeamSlice";
import CreateTeamForm from "@/components/CreateTeamForm";
import TeamsList from "@/components/TeamsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DashboardPage = () => {
  // let team = {
  //   id: "123",
  //   name: "test Team",
  //   members: [
  //     { fullName: "Aqib" },
  //     { fullName: "Muawiya" },
  //     { fullName: "Hasan" },
  //     { fullName: "Hammad" },
  //   ],
  // };
  // const teams = [team, team, team, team, team];
  const [creatingTeam, setCreatingTeam] = useState(false);
  // const [adminTeams, setAdminTeams] = useState([]);
  const adminTeams = useSelector((state) => state.adminTeams);
  console.log(adminTeams);
  const [memberTeams, setMemberTeams] = useState([]);
  const dispatch = useDispatch();
  const getTeamsApi = async () => {
    const { data } = await axios.get(`${process.env.BASE_URL}/team/get-teams`, {
      withCredentials: true,
    });
    console.log("data.status", data.status);
    if (data.status) {
      // setAdminTeams(data.data.admin);
      setMemberTeams(data.data.members);
      dispatch(initializeAdminTeams(data.data.admin));
    }
  };

  useEffect(() => {
    getTeamsApi();
  }, []);

  return (
    <>
      <CreateTeamForm setCreatingTeam={setCreatingTeam} />
      {adminTeams.length !== 0 && (
        <TeamsList
          creatingTeam={creatingTeam}
          title="Teams You Own"
          teams={adminTeams}
        />
      )}
      {memberTeams.length !== 0 && (
        <TeamsList title="Teams You Are Part Of" teams={memberTeams} />
      )}
      {/* <button class="fixed bottom-8 right-8 px-4 py-2 font-semibold text-sm text-emerald-900 bg-orange-100 hover:text-orange-100 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full shadow-sm">
        Add Team
      </button> */}
    </>
  );
};

export default DashboardPage;
