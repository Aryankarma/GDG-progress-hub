import React from "react";
import LeaderboardTables from "../components/LeaderboardTables";
import TopMember_Images from "../components/TopMember_Images";
import Leaderboard_drop_Btn from "../components/Leaderboard_drop_Btn";
import Leaderboard_nav_heading from "../components/Leaderboard_nav_heading";

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
        <Leaderboard_nav_heading />
        <Leaderboard_drop_Btn />
        <TopMember_Images {...{ leaderboardData }} />
        <LeaderboardTables {...{ leaderboardData }} />
    </div>;
}

export default LeaderboardPage;
