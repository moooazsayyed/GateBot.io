import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostNotice = () => {
  const [notice, setNotice] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get the JWT token from localStorage
      const token = localStorage.getItem("token");

      // Set the Authorization header with the token
      const headers = {
        Authorization: `Bearer ${token}`
      };

      // Send the request with the token in the header
      await axios.post("http://localhost:8005/api/gatebot/notice", notice, { headers });

      toast.success("Notice posted successfully");
      // Reset the notice state to clear the form fields
      setNotice({
        title: "",
        description: ""
      });
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error posting notice:", error.response);
      // Display an error toast message
      toast.error("Failed to post notice");
    }
  };

  const handleChange = (event) => {
    // Update the notice state with the new value for the field
    setNotice({ ...notice, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Post New Notice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={notice.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={notice.description}
            onChange={handleChange}
            placeholder="Enter description"
          ></textarea>
        </div>
        <button type="submit">Post Notice</button>
      </form>
    </div>
  );
};

export default PostNotice;