import Image from "next/image";
import styles from '@core/styles/Page-Level.module.css';

export default function Ripped() {
  return (
    <>
      <div className={styles['wrapper-complete']}>
        <Image src="assets/images/ripped-404.png" alt="ripped hole showing code" width={352} height={283} />
      </div>
      <div className={styles['top-content']}>
        <div>This is a 404 Page I enjoy ...</div>
      </div>
    </>
  );
}