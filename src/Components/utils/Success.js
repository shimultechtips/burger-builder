import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location = "https://burger-builder-five-livid.vercel.app/";
    }, 3000);
  }, []);

  return (
    <div style={{ margin: "20px 0px", textAlign: "center" }}>
      <p style={{ fontSize: "25px", color: "green" }}>
        Your Payment Was Successful!
      </p>
      <a
        style={{
          color: "green",
          textDecoration: "none",
          fontSize: "20px",
          border: "2px solid #ced4da",
          borderRadius: "10px",
          padding: "10px",
          fontWeight: "bold",
        }}
        href="https://burger-builder-five-livid.vercel.app/"
      >
        Go Back To Home
      </a>
    </div>
  );
};

export default Success;
