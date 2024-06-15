import {
  Card,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";

import { getUserList } from "../redux/actions/user";
import { dateAgo, rangeDate } from "../utils/rangeDate";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [week, setWeek] = useState(0);
  const [rangeDates, setRangeDates] = useState({
    startDate: "",
    endDate: "",
  });
  const [params, setParams] = useState({
    page: 0,
    perPage: 25,
  });
  useEffect(() => {
    async function _getUserList() {
      var _week = dateAgo(moment(), week * 7);
      var _rangeDate = rangeDate(_week);
      setRangeDates(_rangeDate);
      dispatch(
        await getUserList({
          params: {
            startDate: moment(_rangeDate[0]).format("YYYY-MM-DD"),
            endDate: moment(_rangeDate[_rangeDate.length - 1]).format(
              "YYYY-MM-DD"
            ),
            page: params.page,
            perPage: params.perPage,
          },
        })
      );
    }
    _getUserList();
  }, [dispatch, params, week]);
  const handleChangeWeek = (newWeek) => {
    setWeek(newWeek);
  };
  const handleChangePage = (event, newPage) => {
    setParams({
      ...params,
      page: newPage,
    });
  };
  const handleChangeRowsPerPage = (event) => {
    setParams({
      ...params,
      perPage: parseInt(event.target.value),
    });
  };
  return (
    <Page title="Home">
      <Container maxWidth="md">
        <Card>
          <Grid container>
            <Grid item xs={6} md={6} xl={6}></Grid>
            <Grid item xs={6} md={6} xl={6}>
              <Stack direction={"row"} sx={{ verticalAlign: "middle" }}>
                <IconButton onClick={() => handleChangeWeek(week + 1)}>
                  <NavigateBeforeIcon />
                </IconButton>
                <IconButton onClick={() => handleChangeWeek(week - 1)}>
                  <NavigateNextIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <TableContainer
            sx={{ overflow: "scroll", height: "85vh", position: "relative" }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      minWidth: "200px",
                      position: "sticky",
                      left: "0px",
                      zIndex: 1000,
                      background: "#ffffff",
                      top: "0px",
                    }}
                  >
                    User name
                  </TableCell>
                  {rangeDates.length > 0 &&
                    rangeDates.map((data, index) => (
                      <TableCell sx={{ minWidth: "100px" }} key={index}>
                        {moment(data).format("DD-MMM")}
                      </TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userState?.list?.loading ? (
                  <TableRow>
                    <TableCell
                      sx={{
                        position: "sticky",
                        left: "0px",
                        zIndex: 999,
                        background: "#ffffff",
                      }}
                    >
                      <Skeleton />
                    </TableCell>
                    <TableCell colSpan={rangeDates.length}>
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                ) : userState?.list?.data?.data.length > 0 ? (
                  userState?.list?.data?.data.map((data, index) => (
                    <TableRow
                      hover
                      onClick={() =>
                        navigate(`/user/list-journey/${data.user}`)
                      }
                      key={index}
                    >
                      <TableCell
                        sx={{
                          position: "sticky",
                          left: "0px",
                          zIndex: 999,
                          background: "#ffffff",
                        }}
                      >
                        {data.username}
                      </TableCell>
                      {data.date.map((dataDate) => (
                        <TableCell>{dataDate.count}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={userState?.list?.data?.total}
            rowsPerPage={params.perPage}
            page={params.page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
};

export default HomePage;
