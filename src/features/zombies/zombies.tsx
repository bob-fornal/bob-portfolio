// import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Zombies() {
  return (
    <div className={styles['wrapper-base']}>
      <img src="/assets/images/zombie-walk.png" alt="zombie silhouettes" className={styles['image-width']} />
    </div>
  );
}