// import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Zombies(props: { isMobile: boolean }) {
  return (
    <>
      <div className={`${styles['wrapper-complete']} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
        <img className={styles['image-width']} src="https://res.cloudinary.com/bob-fornal/image/upload/v1679965929/portfolio/images/zombie-walk_nxcrrl.png" alt="zombie silhouettes" />
      </div>
      <div className={`${styles['top-content']} ${ props.isMobile ? styles.mobile : styles.desktop }`}>
        <div>This is a 404 Page I created ...</div>
        <div>... something has clearly gone wrong!</div>
      </div>
    </>
  );
}