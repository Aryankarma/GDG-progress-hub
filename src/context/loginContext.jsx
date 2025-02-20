import React, { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [teamData, setTeamData] = useState(null); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (team) => {
        setTeamData(team);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setTeamData(null);
        setIsLoggedIn(false);
    };

    return (
        <TeamContext.Provider value={{ teamData, isLoggedIn, login, logout }}>
            {children}
        </TeamContext.Provider>
    );
};

export const useTeam = () => {
    return useContext(TeamContext);
};