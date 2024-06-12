import {
  Card,
  Container,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../components/Page";
import { getUserJourneyList } from "../redux/actions/user";

const ListJourney = () => {
  let { user } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [params, setParams] = useState({
    page: 0,
    perPage: 25,
  });
  useEffect(() => {
    async function _getUserJourneyList() {
      dispatch(
        await getUserJourneyList({
          user: user,
          params: {
            page: params.page,
            perPage: params.perPage,
          },
        })
      );
    }
    _getUserJourneyList();
  }, [dispatch, params, user]);
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
    <Page title="List Journey User">
      <Container maxWidth="md">
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID Journey</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Duration(Minutes)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userState?.loading ? (
                <TableRow>
                  <TableCell>
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ) : userState?.journey?.data?.data.length > 0 ? (
                userState?.journey?.data?.data.map((data, index) => (
                  <TableRow
                    hover
                    onClick={() =>
                      navigate(`/user/tracking/${data._id.journey}`)
                    }
                  >
                    <TableCell>{data._id.journey}</TableCell>
                    <TableCell>
                      {moment(data._id.date).format("DD-MMM")}
                    </TableCell>
                    <TableCell>{data.count}</TableCell>
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
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={userState?.journey?.data?.total}
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

export default ListJourney;
