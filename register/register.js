import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBr2ewXwlDalvQMQMTvqW35yAj07IRQqWQ",
  authDomain: "nvme-b2adf.firebaseapp.com",
  databaseURL: "https://nvme-b2adf-default-rtdb.firebaseio.com",
  projectId: "nvme-b2adf",
  storageBucket: "nvme-b2adf.appspot.com",
  messagingSenderId: "777208438874",
  appId: "1:777208438874:web:fffbca0f6b9516f8dff863",
  measurementId: "G-LM5BE3WGXT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("button").addEventListener("click",function() {
  var email =document.getElementById("email").value;
  var password =document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user);
    alert("Registered successfully");
    setTimeout(()=> {
        window.location.href = "../index.html";
    },2000);
  })
  .catch((error) => {
    alert("please enter valid email-id")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
document.getElementById("login").addEventListener("click",function() {
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log(user);
      alert("Login successfully");
      setTimeout(()=> {
        window.location.href = "../index.html";
    },2000);
    })
    .catch((error) => {
      alert("please enter valid email-id")
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  })