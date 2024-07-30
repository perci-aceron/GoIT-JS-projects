import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
  }, 1000)
);
