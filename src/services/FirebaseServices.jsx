import { db } from "../firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDocs, collection, query } from "firebase/firestore";

export const firebaseLogin = async (teamName, password) => {
  try {
    const teamQuery = query(collection(db, "main"));
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
    const teamQuery = query(collection(db, "main"));
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

export const updateScores = async (teamName, updatedMembers) => {
  teamName = teamName + " Team"; // because DB has names like "Graphics Team"

  try {
    const docRef = doc(db, "main", "data-2024");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const teamData = docSnap.data();

      if (teamData.Teams && teamData.Teams[teamName]) {
        const currentDate = new Date();
        const currentDay = currentDate.getUTCDate(); // Get current day (UTC)

        if (currentDay !== 20 && currentDay !== 21) {
          alert("Updates are only allowed on the 20th and 21st of each month.");
          return false; // Restrict update if not on the allowed dates
        }

        // Proceed with updating scores and updatedAt value
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        teamData.Teams[teamName].members = updatedMembers;
        teamData.Teams[teamName].updatedAt = currentTime;

        await updateDoc(docRef, { Teams: teamData.Teams });
        console.log("Scores updated successfully");
        return true;
      } else {
        console.log("Specified team not found");
        return false;
      }
    } else {
      console.log("Document does not exist");
      return false;
    }
  } catch (error) {
    console.error("Error updating scores:", error);
    return false;
  }
};



export const fetchAllData = async () => {
  try {
    const allDataQuery = query(collection(db, "main"));
    const querySnapshot = await getDocs(allDataQuery);
    const allData = querySnapshot.docs.map(doc => doc.data());
    return allData;
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw new Error("Failed to fetch all data");
  }
};
