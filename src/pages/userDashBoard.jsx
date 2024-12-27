import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/userDashBoard.css";
import DummyImg from "../assets/dummy-pic.png";
import { Link } from "react-router-dom";
import { fetchTeam } from "../services/FirebaseServices";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../components/ui/table";

export default function UserDashBoard() {
  const [TeamMembers, setTeamMembers] = useState({});
  const [TeamMembersByTeamName, setTeamMembersByTeamName] = useState([]);
  const [SelectedTeam, setSelectedTeam] = useState("");
  const [TeamNames, setTeamNames] = useState([]);
  let rank = 0;

  function Medalist({ rank, imgURL, name, medalEmoji, medalStyle }) {
    const fallbackImg = imgURL && imgURL.trim() ? imgURL : DummyImg;
    return (
      <div
        className={`flex align-center justify-center flex-col aspect-w-1 aspect-h-1`}
      >
        <img
          className="mx-auto shadow-md pointer-events-none select-none"
          src={fallbackImg}
          alt={name || "Medalist"}
        />
        <p className="text-sm">
          <span className="trophy mx-auto">{medalEmoji}</span>
          {name || "Unknown"}
        </p>
      </div>
    );
  }

  useEffect(() => {
    fetchTeam().then((data) => {
      if (data) {
        setTeamMembers(data);
        const teamNames = Object.keys(data.Teams);
        setTeamNames(teamNames);
      }
    });
  }, []);

  useEffect(() => {
    if (TeamNames.length) {
      setSelectedTeam("Technical Team");
      ChangeTeam("Technical Team");
    }
  }, [TeamNames]);

  function ChangeTeam(team) {
    const members = TeamMembers.Teams[team]?.members || [];
    const sortedMembers = [...members].sort(
      (a, b) => (b.currentScore || 0) - (a.currentScore || 0)
    );
    setSelectedTeam(team);
    setTeamMembersByTeamName(sortedMembers);
  }
  const TopThree = TeamMembersByTeamName.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="container text-foreground bg-background select-none">
        <div className="top-three">
          {TopThree.length === 3 ? (
            <>
              <Medalist
                rank={2}
                imgURL={TopThree[1].imgURL}
                name={TopThree[1].name}
                medalEmoji="🥈"
              />
              <Medalist
                rank={1}
                imgURL={TopThree[0].imgURL}
                name={TopThree[0].name}
                medalEmoji="🏆"
                medalStyle="GoldMedalistImg"
              />
              <Medalist
                rank={3}
                imgURL={TopThree[2].imgURL}
                name={TopThree[2].name}
                medalEmoji="🥉"
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="team-select">
          <div>
            <Select onValueChange={(value) => ChangeTeam(value)}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a team" />
              </SelectTrigger>
              <SelectContent>
                {TeamNames.length !== 0 ? (
                  TeamNames.map((teamnames) => (
                    <SelectItem key={teamnames} value={teamnames}>
                      {teamnames}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="Technical" disabled>
                    Please Wait
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <Link to={"/admin"}>
            {" "}
            <button className="admin-button">Admin Portal</button>
          </Link>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-700 text-white p-4 hover:bg-slate-700">
              <TableCell className="text-center">Rank</TableCell>
              <TableCell className="text-center">Name</TableCell>
              <TableCell className="text-center">Team Name</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TeamMembersByTeamName.length !== 0 ? (
              TeamMembersByTeamName.map((teams, index) => {
                let keyss = Date.now() + index;
                return (
                  <TableRow
                    className={`odd:bg-[var(--old-table-row)] ${
                      index === 0 ? "bg-yellow-100" : ""
                    }`}
                    key={keyss}
                  >
                    {index + 1 === 1 ? (
                      <>
                        <TableCell className="text-center">
                          <span className="trophy mx-auto">🏆</span>
                        </TableCell>
                        <TableCell className="text-center">
                          {teams.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </TableCell>
                      </>
                    ) : index + 1 === 2 ? (
                      <>
                        <TableCell className="text-center">
                          <span className="trophy mx-auto">🥈</span>
                        </TableCell>
                        <TableCell className="text-center">
                          {teams.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </TableCell>
                      </>
                    ) : index + 1 === 3 ? (
                      <>
                        <TableCell className="text-center">
                          <span className="trophy mx-auto">🥉</span>
                        </TableCell>
                        <TableCell className="text-center">
                          {teams.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="text-center">
                          #{index + 1}
                        </TableCell>
                        <TableCell className="text-center">
                          {teams.name}
                        </TableCell>
                        <TableCell className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
