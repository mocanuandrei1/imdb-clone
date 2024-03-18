"use client";
import React from "react";

const error = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <span className="text-6xl">404</span>
      <h1>Something went wrong. Please try again later.</h1>
    </div>
  );
};

export default error;
