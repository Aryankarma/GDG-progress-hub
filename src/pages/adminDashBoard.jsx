import React, { useState, useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdmindashBoard = () => {
  const navigate = useNavigate();

  const goToUserDashBoard = () => {
    navigate("/");
  };

  // const [members, setMembers] = useState([]);
  // const [scores, setScores] = useState({});

  // // ! Fetch members from Firebase with real-time updates
  // useEffect(() => {
  //   const membersCollection = collection(db, "members");
  //   const unsubscribe = onSnapshot(membersCollection, (snapshot) => {
  //     const membersList = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setMembers(membersList);
  //   });

  //   // !Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  // //! Handle score input change
  // const handleScoreChange = (id, score) => {
  //   setScores((prevScores) => ({
  //     ...prevScores,
  //     [id]: score,
  //   }));
  // };

  // //! Save updated scores and update ranks in Firebase
  // const saveScores = async () => {
  //   // !Update scores in Firebase
  //   for (const [id, score] of Object.entries(scores)) {
  //     const memberDoc = doc(db, "members", id);
  //     await updateDoc(memberDoc, { score: parseInt(score) });
  //   }

  //   //!Update ranks based on new scores
  //   const updatedMembers = members.map((member) => ({
  //     ...member,
  //     score:
  //       scores[member.id] !== undefined
  //         ? parseInt(scores[member.id])
  //         : member.score,
  //   }));

  //   // !Sort updated members by score in descending order and assign ranks
  //   updatedMembers.sort((a, b) => b.score - a.score);
  //   for (let i = 0; i < updatedMembers.length; i++) {
  //     const memberDoc = doc(db, "members", updatedMembers[i].id);
  //     await updateDoc(memberDoc, { rank: i + 1 }); //! Assign rank based on sorted order
  //   }

  //   alert("Scores and ranks updated successfully!");
  //   setScores({}); // !Clear the input fields after save
  // };

  // // !Sort members by rank before rendering
  // const sortedMembers = members.sort((a, b) => a.rank - b.rank);

  const handleScoreChange = () => {
    // useless method
  }
  const saveScores = () => {
    // useless method
  }

  const sortedMembers = [
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
    {
      id: 1,
      rank: 1,
      name: 'shamin',
      cur_score: 15
    },
  ]

  return (
    <div>
      {/* Main GDG Heading */}
      <Navbar />
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Select team field */}
          <div>
            <label className="text-[0.8rem] sm:text-[1rem] font-semibold mr-2">Select team:</label>
            <select className=" text-[0.8rem] sm:text-[1rem] p-1 sm:p-2 ml-0 w-32 sm:w-52 border border-gray-500 rounded-lg cursor-pointer">
              <option value="Technical">Technical</option>
              <option value="Technical">Graphics</option>
              <option value="Technical">Social Media Management</option>
              <option value="Technical">Video/Photograpgy</option>
              <option value="Technical">Content</option>
              <option value="Technical">Sponsorship Management</option>
              <option value="Technical">Event Management</option>
              <option value="Technical">Community</option>
            </select>
          </div>
          {/* user portal button */}
          <div className="flex gap-2">
            <button onClick={goToUserDashBoard} className="bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded-lg text-[10px] sm:text-[14px] py-[8px] px-[12px] sm:py-[10px] sm:px-[16px] font-bold">
              User Portal
            </button>
          </div>
        </div>

        {/* The table */}
        <div>
          <table className="text-center w-full bg-white my-4">
            <thead>
              <tr className="text-gray-700 font-semibold">
                <th className="p-4 text-center">Rank</th>
                <th className="text-center">Member Name</th>
                <th className="text-center">Current Score</th>
                <th className="text-center">Update Score (Limit 0-10)</th>
              </tr>
            </thead>
            <tbody>
              {sortedMembers.map((member) => (
                <tr
                  key={member.id}
                  className={
                    member.rank % 2 === 0 ? "bg-white" : "F7F6FE"
                  }
                >
                  <td className="p-4 text-center">#{member.rank}</td>
                  <td className="p-4 text-center">#{member.name}</td>
                  <td className="text-center">{member.cur_score}</td>
                  <td className="text-center">
                    <input
                      type="number"
                      min="0" max="10" step="1"
                      placeholder="Enter Score"
                      required
                      className="p-2 w-32 border border-gray-300 rounded-md"
                      // value={scores[member.id] || ""}
                      onChange={(e) =>
                        handleScoreChange(member.id, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {/* save button */}
          <button onClick={saveScores} className="bg-[rgb(98,77,227)] bg-gradient-to-r from-[rgba(98,77,227,1)] to-[rgba(54,42,125,1)] text-white rounded-lg text-[12px] sm:text-[14px] py-[8px] px-[12px] sm:py-[10px] sm:px-[16px] font-bold mb-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmindashBoard;
