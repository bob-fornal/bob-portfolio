import React from "react";
import styles from '@core/styles/Hint.module.css';

export default function Hint(props: { isMobile: boolean }) {
  const [visible, setVisible] = React.useState(true);
  let timer: any = setTimeout(toggleVisible, 8000);

  function toggleVisible() {
    timer = null;
    setVisible(false);
  }

  if (visible === false) return null;

  return (
    <div className={`${styles.wrapper} ${ props.isMobile ? styles.mobile : styles.desktop }`} onClick={toggleVisible}>
      <div className={styles['hint-wrapper']}>
        <p className={styles['hint-text']}>
          Click the buttons to navigate<br/>or use the UP, DOWN, LEFT, RIGHT arrow keys. {props.isMobile}
        </p>
        <img className={styles['hint-arrow']} src="https://res.cloudinary.com/bob-fornal/image/upload/c_scale,w_50/v1679965928/portfolio/images/arrow-right_u6mxkj.png" alt="arrow" />
      </div>
      {/* <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Creative Stall Premium - Flaticon</a> */}
    </div>
  );
}