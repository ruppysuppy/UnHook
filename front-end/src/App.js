import React from 'react';

import 'font-awesome/css/font-awesome.min.css'

import Timer from './components/Timer/Timer';

import LogoBlack from './static/img/logo-black.png'

import styles from './app.module.css'
import TopFrame from './components/TopFrame/TopFrame';

function App() {
  return (
    <>
      <TopFrame />
      <div className={styles.Root}>
        <h1>
          <img className={styles.Logo} src={LogoBlack} alt="Unhook" />
        UnHook
      </h1>
      </div>
      <Timer />
    </>
  );
}

export default App;
