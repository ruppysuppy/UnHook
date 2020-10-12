import React from 'react';
import { connect } from 'react-redux';

import TopFrame from './components/TopFrame/TopFrame';
import SetTimer from './components/SetTimer/SetTimer';

import 'font-awesome/css/font-awesome.min.css'
import CountDownTimer from './components/CountDownTimer/CountDownTimer';

function App({ isCounterActive }) {
  return (
    <>
      <TopFrame />
      {isCounterActive ?
        <CountDownTimer /> :
        <SetTimer />}
    </>
  );
}

const mapStateToProps = state => ({
  isCounterActive: state.status.isCountdownActive
})

export default connect(mapStateToProps)(App);
