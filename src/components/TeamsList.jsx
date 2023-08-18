"use client";

import { Button, Card } from "flowbite-react";
import Link from "next/link";

const TeamsList = ({ teams, title, creatingTeam }) => {
  return (
    <div className="flex items-center flex-col">
      <h3 className="my-4 text-4xl text-emerald-900 font-bold tracking-tight dark:text-white">
        {title}
      </h3>
      {creatingTeam && (
        <Card
          className="my-2 h-28 bg-gray-200 animate-pulse"
          style={{ width: "80vw" }}
        />
      )}

      {teams.map((team, idx) => (
        <Link key={idx} href={`/team/${team.id}`}>
          <Card
            className="my-2 bg-slate-100 text-emerald-900"
            style={{ width: "80vw" }}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {team.name}
            </h5>
            <p className="font-normal text-base text-gray-700 dark:text-gray-400">
              {team.members.length &&
                (team.members.length == 1
                  ? team.members[0].name
                  : team.members.length == 2
                  ? `${team.members[0].name} and ${team.members[1].name}`
                  : `${team.members[0].name}, ${team.members[1].name} and ${
                      team.members.length - 2
                    } other(s)`)}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default TeamsList;
