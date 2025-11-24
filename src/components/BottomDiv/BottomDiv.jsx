import styles from './BottomDiv.module.scss';
import attackImage from "/svgs/bottom-left.svg";
import oasisLogo from "/svgs/middle-right-1.svg";
import apogeeLogo from "/svgs/middle-right-2.svg";
import soundImage from "/imgs/middle-right-3.png";
import COCButton from '../cocButton/COCButton';
import { FaVolumeHigh } from 'react-icons/fa6';
import { FaVolumeMute } from 'react-icons/fa';
import { useState } from 'react';

export default function BottomDiv() {

    const [musicPlaying, setMusicPlaying] = useState(false); // later recieved via state

    return (
        <div className={styles.bottomDiv}>
            <img src={attackImage} className={styles.attackButton} />
            <div className={styles.festContainer}>
                <img src={oasisLogo} />
                <img src={apogeeLogo} />
            </div>
            {/* <img src={soundImage} className={styles.soundButton} /> */}
            <COCButton className={styles.soundButton} onClick={() => setMusicPlaying(prev => !prev)}>
                {
                    musicPlaying ?
                        <FaVolumeHigh className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
                        : <FaVolumeMute className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
                }
            </COCButton>
        </div>
    )
}
