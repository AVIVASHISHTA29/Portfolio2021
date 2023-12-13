import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { Macbook3D } from '../../components/Home/Macbook3D';
import styles from "./styles.module.css";

function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.upperDiv}>
                <div className={styles.text}>
                    <div className={styles.left}>
                        <h1 className={styles.heading}>
                            AVI
                            <br />
                            VASHISHTA.
                        </h1>
                        <h1 className={styles.strokeHeading}>
                            WEB <br />
                            DEVELOPER
                        </h1>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.circle}>
                            <FiInstagram />
                        </div>
                    </div>
                </div>
                <div className={styles.webProjects}>
                    <h1 className={styles.webHeading}>
                        WEB PROJECTS
                    </h1>
                    <div className={styles.model}><Macbook3D /></div>

                </div>
            </div>
            <div className={styles.lowerDiv}></div>
        </div>
    )
}

export default Home