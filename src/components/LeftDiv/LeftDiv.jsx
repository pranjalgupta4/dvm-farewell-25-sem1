import styles from "./LeftDiv.module.scss";
import topLeft from "/svgs/top-left.svg";
import topLeftSub from "/svgs/top-left-sub.svg";
import middleLeft from "/svgs/middle-left.svg";
import bottomLeft from "/svgs/bottom-left.svg";

function LeftDiv({ className }) {
  return (
    <div className={`${styles.leftDiv} ${className}`}>
      <img src={topLeft} alt="topLeft" className={styles.topLeft} />
      <img src={topLeftSub} alt="topLeftSub" className={styles.topLeftSub} />
      <img src={middleLeft} alt="middleLeft" className={styles.middleLeft} />
      <img src={bottomLeft} alt="bottomLeft" className={styles.bottomLeft} />
    </div>
  );
}

export default LeftDiv;
