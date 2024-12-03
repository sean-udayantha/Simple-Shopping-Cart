// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCrJEMG2srxm665yfJUJolYSiYX5Pj95vU",
//   authDomain: "dts-client.firebaseapp.com",
//   projectId: "dts-client",
//   storageBucket: "dts-client.appspot.com",
//   messagingSenderId: "880085947366",
//   appId: "1:880085947366:web:ee8010f84df7588733bc27",
//   measurementId: "G-BBWE0Q93CP",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBxtPM5A8CTwiw9q5sAaBBHtyXiN52SUZQ",
  authDomain: "dashboard-domo.firebaseapp.com",
  projectId: "dashboard-domo",
  storageBucket: "dashboard-domo.firebasestorage.app",
  messagingSenderId: "153770498099",
  appId: "1:153770498099:web:d50cdafdeda7bea705ab46",
  measurementId: "G-VWHVYMJ6DH"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
// const analytics = getAnalytics(app);
