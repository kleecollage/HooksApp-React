import { useState, useEffect } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState(5);


  // Countdown Effect
  useEffect(() => {
    if (countDown === 0) return;
    const intervalId = setInterval( () => {
      setCountDown( prev => prev - 1 );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [countDown]);

  // Change Light color effect
  useEffect(() => {
    if (countDown > 0) return;
    setCountDown(5);

    if (countDown === 0) {

      if (light === 'green') {
        setLight('yellow');
        setCountDown(3);
        return;
      }

      else if (light === 'yellow') {
        setLight('red');
        return;
      }

      else {
        setLight('green');
        return;
      }
    }
  }, [countDown, light])

  return {
    // props
    colors,
    light,
    countDown,
    // computed
    percentage: (countDown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    // methods
  }
}
