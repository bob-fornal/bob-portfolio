// import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Zombies() {
  return (
    <>
      <div className={styles['wrapper-base']}>
        <img className={styles['image-width']} src="https://res.cloudinary.com/bob-fornal/image/upload/v1679965929/portfolio/images/zombie-walk_nxcrrl.png" alt="zombie silhouettes" />
      </div>
      <div className={styles['top-content']}>
        <div>This is a 404 Page I created ...</div>
        <div>... something has clearly gone wrong!</div>
      </div>
    </>
  );
}