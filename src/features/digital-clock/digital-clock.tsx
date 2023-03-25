import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function DigitalClock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <Image className={styles.img} src="assets/images/digital-clock.png" alt="Work Notes Logo" width={200} height={200} />
      </div>
      <div className={styles['right-70']}>
        <h1>Digital Clock</h1>
        <p>This was mostly me plaing with CSS one day and I love the results.</p>
        
        <Image src="assets/videos/digital-clock.webp" alt="digital clock animation" width={640} height={360} />

        <a className={styles.links} href="https://github.com/bob-fornal/digital-clock" target="_blank">REPO</a>
        <a className={styles.links} href="https://bob-fornal.github.io/digital-clock/" target="_blank">SITE</a>
      </div>
    </div>
  );
}