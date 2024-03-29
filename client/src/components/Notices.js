import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [notice, setNotice] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await axios.get("http://localhost:8005/api/gatebot/notices");
        setNotices(response.data.notices);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchNotices();
  }, []);


  return (
    <div>
      <h1>This is Notices Page</h1>
      <div>
      {notices.map((notice) => (
  <div key={notice._id} className="mb-4">
    <h3>{notice.title}</h3>
    <p>{notice.description}</p>
    <p>Posted by: {notice.postedBy.username}</p>
  </div>
))}
      </div>
      {/* <Link to="/PostNotice" className="block mt-4 bg-green-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">
        Post New Notice      </Link> */}
    </div>
  );
};

export default Notices;
// use this as reference