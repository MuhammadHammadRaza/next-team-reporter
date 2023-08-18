"use client"
import DashboardPage from "./DashboardPage";
import { getCookies } from "cookies-next";

// import { cookies } from "next/headers";

const Page = () => {
  // const cookieStore = cookies();
  // console.log("Dashboard: ", cookieStore.getAll());
  console.log(getCookies());
  return <DashboardPage />;
};

export default Page;
