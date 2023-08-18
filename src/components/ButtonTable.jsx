"use client";

import { Table } from "flowbite-react";
import { useState } from "react";
import CustomModal from "./CustomModal";

const ButtonTable = (props) => {
  const dummyMembers = [
    { id: "1", name: "Hammad", position: "Intern" },
    { id: "2", name: "Hammad", position: "Intern" },
    { id: "3", name: "Hammad", position: "Intern" },
    { id: "4", name: "Hammad", position: "Intern" },
    { id: "5", name: "Hammad", position: "Intern" },
    { id: "6", name: "Hammad", position: "Intern" },
    { id: "7", name: "Hammad", position: "Intern" },
    { id: "8", name: "Hammad", position: "Intern" },
    { id: "9", name: "Hammad", position: "Intern" },
    { id: "0", name: "Hammad", position: "Intern" },
  ];
  const dummyUsers = [
    { id: "1", name: "Raza", position: "Intern" },
    { id: "2", name: "Raza", position: "Intern" },
    { id: "3", name: "Raza", position: "Intern" },
    { id: "4", name: "Raza", position: "Intern" },
    { id: "5", name: "Raza", position: "Intern" },
    { id: "6", name: "Raza", position: "Intern" },
    { id: "7", name: "Raza", position: "Intern" },
    { id: "8", name: "Raza", position: "Intern" },
    { id: "9", name: "Raza", position: "Intern" },
    { id: "0", name: "Raza", position: "Intern" },
  ];
  const newMembers = [];
  const newUsers = [];
  const [users, setUsers] = useState(props.users);
  const [members, setMembers] = useState(props.members);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [openModal, setOpenModal] = useState(undefined);
  const handleOpenModal = (type, userIdx) => {
    if (type == "add") {
      setCurrentUser(users[userIdx]);
      setOpenModal(type);
    } else {
      setCurrentUser(members[userIdx]);
      setOpenModal(type);
    }
  };
  const handleOnAdd = () => {
    console.log(currentUser);
    newMembers.push(currentUser);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id != currentUser.id)
    );
    setOpenModal(undefined);
    setCurrentUser(undefined);
  };
  const handleOnRemove = () => {
    newUsers.push(currentUser);
    console.log(currentUser);
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member.id != currentUser.id)
    );
    setOpenModal(undefined);
    setCurrentUser(undefined);
  };
  return (
    <>
      <Table hoverable className="my-5">
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Designation</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {members.map((member, idx) => (
            <Table.Row
              key={member.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {member.name}
              </Table.Cell>
              <Table.Cell>{member.position}</Table.Cell>
              <Table.Cell>
                <p
                  className="font-medium w-fit text-red-600 hover:text-red-800 cursor-pointer dark:text-cyan-500"
                  onClick={() => handleOpenModal("remove", idx)}
                >
                  Remove
                </p>
              </Table.Cell>
            </Table.Row>
          ))}
          {users.map((user, idx) => (
            <Table.Row
              key={user.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.name}
              </Table.Cell>
              <Table.Cell>{user.position}</Table.Cell>
              <Table.Cell>
                <p
                  onClick={() => handleOpenModal("add", idx)}
                  className="font-medium w-fit text-green-600 hover:text-green-800 cursor-pointer dark:text-cyan-500"
                >
                  Add
                  {/* apiCalled ? loader : add */}
                </p>
              </Table.Cell>
            </Table.Row>
          ))}
          <CustomModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            setCurrentUser={setCurrentUser}
            handleOnAdd={handleOnAdd}
            handleOnRemove={handleOnRemove}
          />
        </Table.Body>
      </Table>
    </>
  );
};

export default ButtonTable;
