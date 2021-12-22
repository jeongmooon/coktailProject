import React from "react";
import DetailContainer from "../containers/detail/DetailContainer";
import DeleteButtonContainer from "../containers/delete/DeleteButtonContainer";

const DetailPage = ({ itemId, getDetailData, detailData, isAdminLogined }) => {
  return (
    <>
      <DetailContainer
        itemId={itemId}
        getDetailData={getDetailData}
        detailData={detailData}
        isAdminLogined={isAdminLogined}
      />
      {isAdminLogined ? <DeleteButtonContainer itemId={itemId} /> : ""}
    </>
  );
};

export default DetailPage;
