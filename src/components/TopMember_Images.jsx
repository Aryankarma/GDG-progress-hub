import React from 'react';

const TopMember_Images = ({ leaderboardData }) => {
    return (
        <div className="flex justify-around items-center text-center mx-auto my-[-1.5rem] pt-20 relative w-[80%] ">
            {/* Image Item 2 */}
            <div className="flex flex-col items-center">
                <img
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                    alt="Image 2"
                    className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] sm:w-[140px] sm:h-[140px] rounded-full object-cover"
                />
                <p className="mt-5 font-bold text-[rgb(6,6,109)]">2. {leaderboardData[1].name}</p>
            </div>

            {/* Image Item 1*/}
            <div className="flex flex-col items-center relative" style={{ bottom: '3rem' }}>
                <img
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                    alt="Image 1"
                    className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] rounded-full object-cover"
                />
                <p className="mt-5 font-bold text-[rgb(6,6,109)]">1. {leaderboardData[0].name}</p>
            </div>

            {/* Image Item 3 */}
            <div className="flex flex-col items-center">
                <img
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufDB8fDB8fHww"
                    alt="Image 3"
                    className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] sm:w-[140px] sm:h-[140px] rounded-full object-cover"
                />
                <p className="mt-5 font-bold text-[rgb(6,6,109)]">3. {leaderboardData[2].name}</p>
            </div>
        </div>
    );
};

export default TopMember_Images;





