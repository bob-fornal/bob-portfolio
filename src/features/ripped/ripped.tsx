import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Ripped() {
  return (
    <>
      <div className={styles['wrapper-complete']}>
        <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_352/v1679965930/portfolio/images/ripped-404_ulpogu.png" alt="ripped hole showing code" />
      </div>
      <div className={styles['top-content']}>
        <div>This is a 404 Page I enjoy ...</div>
      </div>
    </>
  );
}