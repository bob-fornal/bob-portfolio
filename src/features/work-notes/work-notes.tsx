import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function WorkNotes() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <Image className={styles.img} src="/assets/images/work-notes.png" alt="Work Notes Logo" width={200} height={200} />
      </div>
      <div className={styles['right-70']}>
        <h1>Work Notes</h1>
        <p>These are my work notes. They have overgone several iterations and implementations over the years.</p>
        <a href="https://github.com/bob-fornal/work-notes/" target="_blank">REPO</a>
      </div>
    </div>
  );
}