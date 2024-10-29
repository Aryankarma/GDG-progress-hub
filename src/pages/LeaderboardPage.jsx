import React from "react";
import LeaderboardTables from "../components/LeaderboardTables";

function LeaderboardPage() {
    return <div>

        {/* pass db sorted data to below component */}
        <LeaderboardTables />
    </div>;
}

export default LeaderboardPage;
