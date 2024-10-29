import React from 'react';

const trophyImages = [
    '/images/gold.png',
    '/images/silver.png',
    '/images/bronze.png'
];

const LeaderboardTables = ({ leaderboardData }) => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="overflow-x-auto w-3/4 px-4 py-8">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-200 sticky top-0 z-10 text-black">
                        <tr>
                            <th className="p-4 font-semibold">Rank</th>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold text-right">Team Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((player, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-purple-100'} hover:bg-purple-200 text-black`}
                            >
                                <td className="p-4 font-medium">
                                    {index < 3 ? (
                                        <img
                                            src={trophyImages[index]}
                                            className="w-7 h-7 inline-block"
                                        />
                                    ) : (
                                        `#${index + 1}`
                                    )}
                                </td>
                                <td className="p-4">{player.name}</td>
                                <td className="p-4 text-right">{player.team}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardTables;
