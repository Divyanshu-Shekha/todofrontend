import React, { useEffect, useState } from "react";
import axios from "axios";

const Inputform = () => {
  const [topic, setTopic] = useState();
  const [todoData, setTodoData] = useState();
  const Submit = async () => {
    await axios
      .post("https://todobackend-rwoj.onrender.com/api/v1/create", { topic, todoData })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full px-7 my-3">
      <form
        onSubmit={Submit}
        className="w-full flex flex-col gap-7 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Topic"
          name="topic"
          className="bg-transparent border px-2 py-2 rounded-full outline-none w-full"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Your work here"
          name="todoData"
          className="bg-transparent border px-2 py-2 rounded-lg outline-none w-full"
          onChange={(e) => {
            setTodoData(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Click to ADD"
          className="bg-blue-300 rounded-lg px-1 py-1 w-[300px] text-black"
        />
      </form>
    </div>
  );
};

export default Inputform;
