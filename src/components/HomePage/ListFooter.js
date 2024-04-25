import classes from "./ListFooter.module.css";
//-----------------------------
function List(props) {
  return (
    <ul className={classes.list}>
      <li className={classes.title}>{props.title}</li>
      {props.list.map((cur, i) => (
        <li key={i}>
          <a href="#">{cur}</a>
        </li>
      ))}
    </ul>
  );
}
export default List;
