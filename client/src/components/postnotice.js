import React, { useState } from 'react';
import axios from 'axios';

const NoticeForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8005/api/gatebot/notice', { title, content, postedBy });
      alert('Notice created successfully');
      // Reset form fields
      setTitle('');
      setContent('');
      setPostedBy('');
    } catch (error) {
      alert('Failed to create notice');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a Notice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Posted By:
          <input
            type="text"
            value={postedBy}
            onChange={(e) => setPostedBy(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NoticeForm;
