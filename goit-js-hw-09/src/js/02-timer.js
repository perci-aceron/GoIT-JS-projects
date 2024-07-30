import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const onClose = selectedDates => {
  const selectedDate = selectedDates[0];

  if (!selectedDate) {
    return;
  }

  const now = new Date().getTime();
  const endDate = selectedDate.getTime();

  if (endDate <= now) {
    Notiflix.Notify.failure('Please choose a date in the future');
    document.querySelector('[data-start]').disabled = true;
    return;
  } else {
    document.querySelector('[data-start]').disabled = false;
  }
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

document.querySelector('[data-start]').addEventListener('click', () => {
  const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
  if (selectedDate) {
    const endDate = selectedDate.getTime();
    const now = new Date().getTime();
    const distance = endDate - now;

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(distance);

      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent =
        addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent =
        addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent =
        addLeadingZero(seconds);
    }, 1000);
  }
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
