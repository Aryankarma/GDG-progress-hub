import React from "react";
import LeaderboardTables from "../components/LeaderboardTables";
import TopMember_Images from "../components/TopMember_Images";
import Leaderboard_Nav_drop_Btn from "../components/Leaderboard_Nav_drop_Btn";

// Sample data for leaderboard, replace with sorted db data after firebase implementation
const leaderboardData = [
    { name: "Alice", team: "Technical" },
    { name: "Bob", team: "Technical" },
    { name: "Charlie", team: "Technical" },
    { name: "Dave", team: "Technical" },
    { name: "Eve", team: "Technical" },
    { name: "Frank", team: "Technical" },
    { name: "Grace", team: "Technical" },
    { name: "Heidi", team: "Technical" },
    { name: "Ivan", team: "Technical" },
    { name: "Judy", team: "Technical" },
];

function LeaderboardPage() {
    return <div>
        <Leaderboard_Nav_drop_Btn />
        {/* pass db images and name data to below component*/}
        <TopMember_Images {...{ leaderboardData }} />
        {/* pass db sorted data to below component */}
        <LeaderboardTables {...{ leaderboardData }} />
    </div>;
}

export default LeaderboardPage;
