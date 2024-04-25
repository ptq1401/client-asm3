import classes from "./History.module.css";
import { json, useLoaderData, useNavigate } from "react-router-dom";
//----------------------------------------------------------
function History() {
  const navigate = useNavigate();
  const data = useLoaderData();
  if (data.length === 0) return <h2 className={classes.message}>No History</h2>;
  return (
    <div className={classes.container}>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>ID ORDER</th>
            <th>ID USER</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>TOTAL</th>
            <th>STATUS</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cur, i) => (
            <tr key={i}>
              <td>{cur._id.slice(0, 10) + "..."}</td>
              <td>{cur.user_id.slice(0, 10) + "..."}</td>
              <td>{cur.name.slice(0, 6)}</td>
              <td>{cur.phoneNumber}</td>
              <td>{cur.address.slice(0, 25) + "..."}</td>
              <td>{cur.total} $</td>
              <td>{cur.status}</td>
              <td>
                <button
                  className={classes.view}
                  onClick={() => navigate(`/history/${cur._id}`)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//---------------------------------------------------
export default History;
export async function loader() {
  const response = await fetch(
    "https://server-asm3-e5pk.onrender.com/get-order",
    {
      method: "GET",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw json(
      { message: "Can not fecth detail event" },
      {
        status: 550,
      }
    );
  }
  const data = await response.json();
  return data;
}
