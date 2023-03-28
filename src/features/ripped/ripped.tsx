import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Ripped(props: { isMobile: boolean }) {
  return (
    <>
      <div className={`${styles['wrapper-complete']} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
        <img src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_352/v1679965930/portfolio/images/ripped-404_ulpogu.png" alt="ripped hole showing code" />
      </div>
      <div className={`${styles['top-content']} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
        <div>This is a 404 Page I enjoy ...</div>
      </div>
    </>
  );
}