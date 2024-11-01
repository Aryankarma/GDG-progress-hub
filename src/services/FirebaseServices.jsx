import { db } from "../firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";

export const fetchTeam = async () => {
  try {
    const teamQuery = query(
      collection(db, "testData")
    );
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

