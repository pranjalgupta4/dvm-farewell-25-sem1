import styles from "./COCButton.module.scss";
import cocButtonImg from "/imgs/coc-button-bg.png";

import React from 'react'

export default function COCButton({ children, className, onClick }) {
    return (
        <div 
            className={`${className} ${styles.cocButton}`} 
            style={{backgroundImage: `url(${cocButtonImg})`}}
            onClick={() => onClick()}
        >
            {children}
        </div>
    )
}
