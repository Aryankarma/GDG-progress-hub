import React, { useState, useEffect } from "react";
import { fetchAllData } from "../services/FirebaseServices";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SuperAdmin = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [error, setError] = useState("");
  const [teamdata, setTeamdata] = useState([]);
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD?.trim();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const handleAuthSubmit = (password) => {
    if (password.trim() === adminPassword) {
      setLoginStatus(true);
    } else {
      setError("Access denied. Incorrect password.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dbdata = await fetchAllData();
      if (dbdata[0]?.Teams) {
        const formattedData = Object.values(dbdata[0]?.Teams).map((team) => {
          const updatedDate = new Date(team.updatedAt * 1000);
          const updatedMonth = format(updatedDate, "MMMM yyyy");
          const updatedMonthNum = updatedDate.getMonth() + 1;
          const updatedYearNum = updatedDate.getFullYear();

          return {
            name: team.name,
            updatedMonth,
            isUpdatedThisMonth:
              updatedMonthNum === currentMonth &&
              updatedYearNum === currentYear,
          };
        });

        setTeamdata(formattedData);
      }
    };
    
    fetchData();
  }, []);

  // sorting the data by month
  const sortedData = [...teamdata].sort((a, b) => {
    return new Date(b.updatedMonth) - new Date(a.updatedMonth);
  });
  

  return loginStatus ? (
    <div>
      <Navbar />
      <div className="container text-foreground bg-background !pt-[70px]">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between my-3">
            <div>
              <h2 className="font-semibold">Team Updates Status</h2>
            </div>
            <div className="flex gap-2">
              <Link to={"/"}>
                <button className="admin-button">Home</button>
              </Link>
            </div>
          </div>
          <Table className="w-full border text-center rounded-lg overflow-hidden shadow-md">
            <TableHeader>
              <TableRow className="bg-slate-700 hover:bg-slate-700">
                <TableHead className="text-center text-white">Team</TableHead>
                <TableHead className="text-center text-white">Updated Month</TableHead>
                <TableHead className="text-center text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.length > 0 ? (
                sortedData.map((team, index) => (
                  <TableRow key={index} className="border-b text-center">
                    <TableCell className="font-medium text-center">{team.name}</TableCell>
                    <TableCell className="text-center">{team.updatedMonth}</TableCell>
                    <TableCell className="text-center">
                      {team.isUpdatedThisMonth ? (
                        <span className="text-green-600 font-semibold text-center">
                          Updated this month
                        </span>
                      ) : (
                        <span className="text-red-500 font-semibold text-center">
                          Not updated this month
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center py-4 text-gray-500"
                  >
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  ) : (
    <AuthPopup onSubmit={handleAuthSubmit} error={error} />
  );
};

const AuthPopup = ({ onSubmit, error }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-card border text-foreground p-6 shadow-md rounded-lg w-96">
        <img
          className="mx-auto mb-6 w-24 h-24"
          src="./logo.png"
          alt="Google Developer Logo"
        />
        <h1 className="text-xl font-bold text-center mb-4">Sign in</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-muted border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <p className="text-red-500 text-center ">{error}</p>}
          <button
            type="submit"
            className="w-full text-foreground bg-accent hover:outline outline-1 font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdmin;
