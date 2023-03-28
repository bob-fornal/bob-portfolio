import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Tracker(props: { isMobile: boolean }) {
  return (
    <div className={`${styles.wrapper} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
      <div className={styles['left-30']}>
        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_250/v1679965929/portfolio/images/tracker_w4pgmw.png" alt="Tracker Page" />
      </div>
      <div className={styles['right-70']}>
        <h1>#100DaysOfCode Tracker</h1>
        <p>This is a project I build to track my process of #100DaysOfCode over time. All data is stored locally.</p>

        <a className={styles.links} href="https://github.com/bob-fornal/100-Days-Of-Code--Tracker" target="_blank">REPO</a>
        <a className={styles.links} href="https://bob-fornal.github.io/100-Days-Of-Code--Tracker/#/dashboard" target="_blank">SITE</a>
      </div>
    </div>
  );
}