const audioContainerRoot = document.getElementById('audio-container-root');
const playAllAudio = document.getElementById('play-all-audio');

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

const updateCurrentTime = () => {
  if (currentPlayingAudioIndex === null) return;
  const audioContainer = document.querySelector(
    `[data-audio-index="${currentPlayingAudioIndex}"]`
  );
  console.log(audio.currentTime);
  audioContainer.querySelector(
    '#audio-duration'
  ).innerHTML = `${secondsToString(Math.floor(audio.currentTime))}/${
    musics[currentPlayingAudioIndex].duration
  }`;
};

const getPlayingAudioHtml = ({ index, title, duration, currentTime }) => {
  return `<div
    class="list-group-item active"
    aria-current="true"
    id="audio-container"
    data-audio-index="${index}"
  >
    <div
      class="d-flex align-items-center justify-content-between"
    >
      <div class="d-flex align-items-center" id="audio-play-pause-button">
        <button
          class="btn btn-primary-outline rounded p-0"
          
          onclick="pauseAudio(${index})"
        >
          <i
            class="bi bi-pause"
            style="font-size: 2rem; color: white"
          ></i>
        </button>
        <h6
          style="font-size: 1rem"
          class="mb-0 ms-1 h-6 text-white"
          id="audio-name"
        >
          ${title}
        </h6>
      </div>
      <p class="mb-0" id="audio-duration">${currentTime}/${duration}</p>
    </div>
  </div>`;
};

const getAudioHtml = ({ index, title, duration }) => {
  return `<div
    class="list-group-item"
    aria-current="true"
    id="audio-container"
    data-audio-index="${index}"
  >
    <div
      class="d-flex align-items-center justify-content-between"
    >
      <div class="d-flex align-items-center" id="audio-play-pause-button">
        <button
          class="btn btn-primary-outline rounded p-0"
          
          onclick="playAudio(${index})"
        >
          <i class="bi bi-play-fill" style="font-size: 2rem"></i>
        </button>
        <h6
          style="font-size: 1rem"
          class="mb-0 ms-1 h-6"
          id="audio-name"
        >
          ${title}
        </h6>
      </div>
      <p class="mb-0" id="audio-duration">${duration}</p>
    </div>
  </div>`;
};
const reRender = () => {
  audioContainerRoot.innerHTML = '';
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
  });
};
reRender();

const playAudio = async (index) => {
  if (typeof index !== 'number') {
    const audioContainer = document.querySelector(
      `[data-audio-index="${currentPlayingAudioIndex}"]`
    );
    audioContainer.querySelector('#audio-play-pause-button button').remove();
    audioContainer.querySelector('#audio-play-pause-button').insertAdjacentHTML(
      'afterbegin',
      `<button
      class="btn btn-primary-outline rounded p-0"
      
      onclick="pauseAudio(${currentPlayingAudioIndex})"
    >
      <i
        class="bi bi-pause"
        style="font-size: 2rem; color: white"
      ></i>
    </button>`
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
    playAllAudio.insertAdjacentHTML(
      'beforeend',
      `
      <button
        onclick="playAll()"
        class="btn btn-primary"
        type="button"
      >
        <i class="bi bi-play-fill"></i>
        Play All
      </button>
    `
    );
    return;
  }
  currentPlayingAudioIndex = index;
  audio = new Audio(musics[index].path);
  audio.play();
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
  audioContainer.querySelector('#audio-play-pause-button button').remove();
  audioContainer.querySelector('#audio-play-pause-button').insertAdjacentHTML(
    'afterbegin',
    `<button
      class="btn btn-primary-outline rounded p-0 text-white"
      id="audio-play-pause-button"
      onclick="playAudio(${currentPlayingAudioIndex})"
    >
      <i class="bi bi-play-fill" style="font-size: 2rem"></i>
    </button>`
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
      <button
        onclick="pauseAll()"
        class="btn btn-primary"
        type="button"
      >
        <i class="bi bi-pause"></i>
        Pause
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
      <button
        onclick="playAll()"
        class="btn btn-primary"
        type="button"
      >
        <i class="bi bi-play-fill"></i>
        Resume
      </button>
    `
  );
};
