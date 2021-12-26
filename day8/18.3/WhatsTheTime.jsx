import React, { useState } from "react";

export default function WhatsTheTime() {
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");

  const setAll = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "seconds":
        setSeconds(value);
        setMinutes(value / 60);
        setHours(value / 3600);
        break;
      case "minutes":
        setSeconds(60 * value);
        setMinutes(value);
        setHours(value / 60);
        break;
      case "hours":
        setSeconds(3600 * value);
        setMinutes(60 / value);
        setHours(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="seconds">Seconds</label>
          <input onChange={setAll} value={seconds} name="seconds" type="number" />
        </div>
        <br/>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input onChange={setAll} value={minutes} name="minutes" type="number" />
        </div>
        <br/>
        <div>
          <label htmlFor="hours">Hours</label>
          <input onChange={setAll} value={hours} name="hours" type="number" />
        </div>
      </form>
    </div>
  );
}