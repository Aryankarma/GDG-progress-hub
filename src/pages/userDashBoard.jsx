import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/userDashBoard.css";
import user1 from "../assets/1.png";
import user2 from "../assets/2.png";
import user3 from "../assets/3.png";
import { Link } from "react-router-dom";
import { fetchTeam } from "../services/FirebaseServices";

export default function UserDashBoard() {
  const [TeamMembers, setTeamMembers] = useState({});
  const [TeamMembersByTeamName, setTeamMembersByTeamName] = useState([]);
  const [SelectedTeam, setSelectedTeam] = useState("");
  const [TeamNames, setTeamNames] = useState([]);
  let rank = 0;

  useEffect(() => {
    fetchTeam().then((data) => {
      if (data != null) {
        setTeamMembers(data);
        const teamNames = Object.keys(data.Teams);
        setTeamNames(teamNames);
      }
    });
  }, []);

  useEffect(() => {
    if (TeamNames.length) {
      setSelectedTeam(TeamNames[0]);
      ChangeTeam(TeamNames[0]);
    }
  }, [TeamNames]);

  function ChangeTeam(team) {
    const members = TeamMembers.Teams[team].members;
    let SortedMembers = members.sort((a, b) => {
      return (b.currentScore || 0) - (a.currentScore || 0);
    });
    setSelectedTeam(team);
    setTeamMembersByTeamName(SortedMembers);
  }

  const TopThree = TeamMembersByTeamName.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="team-select">
          <div>
            {/* <label htmlFor="team">Team:</label> */}
            <select
              className="w-min"
              id="team"
              onChange={(e) => ChangeTeam(e.target.value)}
            >
              {TeamNames.length != 0 && TeamNames ? (
                TeamNames.map((teamnames) => {
                  return (
                    <option key={teamnames} value={teamnames}>
                      {teamnames}
                    </option>
                  );
                })
              ) : (
                <option value="Technical">Please Wait</option>
              )}
            </select>
          </div>
          <Link to={"/admin"}>
            {" "}reh 
            <button className="admin-button">Admin Portal</button>
          </Link>
        </div>
        <div className="top-three">
          {TopThree && TopThree.length === 3 ? (
            <>
              <div className="flex align-center flex-col">
                <img
                  className="mx-auto shadow-md"
                  src={'../../public/dummy-profile-pic.png'}
                  alt={TopThree[1].name}
                />
                <p>
                  <span className="trophy mx-auto">🥈</span>
                  {TopThree[1].name}
                </p>
              </div>
              <div className="flex align-center justify-center flex-col GoldMedalistImg">
                <img
                  className="mx-auto shadow-xl"
                  src={"../../public/dummy-profile-pic.png"}
                  alt={TopThree[0].name}
                />
                <p>
                  <span className="trophy mx-auto">🏆</span>
                  {TopThree[0].name}
                </p>
              </div>
              <div className="flex align-center justify-center flex-col">
                <img
                  className="mx-auto shadow-md"
                  src={"../../public/dummy-profile-pic.png"}
                  alt={TopThree[2].name}
                />
                <p>
                  <span className="trophy mx-auto">🥉</span>
                  {TopThree[2].name}
                </p>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <table>
          <thead>
            <tr className="bg-slate-700 text-white tableHeading">
              <th className="text-center">Rank</th>
              <th className="text-center">Name</th>
              <th className="text-center">Team Name</th>
            </tr>
          </thead>
          <tbody>
            {TeamMembersByTeamName.length != 0 ? (
              TeamMembersByTeamName.map((teams) => {
                let keyss = Date.now() + rank;
                return (
                  <tr key={keyss}>
                    {++rank == 1 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy mx-auto">🏆</span>
                        </td>
                        <td className="text-center">{teams.name}</td>
                        <td className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </td>
                      </>
                    ) : rank == 2 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy mx-auto">🥈</span>
                        </td>
                        <td className="text-center mx-auto">{teams.name}</td>
                        <td className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </td>
                      </>
                    ) : rank == 3 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy mx-auto">🥉</span>
                        </td>
                        <td className="text-center">{teams.name}</td>
                        <td className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="text-center">#{rank}</td>
                        <td className="text-center">{teams.name}</td>
                        <td className="text-center">
                          {SelectedTeam.split(" ").slice(0, -1).join(" ")}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr key={Date.now()}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
