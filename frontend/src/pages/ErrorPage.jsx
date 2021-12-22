import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        textAlign: "center",
        height: "80vh",
        paddingTop: "50px",
        fontSize: "20px",
      }}
    >
      잘못된 경로입니다
      <p onClick={onClickHome} style={{ cursor: "pointer" }}>
        홈으로가기
      </p>
    </div>
  );
};

export default ErrorPage;
