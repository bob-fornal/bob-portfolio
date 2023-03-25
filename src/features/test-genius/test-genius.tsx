import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

export default function TestGenius() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-40']}>
        <Image className={styles.img} src="assets/images/test-genius.jpg" alt="Checkmark" width={200} height={200} />
      </div>
      <div className={styles['right-60']}>
        <Image src="assets/images/test-genius.png" alt="Test Genius Logo" width={593} height={100} />
        
        <p>
          This is an Open Source project. I asked the general Twitter tech community for help and had over 34 people respond.
          We are building in public (<a href="https://www.youtube.com/playlist?list=PLTXH5G3ze4tvcmHF71JLT0ogmFk7DKFJf">HERE</a>)
          and working toward building a solid system using Node and Angular.
        </p>

        <ol>
          <li>Build something that will help my kids with TEST TAKING SKILLS.</li>
          <li>Work with developers (gives me the ability to evaluate your skills and be a MENTOR AND RECOMMEND).</li>
        </ol>

        <a className={styles.links} href="https://github.com/bob-fornal/how-to-take-a-test" target="_blank">REPO</a>
        <a className={styles.links} href="https://www.youtube.com/playlist?list=PLTXH5G3ze4tvcmHF71JLT0ogmFk7DKFJf">PLAYLIST</a>
      </div>
    </div>
  );
}