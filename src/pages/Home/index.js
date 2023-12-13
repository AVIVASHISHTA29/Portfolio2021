import React from 'react';
import { FiInstagram } from "react-icons/fi";
import aboutImage from '../../assets/images/about.jpg';
import { Macbook3D } from '../../components/Home/Macbook3D';
import { IPhone } from '../../components/Home/iPhone';
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
            <div className={styles.lowerDiv}>
                <div className={styles.aboutMe} style={{ backgroundImage: `url(${aboutImage})` }}>
                    <h1 className={styles.smallheading}>ABOUT<br /> ME</h1>
                </div>
                <div className={styles.games}>
                    <div className={styles.iphoneModel}><IPhone /></div>
                    <h1 className={styles.smallGamesheading} >GAMES & <br />MOBILE APPS</h1>
                </div>
                <div className={styles.onlineSessions}>
                    <h1 className={styles.smallheading}>ONLINE SESSIONS</h1>
                    <h1 className={styles.smallheadingStroke}>50K+ VIEWS</h1>
                </div>
            </div>
        </div >
    )
}

export default Home