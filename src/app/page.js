import Divider from "./component/Divider.jsx";
import Sec1 from "./component/Sec1.jsx";
import Sec2 from "./component/Sec2.jsx";
import Sec3 from "./component/Sec3.jsx";
import Sec4 from "./component/Sec4.jsx";
import Sec5 from "./component/Sec5.jsx";
import Sec6 from "./component/Sec6.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Sec1 />
      <Divider />
      <Sec2 />
      <Divider />
      <Sec3 />
      <Divider />
      <Sec4 />
      <Divider />
      <Sec5 />
      <Divider />
      <Sec6 />
    </div>
  );
}
