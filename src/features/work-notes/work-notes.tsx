import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function WorkNotes() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['left-30']}>
        <Image className={styles.img} src="assets/images/work-notes.png" alt="Work Notes Logo" width={200} height={200} />
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
            I started moving my notes to an electronic system. That system dropped all my notes for a few weeks.
            It scared me enough, I went looking for something more stable and reliable.
          </li>
          <li>
            In the process of looking for my next means of storing notes, I came across Rocketbook.
            I love that they are reusable and that I can scan and store the data, as needed.
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