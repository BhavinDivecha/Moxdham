const audioContainerRoot = document.getElementById('playlist-tracks');
const playAllAudio = document.getElementById('music__controller');
const timer = document.getElementById('music__times');
const nameObject = document.getElementById('music__name');
const musics = [
  {
    name: 'Gayatri Mantra',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
  {
    name: 'Gayatri Mantra 2',
    path: 'sounds/gayatrimantra.mp3',
    duration: '00:27',
  },
];

function secondsToString(seconds) {
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return `0${numminutes}`.slice(-2) + ':' + `0${numseconds}`.slice(-2);
}

const musicObjects = musics.map((m) => new Audio(m.path));

// $(audio).on('loadedmetadata', function () {
//   console.log(audio.duration);
// });
let currentPlayingAudioIndex = null;
let shouldPlayAll = false;

let audio = null;

nameObject.querySelector('#music-title'
).innerHTML = `${musics[0].name
  }`;

const updateCurrentTime = () => {
  if (currentPlayingAudioIndex === null) return;
  const audioContainer = document.querySelector(
    `[data-audio-index="${currentPlayingAudioIndex}"]`
  );
  console.log(audio.currentTime);
 
  

timer.querySelector('#music-current-time'
  ).innerHTML = `${secondsToString(Math.floor(audio.currentTime))
    }`;
  
  timer.querySelector('#music-duration'
  ).innerHTML = `${
    musics[currentPlayingAudioIndex].duration
  }
  `;
};

const getPlayingAudioHtml = ({ index, title, duration, currentTime }) => {
  return `
  
  <li class="playlist__track playlist__track--current"data-audio-index="${index}
     id="playlist-track-0"
      data-src="https://raw.githubusercontent.com/miko-github/miko-github/gh_assets/assets/sounds/Homayoun%20Shajarian%20-%20Arayeshe%20Ghaliz.mp3"
      data-id="0" onclick="pauseAudios(${index})"><span>${index+1}</span>
      <div class="playlist__meta">
      
      <strong class="playlist__title"> ${title}</strong>
      </div>
    </li>
  `;
};
const mute = () => { 
  console.log(audio.mute);
  if (audio.mute) {
    audio.mute = false;
  }
  else {
    audio.mute = true;
  }
};
const getAudioHtml = ({ index, title, duration }) => {
  return `
  <li class="playlist__track" data-audio-index="${index}
     id="playlist-track-0"
      data-src="https://raw.githubusercontent.com/miko-github/miko-github/gh_assets/assets/sounds/Homayoun%20Shajarian%20-%20Arayeshe%20Ghaliz.mp3"
      data-id="0" 
      onclick="
      playAudios(${index})">
      
        <span>${index + 1}</span>
      <div class="playlist__meta">
      
      <strong class="playlist__title"> ${title}</strong>
      
      </div>

    </li>
  `;

};
var maxLength = 0;
const reRender = () => {
  audioContainerRoot.innerHTML = '';
  maxLength = 0;
  musicObjects.forEach((music, index) => {
    if (currentPlayingAudioIndex === index) {
      audioContainerRoot.insertAdjacentHTML(
        'beforeend',
        getPlayingAudioHtml({
          index,
          currentTime: music.currentTime,
          duration: musics[index].duration,
          title: musics[index].name,
        })
      );
    } else {
      audioContainerRoot.insertAdjacentHTML(
        'beforeend',
        getAudioHtml({
          index,
          duration: musics[index].duration,
          title: musics[index].name,
        })
      );
    }
    maxLength++;
  });

  console.log(maxLength);
};
reRender();

const playAudio = async (index) => {
  if (typeof index !== 'number') {
    const audioContainer = document.querySelector(
      `[data-audio-index="${currentPlayingAudioIndex}"]`
    );
    return;
  }
  if (audio) {
    audio.pause();
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!musics[index]) {
    pauseAudio(index);
    currentPlayingAudioIndex = null;
    playAllAudio.innerHTML = '';
    return;
  }
  currentPlayingAudioIndex = index;
  audio = new Audio(musics[index].path);
  audio.play();

  nameObject.querySelector('#music-title'
  ).innerHTML = `${musics[index].name
    }`;
  
  reRender();
  audio.addEventListener('play', playAudio);
  audio.addEventListener('pause', pauseAudio);
  audio.addEventListener('ended', endAudio);
  audio.addEventListener('durationchange', updateCurrentTime);
};

const pauseAudio = () => {
  if (currentPlayingAudioIndex === null) return;

  audio.pause();
  const audioContainer = document.querySelector(
    `[data-audio-index="${currentPlayingAudioIndex}"]`
  );
};

const endAudio = () => {
  if (currentPlayingAudioIndex === null || audio === null) return;
  let nextPlayingIndex = currentPlayingAudioIndex + 1;
  audio = null;
  currentPlayingAudioIndex = null;
  reRender();
  if (shouldPlayAll) {
    playAudio(nextPlayingIndex);
  }
};

setInterval(updateCurrentTime, 1000);

const playAll = () => {
  shouldPlayAll = true;
  if (currentPlayingAudioIndex === null) currentPlayingAudioIndex = 0;
  playAudio(currentPlayingAudioIndex);
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
    <button id="music-play" onclick="pauseAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-pause"></i>
  </button>
    `
  );
};

const PlayPrev = () => {
  shouldPlayAll = true;
  if (currentPlayingAudioIndex == 0) {
    currentPlayingAudioIndex = 0;
    console.log(currentPlayingAudioIndex);
  }
  else if (currentPlayingAudioIndex == null) {
    
    currentPlayingAudioIndex = 0;
    console.log(currentPlayingAudioIndex);
  }
  else {
    currentPlayingAudioIndex--;
    console.log(currentPlayingAudioIndex);
  }
  playAudio(currentPlayingAudioIndex);
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
    <button id="music-play" onclick="pauseAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-pause"></i>
  </button>
    `
  );
};
const PlayNext = () => {
  shouldPlayAll = true;
  if (currentPlayingAudioIndex == maxLength-1) {
    console.log(currentPlayingAudioIndex);
  }
  else {
    currentPlayingAudioIndex++;
    console.log(currentPlayingAudioIndex);
  }
  playAudio(currentPlayingAudioIndex);
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
    <button id="music-play" onclick="pauseAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-pause"></i>
  </button>
    `
  );
};

const pauseAll = () => {
  shouldPlayAll = false;
  pauseAudio();
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
  <button id="music-play" onclick="playAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-play"></i>
  </button>
    `
  );
};

const playAudios = async (index) => {
  currentPlayingAudioIndex = index;
  shouldPlayAll = true;
  playAudio(currentPlayingAudioIndex);
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
    <button id="music-play" onclick="pauseAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-pause"></i>
  </button>
    `
  );
};

const pauseAudios = async (index) => {
  currentPlayingAudioIndex = index;
  shouldPlayAll = false;
  pauseAudio();
  playAllAudio.innerHTML = '';
  playAllAudio.insertAdjacentHTML(
    'beforeend',
    `
  <button id="music-play" onclick="playAll()" title="pause" class="music__btn music__btn--pause">
       <i class="fa fa-play"></i>
  </button>
    `
  );
};
