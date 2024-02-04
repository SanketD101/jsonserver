import "./App.css";
import AllUser from "./component/AllUser";
import Header from "./component/Header";
import PageNotFound from "./component/PageNotFound";
import UserInfo from "./component/UserInfo";
// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import One from "./component/One";
import Form2 from "./component/Form2";

function App() {
  return (
    <>
      <Form2 />
      {/* <One /> */}
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<AllUser />} />
        <Route
          path="user"
          element={<UserInfo url={"http://localhost:8000/view"} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>
  );
}
export default App;
