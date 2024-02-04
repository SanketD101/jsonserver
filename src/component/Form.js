import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });
  const [data, setData] = useState([]);
  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...formData, id: new Date().getTime().toString() };
    setData([...data, newRecord]);
    setFormData({ fname: "", lname: "" });
  };

  console.log(formData);
  console.log("data :");
  console.log(data);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={inputEvent}
          />
        </div>
        <div>
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={inputEvent}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>
              {item.fname} {item.lname}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
