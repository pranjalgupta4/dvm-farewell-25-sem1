import styles from "./RightDiv.module.scss";
import topRight from "/svgs/top-right.svg";
import topRightSub from "/svgs/top-right-sub.svg";
import middleRight1 from "/svgs/middle-right-1.svg";
import middleRight2 from "/svgs/middle-right-2.svg";
import middleRight3 from "/imgs/middle-right-3.png";

function RightDiv() {
  return (
    <div className={styles.rightDiv}>
      <img src={topRight} alt="topRight" className={styles.topRight} />
      <img src={topRightSub} alt="topRightSub" className={styles.topRightSub} />
      <img
        src={middleRight1}
        alt="middleRight1"
        className={styles.middleRight1}
      />
      <img
        src={middleRight2}
        alt="middleRight2"
        className={styles.middleRight2}
      />
      <img
        src={middleRight3}
        alt="middleRight3"
        className={styles.middleRight3}
      />
    </div>
  );
}

export default RightDiv;
