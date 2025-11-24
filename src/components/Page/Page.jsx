import styles from "./Page.module.scss";

import LeftDiv from "../LeftDiv/LeftDiv";
import CenterDiv from "../CenterDiv/CenterDiv";
import RightDiv from "../RightDiv/RightDiv";
import BottomDiv from "../BottomDiv/BottomDiv";

function Page() {
  return (
    <div className={styles.page}>
      <LeftDiv className={styles.leftDiv} />
      <CenterDiv className={styles.centerDiv} />
      <RightDiv className={styles.rightDiv} />
    </div>
  );
}
export default Page;
