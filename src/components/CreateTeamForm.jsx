"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import CheckboxTable from "./CheckboxTable";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/adminTeamSlice";

// const dummyData = [
//   {
//     id: "1",
//     name: "Hammad",
//     position: "Intern",
//     isChecked: false,
//   },
//   {
//     id: "2",
//     name: "Muawiya",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "3",
//     name: "Aqib",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "4",
//     name: "Hassan",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
//   {
//     id: "5",
//     name: "Test",
//     position: "Senior Developer",
//     isChecked: false,
//   },
// ];

export default function CreateTeamForm({ setCreatingTeam }) {
  const [openModal, setOpenModal] = useState(undefined);

  const [membersListUI, setMembersListUI] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([]);

  const dispatch = useDispatch();

  const getUsersApi = async () => {
    const { data } = await axios.get(`${process.env.BASE_URL}/user/get-all`, {
      withCredentials: true,
    });
    console.log(data);
    if (data.status) {
      const users = data.data.users.map((user) => ({
        ...user,
        isChecked: false,
      }));
      setMembers(users);
    }
  };

  const createTeamApi = async (payload) => {
    const { data } = await axios.post(
      `${process.env.BASE_URL}/team/create`,
      payload,
      { withCredentials: true }
    );
    if (data.status) {
      // setMembers(prevData => prevData.unshift(data.data))
      // console.log(data);
      dispatch(add(data.data));
    }
    setMembers([]);
    setCreatingTeam(false);
  };
  // useEffect(() => {
  //   getUsersApi();
  // }, []);

  const handleCheckBox = (e, id) => {
    const prev = [...members];
    prev[id].isChecked = !prev[id].isChecked;
    setMembers(prev);
  };

  const handleChangeTeamNameValue = (e) => {
    setTeamName(e.target.value);
  };

  const handleNextOrSubmit = (e) => {
    e.preventDefault();
    if (!membersListUI) {
      getUsersApi();
      /**
       * await
       * fetch users list
       * update setMembers()
       */
      setMembersListUI(true);
      return;
    }
    let newTeamMembers = members.filter((member) => member.isChecked);
    newTeamMembers = newTeamMembers.map((member) => member._id);
    const newTeam = {
      teamName,
      members: newTeamMembers,
    };
    console.log(newTeam);
    setTeamName("");
    // setMembers([])
    setCreatingTeam(true);
    setOpenModal(undefined);
    setMembersListUI(false);
    createTeamApi(newTeam);
  };

  return (
    <>
      <Button
        className="fixed bottom-8 right-8 px-2 py-2 font-semibold text-2xl text-emerald-900 bg-orange-100 hover:text-orange-100 hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full shadow-sm"
        onClick={() => setOpenModal("initial-focus")}
      >
        Add Team
      </Button>
      <Modal
        dismissible={true}
        show={openModal === "initial-focus"}
        size="md"
        popup
        onClose={() => setOpenModal(undefined)}
        // initialFocus={props.emailInputRef}
      >
        {/* <Modal.Header /> */}
        <Modal.Body>
          <form onSubmit={handleNextOrSubmit}>
            <div className="space-y-6">
              {membersListUI ? (
                <CheckboxTable
                  members={members}
                  handleCheckBox={handleCheckBox}
                />
              ) : (
                <>
                  <h3 className="text-xl my-2 font-medium text-gray-900 dark:text-white">
                    Add New Team
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="team_name" value="Team name" />
                    </div>
                    <TextInput
                      value={teamName}
                      onChange={handleChangeTeamNameValue}
                      required
                      id="team_name"
                    />
                  </div>
                </>
              )}
              <div className="w-full flex justify-end">
                <Button type="submit">
                  {membersListUI ? "Create" : "Next"}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
