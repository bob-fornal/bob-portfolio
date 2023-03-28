import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function DigitalClock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_200/v1679965928/portfolio/images/digital-clock_dlpy6z.png" alt="Work Notes Logo" />
      </div>
      <div className={styles['right-70']}>
        <h1>Digital Clock</h1>
        <p>This was mostly me plaing with CSS one day and I love the results.</p>
        
        <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_640/v1679965929/portfolio/videos/digital-clock_ggd7t0.webp" alt="digital clock animation" />

        <a className={styles.links} href="https://github.com/bob-fornal/digital-clock" target="_blank">REPO</a>
        <a className={styles.links} href="https://bob-fornal.github.io/digital-clock/" target="_blank">SITE</a>
      </div>
    </div>
  );
}