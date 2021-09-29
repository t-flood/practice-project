import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/users.json", { name }).then((response) => {
      setName(response.data.name);
    });
  };

  useEffect(() => {
    axios.get("/users.json").then((response) => {
      const names = response.data;
      console.log(names);
      const people = [];
      const nameItems = names.map((x) => x.name);
      console.log(nameItems);

      nameItems.map((x) => setNameList((nameList) => [...nameList, x]));
      setNameList(nameItems);
    });
  }, []);
  console.log(nameList);

  return (
    <div>
      <h1 className="p-4">Testing 1,2,3...{name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{nameList}</p>
    </div>
  );
};

export default Test;
