import React from 'react';
import { connect } from 'react-redux';

import CountDownTimer from './components/CountDownTimer/CountDownTimer';
import Info from './components/Info/Info';
import SetTimer from './components/SetTimer/SetTimer';
import TopFrame from './components/TopFrame/TopFrame';

import 'font-awesome/css/font-awesome.min.css'

function App({ isCounterActive }) {
  return (
    <>
      <TopFrame />
      {isCounterActive ?
        <CountDownTimer /> :
        <SetTimer />}
      <Info />
    </>
  );
}

const mapStateToProps = state => ({
  isCounterActive: state.status.isCountdownActive
})

export default connect(mapStateToProps)(App);
