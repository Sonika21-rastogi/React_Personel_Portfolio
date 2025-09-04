// import React, { useState } from "react";
// import axios from 'axios';



// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch("/submit", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();
// //       alert(data.message);
// //       setFormData({ name: "", email: "", message: "" }); // Reset form
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //       alert("Failed to submit form. Please try again.");
// //     }
// //   };

// const Contact =()=>{
//   const [name,setName] = useState();
//   const [email, setEmail] = useState();
//   const [message, setmessage] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const dataToSend = {
//       name,
//       email,
//       message
//     }
//     try {
//       const response = await axios.post('http://localhost:5000', dataToSend);
//       alert(response.data);
//     } catch (error) {
//       console.log(error)
//     }
// }

//   return (
//     <section id="contact" className="pt-16 bg-gray-100 mt-9 flex flex-col items-center justify-center">
//       <form
//         id="contactForm"
//         className="max-w-md mx-auto p-6 bg-white rounded shadow"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           onChange={(e)=>setName(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           onChange={(e)=>setEmail(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           required
//          onChange={(e)=>setmessage(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Contact Info */}
    
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000", { name, email, message });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <section className="pt-16 bg-gray-100 mt-9 flex flex-col items-center justify-center">
      <form
        className="max-w-md mx-auto p-6 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

