import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function Wheel(props: { isMobile: boolean }) {
  return (
    <div className={`${styles.wrapper} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
      <div className={styles['left-30']}>
        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_200/v1679965929/portfolio/images/wheel_kej4ur.png" alt="Eddie on edge of wheel" />
      </div>
      <div className={styles['right-70']}>
        <h1>Wheel of EDJE</h1>
        
        <p>
          Spinning Wheel to select a person or prize. This began as an exploration of CANVAS but became important
          as Covid hit a few years ago.
        </p>

        <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_640/v1679965930/portfolio/videos/wheel_yrm66h.webp" alt="wheel animation" />

        <a className={styles.links} href="https://github.com/bob-fornal/wheel-of-edje" target="_blank">REPO</a>
        <a className={styles.links} href="https://bob-fornal.github.io/wheel-of-edje/" target="_blank">SITE</a>
      </div>
    </div>
  );
}