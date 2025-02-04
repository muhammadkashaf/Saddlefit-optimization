import React from "react";
import StarsIcon from "assets/icons/stars_img.svg?react";
import RightArrowIcon from "assets/icons/chevron-right.svg?react";

import { useNavigate } from "react-router-dom";
import AddMySaddleForm from "../AddMySaddleForm";
import "./style.css";

const AddMySaddle = () => {
  const navigate = useNavigate();

  return (
    <div className="my-10 w-[90%] 2xl:w-[1338px] mx-auto">
      <div className="saddle_container !w-[185px]">
        <RightArrowIcon />
        <span
          className="saddle_overview"
          onClick={() => navigate("/user/my-saddle")}
        >
          Back to Saddle Overview
        </span>
      </div>
      <div className="w-[90%] 2xl:w-[1338px] mx-auto mt-10">
        <StarsIcon />
        <h1 className="sell_saddle__title">Saddle Details</h1>
      </div>
      <AddMySaddleForm />
    </div>
  );
};

export default AddMySaddle;