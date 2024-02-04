import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
  });
  const [data, setData] = useState([]);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnt = { ...formData, id: new Date().getTime().toString() };
    setData([...data, newEnt]);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      pass: "",
      gender: "",
    });
  };
  console.log(data);

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            name="fname"
            autoComplete="off"
            value={formData.fname}
            onChange={handleOnChange}
            required
            id="fname"
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            autoComplete="off"
            value={formData.lname}
            onChange={handleOnChange}
            required
            id="lname"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={formData.email}
            onChange={handleOnChange}
            required
            id="email"
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            name="pass"
            autoComplete="off"
            value={formData.pass}
            onChange={handleOnChange}
            required
            id="pass"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            required
            id="gender"
            value={formData.gender}
            onChange={handleOnChange}
          >
            Genter
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div className="btn-form">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {data.map((item) => (
          <div key={item.id} className="form-data">
            <h3>{item.id}</h3>
            <p>
              {item.fname} {item.lname} {item.email} {item.pass} {item.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form2;
