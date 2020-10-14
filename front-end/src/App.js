import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CountDownTimer from './components/CountDownTimer/CountDownTimer';
import Info from './components/Info/Info';
import SetTimer from './components/SetTimer/SetTimer';
import TopFrame from './components/TopFrame/TopFrame';

import timeTypes from './constants/timeTypes'

import * as actions from './store/actions/actions'

import 'font-awesome/css/font-awesome.min.css'

const { ipcRenderer } = window.require('electron');

function App({ isCounterActive, updateTime }) {
  useEffect(() => {
    ipcRenderer.on("time:set", (_, time) => {
      console.log(time);
      updateTime(time[timeTypes.hh], timeTypes.hh)
      updateTime(time[timeTypes.mm], timeTypes.mm)
      updateTime(time[timeTypes.ss], timeTypes.ss)
    })
  }, [])

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
  isCounterActive: state.status.isCountdownActive,
  time: state.timer
})

const mapDispatchToProps = dispatch => ({
  updateTime: (deltaTime, timeType) => dispatch(actions.updateTime(deltaTime, timeType))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
