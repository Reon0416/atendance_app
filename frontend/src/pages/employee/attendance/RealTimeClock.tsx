import { useEffect, useState } from "react";
import "./style/RealTimeClock.css";

export  function RealTimeClock() {
  const [ now, setNow] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setNow(new Date());
    },1000);

    return () => clearInterval(timeId);
  },[]);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return(
    <div className="clock-container">
      <div className="clock-date">
        {year}年{month}月{date}日
      </div>
      <div className="clock-time">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  )
}