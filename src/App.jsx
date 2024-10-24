import React from "react";
import Header from "./components/Header";
import Inputform from "./components/Inputform";
import ToDos from "./components/ToDos";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <Header />
        <div className="flex justify-center items-center flex-col py-0 bg-slate-700 text-white h-[100vh]">
      <Routes>
          <Route path="/" element={<Inputform />} />
          <Route path="/Update/:id" element={<Update />} />
      </Routes>
          <ToDos />
        </div>
      <Footer />
    </>
  );
};

export default App;
