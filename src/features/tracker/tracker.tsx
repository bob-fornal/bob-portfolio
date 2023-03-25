import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Tracker() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <Image className={styles.img} src="assets/images/tracker.png" alt="Tracker Page" width={250} height={125} />
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