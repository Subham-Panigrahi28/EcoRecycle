import { initializeApp } from "firebase/app";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut 
} from "firebase/auth";
import { 
  getFirestore, collection, setDoc, getDocs, query, where, updateDoc, doc 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDSVC_2tvPH3W4K2lcGTTaU4GPdcQP87g",
  authDomain: "ecorecycle-cf84e.firebaseapp.com",
  projectId: "ecorecycle-cf84e",
  storageBucket: "ecorecycle-cf84e.appspot.com", // Fixed incorrect URL
  messagingSenderId: "785217615932",
  appId: "1:785217615932:web:cec9eb0b9d35faf14bab39",
  measurementId: "G-C7H7EZS6QY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔥 Register User with Better Firestore Handling
export const registerUser = async (email, password, userType) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ User created:", userCredential.user.uid);

    // Store user data with UID as document ID (Prevents duplicates)
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      email,
      userType,
      createdAt: new Date().toISOString()
    });

    console.log("✅ User document created in Firestore");
    return { user: userCredential.user, error: null };
  } catch (error) {
    console.error("❌ Error in registerUser:", error.message);
    return { user: null, error: error.message };
  }
};

// 🔥 Login User & Fetch User Data
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ User logged in:", userCredential.user.uid);

    // Query Firestore for user data
    const userRef = doc(db, "users", userCredential.user.uid);
    const userSnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", userCredential.user.uid)));

    if (!userSnapshot.empty) {
      const userData = userSnapshot.docs[0].data();
      console.log("✅ User data found:", userData);
      return { user: { ...userCredential.user, userType: userData.userType }, error: null };
    } else {
      console.warn("⚠️ No user data found in Firestore.");
      return { user: null, error: "User data missing in Firestore." };
    }
  } catch (error) {
    console.error("❌ Error in loginUser:", error.message);
    return { user: null, error: error.message };
  }
};

// 🔥 Logout User
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("✅ User logged out");
    return { error: null };
  } catch (error) {
    console.error("❌ Error in logoutUser:", error.message);
    return { error: error.message };
  }
};

// 🔥 Create Pickup Request
export const createPickupRequest = async (pickupData) => {
  try {
    const docRef = await setDoc(doc(collection(db, "pickups")), {
      ...pickupData,
      status: "pending",
      createdAt: new Date().toISOString()
    });

    console.log("✅ Pickup request created:", docRef.id);
    return { id: docRef.id, error: null };
  } catch (error) {
    console.error("❌ Error in createPickupRequest:", error.message);
    return { id: null, error: error.message };
  }
};

// 🔥 Update Pickup Status
export const updatePickupStatus = async (pickupId, status) => {
  try {
    await updateDoc(doc(db, "pickups", pickupId), { status });
    console.log("✅ Pickup status updated:", status);
    return { error: null };
  } catch (error) {
    console.error("❌ Error in updatePickupStatus:", error.message);
    return { error: error.message };
  }
};

// 🔥 Get Pickup Requests
export const getPickupRequests = async (userType, userId) => {
  try {
    let pickupQuery;

    if (userType === "corporate") {
      pickupQuery = query(collection(db, "pickups"), where("corporateId", "==", userId));
    } else {
      pickupQuery = query(collection(db, "pickups"), where("status", "==", "pending"));
    }

    const querySnapshot = await getDocs(pickupQuery);
    const pickups = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log("✅ Pickup requests fetched:", pickups.length);
    return { pickups, error: null };
  } catch (error) {
    console.error("❌ Error in getPickupRequests:", error.message);
    return { pickups: [], error: error.message };
  }
};
