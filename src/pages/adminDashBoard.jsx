import React, { useState, useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { useTeam } from "../context/loginContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdmindashBoard = () => {
  const navigate = useNavigate();
  const { teamData, isLoggedIn, logout } = useTeam();
  const [TeamMembers, setTeamMembers] = useState([]);
  let rank = 0;
  const [team, setTeam] = useState("GDG");
  useEffect(()=>{
    if(!isLoggedIn)
      navigate('/login')
  })
  useEffect(() => {
    if(!teamData)
      return
    let SortedMembers = teamData.members.sort((a, b) => {
      return (b.currentScore || 0) - (a.currentScore || 0);
    });
    setTeamMembers(SortedMembers);
    setTeam(teamData.name)
  }, [teamData]);
  const goToUserDashBoard = () => {
    navigate("/");
  };

  const handleScoreChange = () => {
    // useless method
  };
  const saveScores = () => {
    // useless method
  };
  let i = 0;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">{team}</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={goToUserDashBoard}
              className="bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded-lg text-[10px] sm:text-[14px] py-[8px] px-[12px] sm:py-[10px] sm:px-[16px] font-bold"
            >
              User Portal
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="text-center w-full bg-white my-4">
            <thead>
              <tr className="text-gray-700 font-semibold">
                <th className="p-4">Rank</th>
                <th className="">Member Name</th>
                <th className="">Current Score</th>
                <th className="">Update Score (Limit 0-10)</th>
              </tr>
            </thead>
            <tbody>
              {TeamMembers.length != 0
                ? TeamMembers.map((teams) => {
                    let keyss = Date.now() + rank;
                    return (
                      <tr key={keyss}>
                        {++rank == 1 ? (
                          <>
                            <td className="aligntrophy">
                              <span className="trophy">🏆</span> #{rank}
                            </td>
                            <td>{teams.name}</td>
                            <td>{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                value={teams.currentScore}
                                onChange={(e) =>
                                  handleScoreChange(member.id, e.target.value)
                                }
                              />
                            </td>
                          </>
                        ) : rank == 2 ? (
                          <>
                            <td className="aligntrophy">
                              <span className="trophy">🥈</span> #{rank}
                            </td>
                            <td>{teams.name}</td>
                            <td>{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                value={teams.currentScore}
                                onChange={(e) =>
                                  handleScoreChange(member.id, e.target.value)
                                }
                              />
                            </td>
                          </>
                        ) : rank == 3 ? (
                          <>
                            <td className="aligntrophy">
                              <span className="trophy">🥉</span> #{rank}
                            </td>
                            <td>{teams.name}</td>
                            <td>{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                value={teams.currentScore}
                                onChange={(e) =>
                                  handleScoreChange(member.id, e.target.value)
                                }
                              />
                            </td>
                          </>
                        ) : (
                          <>
                            <td>#{rank}</td>
                            <td>{teams.name}</td>
                            <td>{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                value={teams.currentScore}
                                onChange={(e) =>
                                  handleScoreChange(member.id, e.target.value)
                                }
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div>
          {/* save button */}
          <button
            onClick={saveScores}
            className="bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded-lg text-[12px] sm:text-[14px] py-[8px] px-[12px] sm:py-[10px] sm:px-[16px] font-bold mb-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmindashBoard;
