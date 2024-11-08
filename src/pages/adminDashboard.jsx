import { useState, useEffect } from "react";
import { useTeam } from "../context/loginContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { updateScores } from "../services/FirebaseServices";
import { Link } from "react-router-dom";

const AdmindashBoard = () => {
  const navigate = useNavigate();
  const { teamData, isLoggedIn } = useTeam();
  const [teamMembers, setTeamMembers] = useState([]);
  const [scores, setScores] = useState({});
  const [team, setTeam] = useState("GDG");
  const [scoreUpdateStatus, setScoreUpdateStatus] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (!teamData) return;
    let sortedMembers = teamData.members.sort((a, b) => {
      return (b.currentScore || 0) - (a.currentScore || 0);
    });
    setTeamMembers(sortedMembers);
    setTeam(teamData.name);
  }, [teamData]);

  const handleScoreChange = (index, value) => {
    if (value > 0 && value <= 10) {
      setScores((prevScores) => ({
        ...prevScores,
        [index]: value,
      }));
    }
  };

  const handleSaveScores = async () => {
    const allScoresValid = teamMembers.every((_, index) => {
      const score = scores[index];
      return score && score > 0 && score <= 10;
    });

    if (!allScoresValid) {
      alert(
        "Please ensure all scores are between 1 and 10, and not left empty or zero."
      );
      return;
    }

    const finalAddedScores = teamMembers.map((member, index) => {
      const userInputScore = scores[index] ?? 0;
      return {
        name: member.name,
        currentScore: (member.currentScore || 0) + userInputScore,
      };
    });
    const updatedDataResponse = await updateScores(team, finalAddedScores);
    setScoreUpdateStatus(updatedDataResponse);
    if(updatedDataResponse){
      setTeamMembers(finalAddedScores)
      setScores({})
    }

    // hide the notification after 3 seconds
    setTimeout(() => {
      setScoreUpdateStatus(null);
    }, 3000);
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
          <Link to={"/"}>
            <button className="admin-button">Home</button>
          </Link>
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
              {teamMembers.map((member, index) => (
                <tr key={index}>
                  <td className="aligntrophy">
                    <span className="trophy mx-auto">
                      {index === 0
                        ? "🏆"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : index + 1}
                    </span>
                  </td>
                  <td className="text-center">{member.name}</td>
                  <td className="text-center">{member.currentScore}</td>
                  <td className="text-center">
                    <input
                      type="number"
                      min={0}
                      max={10}
                      placeholder="Enter Score"
                      value={scores[index] ?? ""}
                      onChange={(e) =>
                        handleScoreChange(index, parseInt(e.target.value) || 0)
                      }
                      required
                      className="p-2 w-32 border border-gray-300 rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <buttonscoreUpdateStatus
            onClick={handleSaveScores}
            className="hover:shadow-md transition bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded text-[12px] sm:text-[14px] font-bold mb-3 py-2 px-12"
          >
            Save
          </buttonscoreUpdateStatus>
        </div>
        {scoreUpdateStatus === true ? (
            <div style={{boxShadow:"0 0 10px 5px #55ff5530"}} className="p-3 bg-green-800 text-white font-900 font-large shadow-2xl rounded-lg sticky mx-auto bottom-[5%] left-[5%]">
              {"✅ Score Successfully updated"}
            </div>
        ) : ( scoreUpdateStatus === false ? (
          <div style={{boxShadow:"0 0 10px 5px #ff333350"}} className="p-3 bg-red-900 text-white font-900 font-large shadow-2xl rounded-lg sticky  mx-auto bottom-[5%] left-[5%]">
            {"❌ Failed to update score"}
          </div>
        ) : null)}
      </div>
    </div>
  );
};

export default AdmindashBoard;