import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function Wheel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <Image className={styles.img} src="assets/images/wheel.png" alt="Eddie on edge of wheel" width={200} height={200} />
      </div>
      <div className={styles['right-70']}>
        <h1>Wheel of EDJE</h1>
        
        <p>Spinning Wheel to select a person or prize</p>

        <Image src="assets/videos/wheel.webp" alt="wheel animation" width={640} height={360} />


        <a className={styles.links} href="https://github.com/bob-fornal/wheel-of-edje" target="_blank">REPO</a>
        <a className={styles.links} href="https://bob-fornal.github.io/wheel-of-edje/" target="_blank">SITE</a>
      </div>
    </div>
  );
}