import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

import { apiUri } from "../../../config";
import InfoList from "../components";
import { BottomPagination } from "../../../components";
import { colors } from "../../../theme";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(async () => {
    try {
      setLoading(true);
      const result = await axios.get(apiUri + "?page=" + currentPage);
      setData(result.data.results);
      setCurrentPage(result.data.page);
      setTotalPages(result.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  // change page
  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const container = {
    backgroundColor: colors.black,
    display: "flex",
    flexFlow: "column",
    height: "100%",
    overflowY: "scroll",
    minHeight: `calc(100vh - 170px)`,
  };

  const titleStyle = {
    fontStyle: "italic",
    textShadow: `4px 4px 5px gray`,
    fontSize: 39,
    paddingLeft: 39,
    color: colors.white,
  };

  return (
    <div>
      <div style={container}>
        <p style={titleStyle}>Detalji o nama...</p>

        <InfoList data={data} loading={loading} />
      </div>
      <BottomPagination>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          shape="rounded"
        />
      </BottomPagination>
    </div>
  );
};
