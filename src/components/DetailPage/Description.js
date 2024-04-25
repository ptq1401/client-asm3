import classes from "./Description.module.css";
//----------------------------------------------------
function Description({ desc }) {
  //Tách dòng chuỗi string
  let string = [];
  let start_index = 0;
  let end_index = desc.indexOf("\n");
  while (end_index > 0) {
    string.push(desc.slice(start_index, end_index));
    start_index = end_index;
    end_index = desc.indexOf("\n", end_index + 1);
  }
  string.push(desc.slice(start_index));
  //---------------------------
  return (
    <div className={classes.description}>
      <span>DESCRIPTION</span>
      <h3>PRODUCT DESCRIPTION</h3>
      {string.map((cur, i) => (
        <p key={i}>{cur}</p>
      ))}
    </div>
  );
}
export default Description;
