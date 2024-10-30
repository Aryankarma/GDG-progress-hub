import React from "react";

function Leaderboard_nav_heading() {
    return <div className="w-full">
        <div className="flex justify-center items-center w-full ">
            <img
                src="/images/logo.jpg"
                alt="Logo"
                className="w-10 h-10 md:w-20 md:h-20 ms:w-15 ms:h-15 relative left-5"
            />
            <h1 className=" sm:text-3xl text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#140f30] via-[#4332a4] to-[#5540cb] ml-2">
                Google Developer Leaderboard
            </h1>
        </div>
    </div>;
}

export default Leaderboard_nav_heading;
