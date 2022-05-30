import React, { useState } from 'react';
import styled from "styled-components"

const TimerWrapper = styled.div `
  height: 100vh;
  width: 100vw;
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Display = styled.div`
  color: white;
  font-size: 5rem;
`

const ControlButton = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
`

function Timer() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function count() {
    console.log(seconds)
    if (minutes < 59 && seconds < 59) {
      setSeconds(seconds + 1)
    } else if (minutes < 59 && seconds === 59) {
      setMinutes(minutes + 1)
      setSeconds(0)
    } else if (minutes === 59 && seconds === 59) {
      setHours(hours + 1)
      setMinutes(0)
      setSeconds(0)
    }
  }

  function startTimer() {
    setInterval(count, 1000)
  }

  return (
    <TimerWrapper>
      <Display>{hours}:{minutes}:{seconds}</Display>
      <ControlButton onClick={startTimer} />
      <ControlButton />
      <ControlButton />
    </TimerWrapper>
  )
}

function App() {
  return <Timer />;
}

export default App;
