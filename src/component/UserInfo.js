import { useEffect } from "react";
import useFetch from "./useFetch";

const UserInfo = (props) => {
  const { allUser, isLoading } = useFetch(props.url);

  // const listHtml = "";
  const listHtml = !isLoading
    ? allUser.map((item) => (
        <li key={item.id}>
          {item.id}
          <ul>
            <li>{item.email}</li>
            <li>{item.name}</li>
            <li>{item.email_verified}</li>
            <li>{item.nickname}</li>
            <button onClick={() => console.log(item.id)}>More</button>
          </ul>
        </li>
      ))
    : "##Not found data";

  console.log("outside use effect:");
  console.log(allUser);
  console.log(isLoading);
  // const listHtml = allUser ? "## yes data is there" : "##Not found data";
  console.log(listHtml);

  return (
    <div className="main-div">
      <div>
        <p>All use data</p>
        <ul>
          {!isLoading
            ? allUser.map((item, index) => <h3 key={item.id}>{index}</h3>)
            : "$$$"}
        </ul>
        <p>{props.url}</p>
        <div>{listHtml}</div>
        <p>Loading......{isLoading ? "true" : "false"}</p>
      </div>
      <div className="more-data"></div>
    </div>
  );
};
export default UserInfo;
