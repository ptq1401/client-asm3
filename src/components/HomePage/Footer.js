import classes from "./Footer.module.css";
import List from "./ListFooter";
//------------------------Footer---------------------
const list_1 = [
  "help & contact us",
  "return & refunds",
  "online stores",
  "terms & conditions",
];
const list_2 = ["what we do", "available services", "latest posts", "FAQs"];
const list_3 = ["Twitter", "Instagram", "Facebook", "Pinterest"];
function Footer() {
  return (
    <div className={classes.footer}>
      <List list={list_1} title="customer services"></List>
      <List list={list_2} title="company"></List>
      <List list={list_3} title="social media"></List>
    </div>
  );
}
export default Footer;
