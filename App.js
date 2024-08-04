document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('audio').play();
});

document.getElementById('pauseButton').addEventListener('click', function() {
    document.getElementById('audio').pause();
});
// Initialization for ES Users
import {
    Ripple,
    Input,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Ripple, Input });
