import styles from '@core/styles/Navigation.module.css';
import React from 'react';

import useEventListener from '@core/services/use-event-listener.js';

const KEYS = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
const DIRECTIONS: { [key: string]: any } = {
  '00': { 'ArrowLeft': 'NONE', 'ArrowUp': 'NONE', 'ArrowRight': '01', 'ArrowDown': '10', },
  '01': { 'ArrowLeft': '00', 'ArrowUp': 'NONE', 'ArrowRight': '02', 'ArrowDown': '11', },
  '02': { 'ArrowLeft': '01', 'ArrowUp': 'NONE', 'ArrowRight': 'NONE', 'ArrowDown': '12', },
  '10': { 'ArrowLeft': 'NONE', 'ArrowUp': '00', 'ArrowRight': '11', 'ArrowDown': '20', },
  '11': { 'ArrowLeft': '10', 'ArrowUp': '01', 'ArrowRight': '12', 'ArrowDown': '21', },
  '12': { 'ArrowLeft': '11', 'ArrowUp': '02', 'ArrowRight': 'NONE', 'ArrowDown': '22', },
  '20': { 'ArrowLeft': 'NONE', 'ArrowUp': '10', 'ArrowRight': '21', 'ArrowDown': 'NONE', },
  '21': { 'ArrowLeft': '20', 'ArrowUp': '11', 'ArrowRight': '22', 'ArrowDown': 'NONE', },
  '22': { 'ArrowLeft': '21', 'ArrowUp': '12', 'ArrowRight': 'NONE', 'ArrowDown': 'NONE', },
}

export default function Navigation(props: { position: string, setPosition: any }) {
  const [position, setPosition] = React.useState('00');

  function keyHandler(event: any) {
    const { key } = event;
    if (KEYS.includes(String(key))) {
      const direction: string = DIRECTIONS[position][key];
      console.log(key, direction);
      if (direction !== 'NONE') {
        handleSelection({ target: { value: direction } });
      }
    }
  }

  useEventListener('keydown', keyHandler);

  function handleSelection(event: any) {
    const posn: string = event.target.value;
    if (posn === position) return;
    setPosition(posn);
    props.setPosition(posn);
  }

  function getStyles(id: string): string {
    const classes = `${styles['nav-item']} ${id === position ? styles.active : ''}`;
    return classes;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <button className={getStyles('00')} value="00" onClick={handleSelection} title="About Me"></button>
        <button className={getStyles('01')} value="01" onClick={handleSelection} title="Test Genius"></button>
        <button className={getStyles('02')} value="02" onClick={handleSelection} title="Code Squid"></button>
      </div>
      <div className={styles.row}>
        <button className={getStyles('10')} value="10" onClick={handleSelection} title="Wheel of EDJE"></button>
        <button className={getStyles('11')} value="11" onClick={handleSelection} title="Work Notes"></button>
        <button className={getStyles('12')} value="12" onClick={handleSelection} title="Digital Clock"></button>
      </div>
      <div className={styles.row}>
        <button className={getStyles('20')} value="20" onClick={handleSelection}></button>
        <button className={getStyles('21')} value="21" onClick={handleSelection} title="404 Ripped"></button>
        <button className={getStyles('22')} value="22" onClick={handleSelection} title="404 Zombies"></button>
      </div>
    </div>
  );
}