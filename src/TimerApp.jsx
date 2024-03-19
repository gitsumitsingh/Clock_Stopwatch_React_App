import { useState, useEffect } from 'react'
import './App.css'

const TimerApp = () => {
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  
  useEffect(() => {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    if(!second){
      console.log(`One second completed, currently running ${minute} minute.`);
    }
  }, [ctime]);

  return <h1>{ctime}</h1>

}

export default TimerApp
