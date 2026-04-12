const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
const totalPages = 3;

updateButtons();

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateButtons();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateButtons();
  }
});

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
  }

  if (currentIndex === totalPages - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'flex';
  }
}

const hobbyBtns = document.querySelectorAll('.hobby-btn');
const hobbyDetails = document.getElementById('hobby-details');

const hobbyData = {
  music: {
    title: "音楽鑑賞・制作",
    desc: "音楽を聴くのも好きだし、作るのも大好き！<br>特にBTSとSO-SOが大好きです。",
    img: "SO-SO.jpeg"
  },
  travel: {
    title: "旅行 & サウナ",
    desc: "最近だと卒業旅行で石垣島に行きました！<br>フランス留学のときは、イタリア半周できました。<br>サウナも大好きで、3兄弟でよく整いにいきます。",
    img: "Rome.JPG"
  },
  youtube: {
    title: "東海オンエアとしゅうゲームズ",
    desc: "僕の好きなYouTuberです！<br>東海オンエアはこの前イベント行きました！<br>しゅうゲームズは僕の生きがいです。",
    img: "tokai.JPG"
  }
};

hobbyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const hobbyKey = btn.getAttribute('data-hobby');
    const data = hobbyData[hobbyKey];

    hobbyDetails.classList.add('fade-out');

    setTimeout(() => {
      hobbyDetails.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <img src="${data.img}" alt="${data.title}" class="hobby-image">
      `;
      hobbyDetails.classList.remove('fade-out');
    }, 400);
  });
});
