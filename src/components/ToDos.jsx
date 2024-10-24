import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ToDos = () => {
  const [todos, settodos] = useState([]);

  const handledelete = async (id) =>{
    await axios.delete(`https://todobackend-rwoj.onrender.com/api/v1/delete/${id}`)
  }
  const fetchdata = async () => {
    try {
      const response = await axios.get("https://todobackend-rwoj.onrender.com/api/v1/get");
      settodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  return (
    <div>
      {todos.map((value, index) => {
        return (
          <div className="flex gap-3 px-5 py-3" key={index}>
            <h4>{value.topic}</h4>
            <p className="px-2 justify-start">{value.tododata}</p>
            <input
              type="submit"
              value="Delete🚨"
              onClick={()=>handledelete(value._id)}
              className="bg-blue-300 rounded-lg px-1 py-1 h-10 w-[120px] text-black"
            />{" "}
           <Link to={`/Update/${value._id}`}> <input
              type="submit"
              value="Update✈"
              className="bg-blue-300 rounded-lg px-1 py-1 h-10 w-[120px] text-black"
            /></Link>
          </div>
        );
      })}
    </div>
  );
};

export default ToDos;
