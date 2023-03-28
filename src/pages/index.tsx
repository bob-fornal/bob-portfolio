import React, { useEffect, useState } from 'react';

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
import Tracker from '@features/tracker/tracker';

export default function Home() {
  const [position, setPosition] = useState('00');
  const [oldPosition, setOldPosition] = useState('00');
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(function mount() {
    let mediaWatcher = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaWatcher.matches);
    const handleClassByMediaQuery = (event: { matches: any }) => {
      return setIsMobile(event.matches);
    };
    mediaWatcher.addEventListener('change', handleClassByMediaQuery);

    return () => {
      mediaWatcher.removeEventListener('change', handleClassByMediaQuery);
    };
  }, [isMobile]);

  function adjustPosition(newPosition: string) {
    setOldPosition(position);
    setPosition(newPosition);
  }

  function getPosition(): string {
    return `${styles[`at-${position}`]} ${styles[`from-${oldPosition}`]}`;
  }

  return (
    <>
      <Hint isMobile={isMobile}></Hint>
      <div className={`${styles.wrapper} ${getPosition()}`}>
        <div className={styles.row}>
          <div id="page-01" className={`${styles.page} ${styles['position-00']}`}>
            <AboutMe isMobile={isMobile}></AboutMe>
          </div>
          <div id="page-02" className={`${styles.page} ${styles['position-01']}`}>
            <TestGenius isMobile={isMobile}></TestGenius>
          </div>
          <div id="page-03" className={`${styles.page} ${styles['position-02']}`}>
            <CodeSquid isMobile={isMobile}></CodeSquid>
          </div>
        </div>
        <div className={styles.row}>
          <div id="page-04" className={`${styles.page} ${styles['position-10']}`}>
            <Wheel isMobile={isMobile}></Wheel>
          </div>
          <div id="page-05" className={`${styles.page} ${styles['position-11']}`}>
            <WorkNotes isMobile={isMobile}></WorkNotes>
          </div>
          <div id="page-06" className={`${styles.page} ${styles['position-12']}`}>
            <DigitalClock isMobile={isMobile}></DigitalClock>
          </div>
        </div>
        <div className={styles.row}>
          <div id="page-07" className={`${styles.page} ${styles['position-20']}`}>
            <Tracker isMobile={isMobile}></Tracker>
          </div>
          <div id="page-08" className={`${styles.page} ${styles['position-21']}`}>
            <Ripped isMobile={isMobile}></Ripped>
          </div>
          <div id="page-09" className={`${styles.page} ${styles['position-22']}`}>
            <Zombies isMobile={isMobile}></Zombies>
          </div>
        </div>
      </div>

      <Navigation isMobile={isMobile} position={position} setPosition={adjustPosition}></Navigation>
    </>
  );
}
