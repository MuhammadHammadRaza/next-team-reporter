"use client";

import { Button, Select } from "flowbite-react";
import { HiSearch, HiCog } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomTeamNavbar = () => {
  const pathname = usePathname();
  const currentDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1
  }-${
    new Date().getDate() + 1 < 10
      ? `0${new Date().getDate() + 1}`
      : new Date().getDate() + 1
  }`;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      member: "",
      date: currentDate,
    },
  });
  // console.log(new Date().toDateString());
  const printData = (data) => {
    console.log(data);
    // console.log(pathname);
    // router.push(`${pathname}/settings`);
  };
  return (
    <header>
      <form onSubmit={handleSubmit(printData)}>
        <div className="flex justify-around my-4">
          <Select {...register("member")}>
            <option value="">All Members</option>
            <option value="US">United States</option>
            <option value="CAD">Canada</option>
            <option value="UAE">United Arab Emirates</option>
          </Select>
          <input
            type="date"
            {...register("date", {
              required: "Please input date",
            })}
            className="rounded-xl"
          />
          <div className="flex">
            <Button
              type="submit"
              className="bg-emerald-700 text-orange-100 hover:bg-orange-100 rounded-xl  focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-sm"
            >
              <p>Search</p>
              <HiSearch className="ml-2 h-5 w-5" />
            </Button>
            <Link href={`${pathname}/settings`}>
              <Button
                className="bg-emerald-700 ml-5 text-orange-100 hover:bg-orange-100 rounded-xl  focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-sm"
                type="button"
              >
                <p>Settings</p>
                <HiCog className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </header>
  );
};

export default CustomTeamNavbar;
