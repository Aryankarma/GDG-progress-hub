import React, { useEffect, useState } from "react";
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
    setSelectedTeam(team)
    setTeamMembersByTeamName(SortedMembers);
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="team-select">
          <div>
            <label htmlFor="team">Select team:</label>
            <select id="team" onChange={(e) => ChangeTeam(e.target.value)}>
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
            {" "}
            <button className="admin-button">Admin Portal</button>
          </Link>
        </div>
        <div className="top-three">
          <div>
            <img src={user1} alt="Wiktoria" />
            <p>2. Wiktoria</p>
          </div>
          <div>
            <img src={user2} alt="Matt Dickerson" />
            <p>1. Matt Dickerson</p>
          </div>
          <div>
            <img src={user3} alt="Trixie Byrd" />
            <p>3. Trixie Byrd</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {TeamMembersByTeamName.length != 0 ? (
              TeamMembersByTeamName.map((teams) => {
                let keyss = Date.now() + rank
                return (
                  <tr key={keyss}>
                    {++rank == 1 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy">🏆</span> #{rank}
                        </td>
                        <td>{teams.name}</td>
                        <td>{SelectedTeam}</td>
                      </>
                    ) : rank == 2 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy">🥈</span> #{rank}
                        </td>
                        <td>{teams.name}</td>
                        <td>{SelectedTeam}</td>
                      </>
                    ) : rank == 3 ? (
                      <>
                        <td className="aligntrophy">
                          <span className="trophy">🥉</span> #{rank}
                        </td>
                        <td>{teams.name}</td>
                        <td>{SelectedTeam}</td>
                      </>
                    ) : (
                      <>
                        <td>#{rank}</td>
                        <td>{teams.name}</td>
                        <td>{SelectedTeam}</td>
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
