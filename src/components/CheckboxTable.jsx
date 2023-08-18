"use client";

import { Checkbox, Table } from "flowbite-react";
import { useState } from "react";

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

export default function CheckboxTable({members, handleCheckBox}) {
  // const [check, setCheck] = useState(dummyData);

  // const handleOnSelect = (e, id) => {
  //   const prev = [...check];
  //   // console.log(prev);
  //   prev[id].isChecked = !prev[id].isChecked;
  //   setCheck(() => prev);
  //   // console.log(check);
  // };
  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="p-4">{/* <Checkbox /> */}</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Position</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {members.map((data, idx) => (
          <Table.Row
            key={idx}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="p-4">
              <Checkbox
                id={idx}
                checked={data.isChecked ? true : false}
                // checked={true}
                onChange={(e) => handleCheckBox(e, idx)}
              />
            </Table.Cell>
            <Table.Cell
              onClick={(e) => handleCheckBox(e, idx)}
              className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
            >
              {data.name}
            </Table.Cell>
            <Table.Cell onClick={(e) => handleCheckBox(e, idx)}>
              {data.position}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
