const firebaseConfig = {
  apiKey: "AIzaSyCmI21wDHBsh-KbnWOq5SIrTgf3OpAnv0s",
  authDomain: "toolverse-auth-a1d83.firebaseapp.com",
  projectId: "toolverse-auth-a1d83",
  storageBucket: "toolverse-auth-a1d83.firebasestorage.app",
  messagingSenderId: "1099329360030",
  appId: "1:1099329360030:web:e399370ee12031172e6b8f",
  measurementId: "G-8L5NX7LLWD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Auth
const auth = firebase.auth();