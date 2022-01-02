import React, { useState } from "react";
import Order from "../../assets/images/iconfinder_sort3_1542257 1.png";
import Data from "../Search/data.json";
const ResultSearcBtn = () => {
  

  return (
    <div>
      <div>
        <button className="result-search-btn result-search-btn-p">
          Search
        </button>
        <img className="order" src={Order} alt="order" />
        <p className="order-p" >Order By</p>
        
      </div>
    </div>
  );
};

export default ResultSearcBtn;
