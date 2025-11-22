import styles from "./Page.module.scss";

import LeftDiv from "../LeftDiv/LeftDiv";
import RightDiv from "../RightDiv/RightDiv";

function Page() {
  return (
    <div className={styles.page}>
      <LeftDiv />
      <RightDiv />
    </div>
  );
}
export default Page;
