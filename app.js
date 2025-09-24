import {
  db,
  addDoc,
  collection,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "./firebase.js";

const loginFunc = async (ele) => {
  try {
    ele.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const loginUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

    if (loginUser) {
      console.log("User logged in:", loginUser.user);
      alert("Login successful ✅");
    }

  } catch (error) {
    console.log("Login error:", error.code);
    alert("Login failed: " + error.message);
  }
};

const addUser = async (name, email, pass) => {
  try {
    const userObj = {
      name,
      email,
      pass,
    };
    const addUserDoc = await addDoc(collection(db, "users"), userObj);
    console.log("addUserDoc", addUserDoc);
  } catch (error) {
    console.log("error", error);
  }
};


const signupFunc = async (ele) => {
  try {
    ele.preventDefault();

    const signupName = document.getElementById("addName").value;
    const signupEmail = document.getElementById("userEmail").value;
    const signupPassword = document.getElementById("userpassword").value; 

    const signupUser = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );

    if (signupUser) {
      addUser(signupName, signupEmail, signupPassword);

    alert("User Successfully Signed up");
}
    
  } catch (error) {
    console.log("error", error.code);
   // alert("Signup failed: " + error.message);
  }
};

const loginForm = document.getElementById("LoginForm");
loginForm.addEventListener("submit", loginFunc);

const createAccForm = document.getElementById("createAccForm");
createAccForm.addEventListener("submit", signupFunc);
