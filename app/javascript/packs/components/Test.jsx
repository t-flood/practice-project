import React from "react";
import { useEffect, useState } from "react";

const Test = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/users.json")
      .then((response) => response.json())
      .then((data) => setUser(data[0].name));
  }, []);

  return (
    <div>
      <h1 className="p-4">Testing 1,2,3...{user}</h1>
    </div>
  );
};

export default Test;
