import {useState} from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function ContactCard({animationVariants}) {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changeMessage = (e) => { 
    setMessage(e.target.value)
  }

  const handleSubmit = () => {
    if (email === "" || message === "") {
      alert("Please fill out all fields")
      return
    }

    const data = {
      email: email,
      message: message
    }
    const response = axios.post("http://localhost:3001/contact", data)

    if (response.data.success) {
      alert("Message sent")
    } else {
      alert("Message failed to send. Please try again later")
    }
  }

  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={"resume"}
        className="text-white border-white border-2 rounded-md min-h-full flex-grow mx-2 px-6 flex flex-col justify-evenly items-center"
      >
        <h1 className="text-2xl font-bold">Contact</h1>
        <div className="w-[80%] flex justify-between items-center">
          <label htmlFor="email" className="text-lg font-bold w-[20%]"> Email: </label>
          <input type="email" name="email" placeholder="SpaceCowboy@bebop.com" className="text-textc bg-black border-2 focus:ring-textc focus:ring-2 border-white rounded-md p-2 flex-grow" onChange={changeEmail} />
        </div>
        <div className="w-[80%] flex justify-between items-center">
          <label htmlFor="message" className="text-lg font-bold w-[20%]"> Message: </label>
          <input type="text" name="message" placeholder="Something important here" className="text-black rounded-md p-2 flex-grow" onChange={changeMessage} />
        </div>
        <button onClick={handleSubmit}>
          Send
        </button>
      </motion.div>
    </>
  );
}
