"use client";

import CreateTeamForm from "@/components/CreateTeamForm";
import TeamsList from "@/components/TeamsList";
// import axios from "axios";
import instanceOfAxios from "../../request";
import { useState } from "react";
import axios from "axios";

const DashboardPage = () => {
  let team = {
    id: "123",
    name: "test Team",
    members: [
      { name: "Aqib" },
      { name: "Muawiya" },
      { name: "Hasan" },
      { name: "Hammad" },
    ],
  };
  const teams = [team, team, team, team, team];
  const [creatingTeam, setCreatingTeam] = useState(false);
  const testFunction = () => {
    // instanceOfAxios
    axios
      .get(`${process.env.BASE_URL}/test`)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <p onClick={testFunction}>sample</p>
      <CreateTeamForm setCreatingTeam={setCreatingTeam} />
      <TeamsList
        creatingTeam={creatingTeam}
        title="Teams You Own"
        teams={teams}
      />
      {/* <button class="fixed bottom-8 right-8 px-4 py-2 font-semibold text-sm text-emerald-900 bg-orange-100 hover:text-orange-100 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full shadow-sm">
        Add Team
      </button> */}
    </>
  );
};

export default DashboardPage;
