import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtM74tXbyxF7c2MSSFuf-hjq-o9v_vdRw",
  authDomain: "netflix-604a7.firebaseapp.com",
  projectId: "netflix-604a7",
  storageBucket: "netflix-604a7.appspot.com",
  messagingSenderId: "1015914463948",
  appId: "1:1015914463948:web:f5705f02f60399f73c3869",
  measurementId: "G-82GR6FK4F6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
