import { db } from "../firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

export const firebaseLogin = async (teamName, password) => {
  try {
    const teamQuery = query(collection(db, "testData"));
    const querySnapshot = await getDocs(teamQuery);
    const teamData = querySnapshot.docs[0].data().Teams;
    if (teamData) {
      const Credentials = teamData[teamName];
      
      if (Credentials.passcode == password) {
        console.warn("Loging Successfull");
        return Credentials;
      }
    }
    return null; // Invalid credentials or team not found
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed.");
  }
};
export const fetchTeam = async () => {
  try {
    const teamQuery = query(collection(db, "testData"));
    const querySnapshot = await getDocs(teamQuery);
    if (!querySnapshot.empty) {
      const teamData = querySnapshot.docs[0].data();
      return teamData;
    } else {
      console.log("Team not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching team:", error);
    throw new Error("Failed to fetch team data");
  }
};
