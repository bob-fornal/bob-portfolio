import Image from 'next/image';
import styles from '@core/styles/Page-Level.module.css';

import {
  LinkedinIcon,
  TwitterIcon
} from 'next-share';

export default function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <img className={`${styles.img} ${styles.circular}`} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_200/v1679965928/portfolio/images/bob_wadnuh.jpg" alt="Profile of Bob Fornal" />
      </div>
      <div className={styles['right-70']}>
        <h1>Bob Fornal</h1>
        <p className={styles.heavy}>Senior Solutions Developer, Leading EDJE, Inc.</p>
        <p>Front-End Developer with a passion for learning, testing, mentoring, speaking and personal growth. Blessed husband and proud father of two!</p>

        <ul>
          <li>Frontend Developer</li>
          <li>Mentor</li>
          <li>Speaker</li>
        </ul>

        <p>&quot;Learning from my mistakes over the decades, I feel that I have become a solid programmer.&quot; -- Me</p>

        <a className={styles.icons} href={'https://twitter.com/rfornal'} target="_blank" title="Twitter"><TwitterIcon size={48} /></a>
        <a className={styles.icons} href={'https://www.linkedin.com/in/rfornal/'} target="_blank" title="LinkedIn"><LinkedinIcon size={48} /></a>
        <a className={styles.icons} href={'https://dev.to/rfornal'} target="_blank" title="Dev.to">
          <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_48/v1679965929/portfolio/images/dev-to_dqupzp.png" alt="dev.to Icon" />
        </a>
        <a className={styles.icons} href={'https://sessionize.com/bob-fornal/'} target="_blank" title="Sessionize">
          <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_48/v1679965928/portfolio/images/sessionize_oquj3v.png" alt="Sessionize Icon" />
        </a>
      </div>
    </div>
  );
}