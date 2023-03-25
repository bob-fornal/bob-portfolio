import React from 'react';

import styles from '@core/styles/Home.module.css'

import Hint from '@shared/hint/hint';
import Navigation from '@shared/navigation/navigation';

import AboutMe from '@features/about-me/about-me';
import CodeSquid from '@features/code-squid/code-squid';
import TestGenius from '@features/test-genius/test-genius';
import Wheel from '@features/wheel/wheel';
import WorkNotes from '@features/work-notes/work-notes';
import DigitalClock from '@features/digital-clock/digital-clock';
import Ripped from '@features/ripped/ripped';
import Zombies from '@features/zombies/zombies';

export default function Home() {
  const [position, setPosition] = React.useState('00');
  const [oldPosition, setOldPosition] = React.useState('00');

  function adjustPosition(newPosition: string) {
    setOldPosition(position);
    setPosition(newPosition);
  }

  function getPosition(): string {
    return `${styles[`at-${position}`]} ${styles[`from-${oldPosition}`]}`;
  }

  return (
    <>
    <Hint></Hint>
      <div className={`${styles.wrapper} ${getPosition()}`}>
        <div className={styles.row}>
          <div id="page-01" className={`${styles.page} ${styles['position-00']}`}>
            <AboutMe></AboutMe>
          </div>
          <div id="page-02" className={`${styles.page} ${styles['position-01']}`}>
            <TestGenius></TestGenius>
          </div>
          <div id="page-03" className={`${styles.page} ${styles['position-02']}`}>
            <CodeSquid></CodeSquid>
          </div>
        </div>
        <div className={styles.row}>
          <div id="page-04" className={`${styles.page} ${styles['position-10']}`}>
            <Wheel></Wheel>
          </div>
          <div id="page-05" className={`${styles.page} ${styles['position-11']}`}>
            <WorkNotes></WorkNotes>
          </div>
          <div id="page-06" className={`${styles.page} ${styles['position-12']}`}>
            <DigitalClock></DigitalClock>
          </div>
        </div>
        <div className={styles.row}>
          <div id="page-07" className={`${styles.page} ${styles['position-20']}`}>
            <h1>Bob Fornal: 7</h1>
          </div>
          <div id="page-08" className={`${styles.page} ${styles['position-21']}`}>
            <Ripped></Ripped>
          </div>
          <div id="page-09" className={`${styles.page} ${styles['position-22']}`}>
            <Zombies></Zombies>
          </div>
        </div>
      </div>

      <Navigation position={position} setPosition={adjustPosition}></Navigation>
    </>
  );
}
