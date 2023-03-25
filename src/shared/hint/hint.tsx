import React from "react";
import Image from "next/image";
import styles from '@core/styles/Hint.module.css';

export default function Hint() {
  const [visible, setVisible] = React.useState(true);
  let timer: any = setTimeout(toggleVisible, 8000);

  function toggleVisible() {
    timer = null;
    setVisible(false);
  }

  if (visible === false) return null;

  return (
    <div className={styles.wrapper} onClick={toggleVisible}>
      <div className={styles['hint-wrapper']}>
        <p className={styles['hint-text']}>
          Click the buttons to navigate<br/>or use the UP, DOWN, LEFT, RIGHT arrow keys.
        </p>
        <Image className={styles['hint-arrow']} src="/assets/images/arrow-right.png" alt="arrow" width={50} height={50}></Image>
      </div>
      {/* <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Creative Stall Premium - Flaticon</a> */}
    </div>
  );
}