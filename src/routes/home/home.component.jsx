import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/diretory/directory.component";

const Home = () => {


  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
