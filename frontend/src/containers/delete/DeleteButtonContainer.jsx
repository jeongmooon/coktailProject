import React from "react";
import { useNavigate } from "react-router-dom";
import DeletButtonComponets from "../../components/delete/DeletButtonComponets";
import client from "../../libs/api/client";

function DeleteButtonContainer({ itemId, data, setCoktailData }) {
  const navigate = useNavigate();

  const onRemove = async (itemId) => {
    try {
      const response = await client.delete(`/coktail/${itemId}`);
      navigate("/");
    } catch (error) {
      console.log("삭제 에러>>>>>>", error);
    }
  };

  return <DeletButtonComponets itemId={itemId} onRemove={onRemove} />;
}

export default DeleteButtonContainer;
