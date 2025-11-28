import styles from "./CloudAnimation.module.scss";
import cloud1 from "/imgs/coc-clouds-1.png";
import cloud2 from "/imgs/coc-clouds-2.png";
import cloud3 from "/imgs/coc-clouds-3.png";

export default function CloudAnimation() {
    return (
        <div className={styles.cloudsContainer}>
            <img className={styles.clouds} src={cloud1} />
            <img className={styles.clouds} src={cloud2} />
            <img className={styles.clouds} src={cloud3} />
            <img className={styles.cloudsInverted} src={cloud1} />
            <img className={styles.cloudsInverted} src={cloud2} />
            <img className={styles.cloudsInverted} src={cloud3} />
        </div>
    )
}
