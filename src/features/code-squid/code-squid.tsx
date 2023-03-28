import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function CodeSquid(props: { isMobile: boolean }) {
  return (
    <div className={`${styles.wrapper} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
      <div className={styles['left-40']}>
        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_200/v1679965928/portfolio/images/code-squid_c8dqoo.jpg" alt="Code Squid Logo" />
      </div>
      <div className={styles['right-60']}>
        <h1>Code Squid</h1>
        <p>&quot;The worst thing you can do to a great idea is doing nothing with it.&quot; -- Me</p>

        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_300/v1679965929/portfolio/images/code-squid-hero_asevbb.png" alt="Code Squid Hero" />

        <p>Coming Soon ...</p>
      </div>
    </div>
  );
}