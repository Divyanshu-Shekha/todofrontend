import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState();
  const [todoData, setTodoData] = useState();

  const update = async () => {
    try {
      await axios.put(
        `https://todobackend-rwoj.onrender.com/api/v1/update/` + id,
        {
          topic,
          todoData,
        },
        navigate("/")
      );
    } catch (error) {
      console.log(error);
    }
  };

  const findedUser = async () => {
    try {
      const user = await axios.get(
        `https://todobackend-rwoj.onrender.com/api/v1/selectedUser/` + id
      );
      setTopic(user.data.topic);
      setTodoData(user.data.tododata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findedUser();
  }, []);

  return (
    <div>
      {
        <form
          onSubmit={update}
          className="w-full flex flex-col gap-7 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            name="topic"
            className="bg-transparent border px-2 py-2 rounded-full outline-none w-full"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Your work here"
            value={todoData}
            name="todoData"
            className="bg-transparent border px-2 py-2 rounded-lg outline-none w-full"
            onChange={(e) => {
              setTodoData(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Click to UPDATE"
            className="bg-blue-300 rounded-lg px-1 py-1 w-[300px] text-black"
          />
        </form>
      }
    </div>
  );
};

export default Update;
