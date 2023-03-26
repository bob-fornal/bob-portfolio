import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function CodeSquid() {
  return (
    <div className={styles.wrapper}>
            <div className={styles['left-40']}>
        <Image className={styles.img} src="assets/images/code-squid.jpg" alt="Code Squid Logo" width={200} height={200} />
      </div>
      <div className={styles['right-60']}>
        <h1>Code Squid</h1>
        <p>&quot;The worst thing you can do to a great idea is doing nothing with it.&quot; -- Me</p>

        <Image className={styles.img} src="assets/images/code-squid-hero.png" alt="Code Squid Hero" width={300} height={233} />

        <p>Coming Soon ...</p>
      </div>
    </div>
  );
}