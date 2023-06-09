import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function WorkNotes(props: { isMobile: boolean }) {
  return (
    <div className={`${styles.wrapper} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
      <div className={styles['left-30']}>
        <img className={styles.img} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_200/v1679965928/portfolio/images/work-notes_uroii8.png" alt="Work Notes Logo" />
      </div>
      <div className={styles['right-70']}>
        <h1>Work Notes</h1>
        <p>These are my work notes. They have overgone several iterations and implementations over the years.</p>

        <ul>
          <li>
            I love taking notes with pen and paper; unfortunately I have dozens of notebooks all over the house.
            It makes it hard to find anything.
          </li>
          <li>
            One day, I realized that a GitHub repository was exactly what I was looking for. Being familiar with
            Markdown, it made creating documents and managing a structure simple. Additionally, the repository is
            searchable!
          </li>
        </ul>
        <a href="https://github.com/bob-fornal/work-notes/" target="_blank">REPO</a>
      </div>
    </div>
  );
}