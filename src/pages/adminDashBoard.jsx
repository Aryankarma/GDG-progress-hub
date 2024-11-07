import { useState, useEffect } from "react";
import { useTeam } from "../context/loginContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdmindashBoard = () => {

  const navigate = useNavigate();
  const { teamData, isLoggedIn } = useTeam();
  const [TeamMembers, setTeamMembers] = useState([]);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [team, setTeam] = useState("GDG");
  let rank = 0;

  // useEffect(()=>{
  //   console.log(scores)
  // },[scores])
  
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
    // setScores(SortedMembers)
    setTeam(teamData.name)
  }, [teamData]);

  const goToUserDashBoard = () => {
    navigate("/");
  };

  // const handleScoreChange = (name, scoreValue) => {
  //   console.log(name, scoreValue)
  //   // setScores(TeamMembers.map((input) => (input.name == name) ? {...input, currentScore: input.currentScore + parseInt(scoreValue)} : input))
  // };

  const handleScoreChange = (rank, value) => {
    setScores(prevScores => {
      const newScores = [...prevScores];
      newScores[rank - 1] = Number(value);
      return newScores;
    });
  };

  const saveScores = () => {

  };

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
            <tr className="bg-slate-700 text-white tableHeading">
                <th className="p-4 text-center">Rank</th>
                <th className="text-center">Member Name</th>
                <th className="text-center">Current Score</th>
                <th className="text-center">Update Score (Limit 0-10)</th>
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
                              <span className="trophy mx-auto">🏆</span>
                            </td>
                            <td className="text-center">{teams.name}</td>
                            <td className="text-center">{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                value={scores[rank - 1]}
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                // onChange={(e) =>
                                //   handleScoreChange(teams.name, e.target.value)
                                // }
                                onChange={(e) => handleScoreChange(rank, e.target.value)}
                                />
                            </td>
                          </>
                        ) : rank == 2 ? (
                          <>
                            <td className="aligntrophy">
                             <span className="trophy mx-auto">🥈</span> 
                            </td>
                            <td className="text-center">{teams.name}</td>
                            <td className="text-center">{teams.currentScore}</td>
                            <td className="text-center">

                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                // value={scores.find(score => score.name === teams.name)?.currentScore || ""}
                                value={scores[rank-1]}
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                // onChange={(e) =>
                                //   handleScoreChange(teams.name, e.target.value)
                                // }
                                onChange={(e) => handleScoreChange(rank, e.target.value)}

                              />
                            </td>
                          </>
                        ) : rank == 3 ? (
                          <>
                            <td className="aligntrophy">
                              <span className="trophy mx-auto">🥉</span> 
                            </td>
                            <td className="text-center">{teams.name}</td>
                            <td className="text-center">{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                placeholder="Enter Score"
                                required
                                value={scores[rank-1]}
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                // onChange={(e) =>
                                //   handleScoreChange(teams.name, e.target.value)
                                // }
                                onChange={(e) => handleScoreChange(rank, e.target.value)}

                              />
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="text-center">#{rank}</td>
                            <td className="text-center">{teams.name}</td>
                            <td className="text-center">{teams.currentScore}</td>
                            <td className="text-center">
                              <input
                                type="number"
                                min="0"
                                max="10"
                                step="1"
                                value={scores[rank-1]}
                                placeholder="Enter Score"
                                required
                                className="p-2 w-32 border border-gray-300 rounded-md"
                                // onChange={(e) =>
                                //   handleScoreChange(teams.name, e.target.value)
                                // }
                                onChange={(e) => handleScoreChange(rank, e.target.value)}

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
            className="bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded-lg text-[12px] sm:text-[14px] font-bold mb-3 py-2 px-8"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmindashBoard;
