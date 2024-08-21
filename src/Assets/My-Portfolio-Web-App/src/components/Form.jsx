import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import "../css/Form.css";
import { firebaseApp } from "../config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { ToastContainer, Bounce } from "react-toastify";
import ShowToast from "./ToastAlert";

const db = getFirestore(firebaseApp);

const Form = () => {
  const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handling Input-Change
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  }

  // Get Form-Data
  useEffect(() => {
    const getFormData = async () => {
      try {
        const data = await getDocs(collection(db, "mk-contact-form"));
        const filteredData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFormData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error("Error in fetching data: ", error);
      }
    };
    // getFormData();
  }, []);

  // generating Timestamp-ID
  const generateTimestampId = () => {
    const timestamp = firebase.firestore.Timestamp.now();

    // Convert the timestamp to a string or any format you desire :-
    // const timestampString = timestamp.toDate().getTime().toString();
    const timestampString = timestamp.toDate().toString();

    // Clean up the string to remove any invalid characters
    const cleanedTimestampString = timestampString.replace(/[^a-zA-Z0-9]/g, "");
    return cleanedTimestampString;
  };

  // Handling Form-Submission
  async function handleFormSubmit(e) {
    e.preventDefault();

    const generatedId = generateTimestampId();
    const docId =
      name.slice(0, 10) +
      ", " +
      generatedId.slice(6, 8) +
      "-" +
      generatedId.slice(3, 6) +
      "-" +
      generatedId.slice(10, 12) +
      ", " +
      generatedId.slice(12, 14) +
      ":" +
      generatedId.slice(14, 16) +
      ", " +
      generatedId.slice(0, 3);

    console.log(docId);

    try {
      // await addDoc(collection(db, "mk-contact-form"), {
      await setDoc(doc(db, "mk-contact-form", docId), {
        name: name,
        email: email,
        message: message,
      });

      // throw Error("Error Created");
      console.log("Message Submitted SUCCESSFULLY !!");
      ShowToast("Message Submitted SUCCESSFULLY !!", "success-toast");

      setTimeout(() => {
        location.reload();
      }, 1500);
    } catch (err) {
      console.error("ERROR occurred !!", err);
      ShowToast("ERROR occurred !!", "failure-toast");
    }
  }

  return (
    <>
      <ToastContainer transition={Bounce} />
      <div className="form-container">
        <h1>Send your Message</h1>
        <div className="registration-form">
          <form onSubmit={(e) => handleFormSubmit(e)} className="form">
            <div className="inputContainer">
              <div className="containerInput">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="Your Name ..."
                  type="text"
                  required
                />
              </div>
              <div className="containerInput">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="Your Email ..."
                  type="email"
                  required
                />
              </div>
              <div className="containerInput message-input">
                <input
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="Your Message ..."
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="buttonContainer">
              <button className="form-btn">
                <span>Submit</span>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
