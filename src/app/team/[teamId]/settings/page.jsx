"use client";
import ButtonTable from "@/components/ButtonTable";
import CheckboxTable from "@/components/CheckboxTable";
import { Textarea } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

const page = () => {
  const dummyData = {
    team: {
      _id: "123321",
      name: "Test Team",
    },
    questions: [
      {
        id: "questionId1",
        teamId: "123",
        value: "What is your name?",
        isValid: true,
      },
      {
        id: "questionId2",
        teamId: "123",
        value: "What is your email??",
        isValid: true,
      },
      {
        id: "questionId3",
        teamId: "123",
        value: "Explain briefly about your current Project.",
        isValid: true,
      },
    ],
    members: [
      { id: "123", name: "Muawia", position: "Associate Engineer" },
      { id: "231", name: "Aquib", position: "Associate Engineer" },
      { id: "312", name: "Hasan", position: "Associate Engineer" },
      { id: "132", name: "Hammad", position: "Internee" },
    ],
    users: [
      {
        id: "123",
        name: "Muawia",
        isChecked: false,
        position: "Associate Engineer",
      },
      {
        id: "231",
        name: "Aquib",
        isChecked: false,
        position: "Associate Engineer",
      },
      {
        id: "312",
        name: "Hasan",
        isChecked: false,
        position: "Associate Engineer",
      },
      { id: "132", name: "Hammad", isChecked: false, position: "Internee" },
    ],
  };
  const [data, setData] = useState(dummyData);
  const [questions, setQuestions] = useState(["", "", ""]);

  const handleOnChange = (e) => {
    const prev = [...questions];
    prev[e.target.name] = e.target.value;
    setQuestions(prev);
  };

  const handleCheckBox = (e, id) => {
    const prev = { ...data };
    prev.users[id].isChecked = !prev.users[id].isChecked;
    setData(prev);
  };

  const handleRemoveMember = (e, id, idx) => {
    const prev = { ...data };
    prev.members.splice(idx, 1); //users[id].isChecked = !prev.users[id].isChecked;
    console.log(prev);
    setData(prev);
  };

  const handleSaveButton = () => {
    const payload = {};
    // const newMembers = data.users.filter(member => member.)
  };
  return (
    <>
      <div className="flex flex-col mt-2 items-center">
        <div className="w-2/3">
          {/* <form onSubmit={handleSubmit(printData)}> */}
          {data.questions.map((question, idx) => (
            <fieldset key={question.id}>
              <label
                htmlFor={question.id}
                className="block mb-2 text-xl font-medium text-emerald-900"
              >
                Question {idx + 1}
              </label>
              <Textarea
                // {...register(question.id)}
                value={questions[idx]}
                onChange={handleOnChange}
                type="text"
                id={question.id}
                name={idx}
                className="text-emerald-900 h-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder={question.value || `Question. ${idx + 1}`}
              />
            </fieldset>
          ))}
          <div className="px-1 pb-1 my-5 h-96 overflow-y-auto overflow-x-hidden no-scrollbar">
            <ButtonTable members={data.members} users={data.users} />
          </div>
          {/*  overflow-scroll no-scrollbar */}
          {/* <div className="gap-2 flex overflow-scroll no-scrollbar items-center my-5 h-16">
            {data.members.map((member, idx) => (
              <div
                key={member.id}
                className="h-10 p-2 rounded-2xl bg-slate-200 w-fit flex items-center gap-1"
              >
                {member.name}
                <div
                  onClick={(e) => handleRemoveMember(e, member.id, idx)}
                  className="bg-white hover:text-white rounded-full p-1 hover:bg-slate-600"
                >
                  <VscChromeClose />
                </div>
              </div>
            ))}
          </div>
          <CheckboxTable members={data.users} handleCheckBox={handleCheckBox} /> */}
          {/* </form> */}
          {/* <button
            onClick={handleSaveButton}
            className="my-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Save changes
          </button>
          <Link href={`/team/${data.team._id}`}>
            <button className="my-3 ml-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Cancel changes
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default page;
