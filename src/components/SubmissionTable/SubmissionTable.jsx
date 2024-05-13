import React, { useState } from 'react';

function SubmissionTable() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    balance: ''
  });
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.age && formData.balance) {
      setSubmissions([...submissions, formData]);
      setFormData({
        name: '',
        email: '',
        age: '',
        balance: ''
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="balance">Balance:</label>
          <input type="number" id="balance" name="balance" value={formData.balance} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.age}</td>
              <td>{submission.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionTable;