import { Box, Pagination } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  getDepartments,
  getIsLoading,
} from "../redux/departments/departments-selectors";
import { setPageNumber } from "../redux/departments/departments-slice";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderColor: "rgb(211, 47, 47)",
          color: "rgb(211, 47, 47)",
        },
        page: {
          borderColor: "rgb(211, 47, 47)",

          color: "rgb(211, 47, 47)",
          "&.Mui-selected": {
            backgroundColor: "rgb(211, 47, 47)",
            color: "white",
          },
        },
        previous: {
          color: "rgb(211, 47, 47)",
        },
        next: {
          color: "rgb(211, 47, 47)",
        },
      },
    },
  },
});

export const PaginationC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const isLoading = useSelector(getIsLoading);

  const departmentsData = useSelector(getDepartments);
  const { info } = departmentsData;

  useEffect(() => {
    if (info) {
      const { totalCount } = info;
      setNumberOfPages(Math.ceil(totalCount / 20));
    }
  }, [info]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(setPageNumber(page));
  }, [page, dispatch]);

  if (numberOfPages < 2) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mb={2}
      >
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          variant="outlined"
          disabled={isLoading}
        />
      </Box>
    </ThemeProvider>
  );
};
