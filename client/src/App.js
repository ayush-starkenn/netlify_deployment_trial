import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/get");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const save = async () => {
    try {
      await axios.post("http://localhost:3001/postData", { title: title });
      // After saving data, fetch it again to update the UI
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="App">
      <h1>Hello Users How are you</h1>
      <br />
      <input
        type="text"
        placeholder="enter note"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={save}>Add</button>
      {data ? (
        data.map((ele) => (
          <div>
            <p>{ele.title}</p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
