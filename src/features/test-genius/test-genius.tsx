import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function TestGenius() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-40']}>
        <Image className={styles.img} src="assets/images/test-genius.jpg" alt="Checkmark" width={200} height={200} />
      </div>
      <div className={styles['right-60']}>
        <h1>Test Genius</h1>
        
        <ol>
          <li>Build something that will help my kids with TEST TAKING SKILLS.</li>
          <li>Work with developers (gives me the ability to evaluate your skills and be a MENTOR AND RECOMMEND).</li>
        </ol>

        <a href="https://github.com/bob-fornal/how-to-take-a-test" target="_blank">REPO</a>
      </div>
    </div>
  );
}