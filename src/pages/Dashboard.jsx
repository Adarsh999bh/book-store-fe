import React from "react";
import { Redirect } from "react-router-dom";
import Appbar from "../components/appbar";
import { Box } from "@mui/system";
// import bookService from "../service/bookService";
// import {setBooks} from "../actions/bookActions"
// import { useDispatch } from "react-redux";
const Dashboard = () => {
  const token = localStorage.getItem("token");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     fetchitem();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchitem = () => {
//     bookService
//       .getBooks(1)
//       .then((res) => {
//         dispatch(setBooks(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <Appbar />
        {/* <Box component="main" className="book-container">
          <Book/>
        </Box> */}
      </Box>
    );
  }
};

export default Dashboard;