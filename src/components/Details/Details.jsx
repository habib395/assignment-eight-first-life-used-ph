import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const {
    image,
    serviceName,
    category,
    description,
    duration,
    pricing,
    counselor,
    rating,
  } = useLoaderData();

  const [feedback, setFeedback] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleFeedback = () => {
    setFeedback(inputValue);
    setInputValue(""); 
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <div className="w-11/12 mx-auto hero-content flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="max-w-lg w-full h-full rounded-lg shadow-2xl"
          alt={serviceName}
        />
        <div>
          <h2 className="card-title text-3xl my-4">
            {counselor}
            <div className="badge badge-accent text-base">
              {rating}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </h2>
          <h1 className="card-title">
            {serviceName}
            <div className="badge badge-accent">{pricing}</div>
          </h1>
          <p className="py-6">{description}</p>
          <div className="my-2 flex items-center gap-3">
            Time: {duration}
            <p className="badge badge-accent">{category}</p>
          </div>
          <br />

          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="feedback"
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)} 
                />
              </div>
            </div>
            <div className="indicator">
              <button
                onClick={handleFeedback}
                className="btn btn-accent join-item"
              >
                Feedback
              </button>
            </div>
          </div>
         
          <div className="font-bold my-10">Feedback: {feedback}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;