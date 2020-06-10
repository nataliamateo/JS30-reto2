'use strict';

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const moment = new Date();

  const seconds = moment.getSeconds();
  //   colocar la aguja de los segundos en el segundo que este en ese momento
  const secondDegress = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegress}deg)`;

  const minutes = moment.getMinutes();
  const minuteDegress = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegress}deg)`;

  const hours = moment.getHours();
  const hoursDegress = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
};

// para ejecutar cada segundo la función
setInterval(setDate, 1000);
