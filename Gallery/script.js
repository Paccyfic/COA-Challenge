const galleryData = [
    {
      id: 'gallery1',
      imgSrc: './assets/images/fox.png',
      imgName: 'FENNEC FOX',
      location: 'India',
    },
    {
      id: 'gallery2',
      imgSrc: './assets/images/whale.png',
      imgName: 'HUMPBACK WHALE',
      location: 'South Africa',
    },
    {
      id: 'gallery3',
      imgSrc: './assets/images/baboon.png',
      imgName: 'COMMON BROWN BABOON',
      location: 'South Africa',
    },
    {
      id: 'gallery4',
      imgSrc: './assets/images/deer.png',
      imgName: 'SPOTTED DEER',
      location: 'Amazon',
    },
  ];
  
  const parentContainer = document.getElementById('parentContainer');
  const fullScreenView = document.getElementById('fullScreenView');
  const fullScreenImg = document.getElementById('fullScreenImg');
  const backArrow = document.getElementById('backArrow');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  
  let currentIndex = 0;
  
  function showFullScreenImage(index, direction) {
    if (direction === 'next') {
      fullScreenImg.classList.add('slide-out-left');
    } else if (direction === 'prev') {
      fullScreenImg.classList.add('slide-out-right');
    }
  
    setTimeout(() => {
      fullScreenImg.src = galleryData[index].imgSrc;
  
      fullScreenImg.classList.remove('slide-out-left', 'slide-out-right');
  
      if (direction === 'next') {
        fullScreenImg.classList.add('slide-in-right');
      } else if (direction === 'prev') {
        fullScreenImg.classList.add('slide-in-left');
      }
  
      updateArrows();
    }, 500); 
  
    currentIndex = index;
    fullScreenView.style.display = 'flex';
  }
  
  function updateArrows() {
    leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
    rightArrow.style.display = currentIndex === galleryData.length - 1 ? 'none' : 'block';
  }
  
  galleryData.forEach((gallery, index) => {
    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');
    galleryDiv.id = gallery.id;
  
    galleryDiv.innerHTML = `
      <img src="${gallery.imgSrc}" alt="${gallery.imgName}" />
      <div class="low-section">
        <span class="img-name">
          ${gallery.imgName.split(' ').slice(0, -1).join(' ')} <span class="line-break"></span>${gallery.imgName.split(' ').slice(-1)}
        </span>
        <span class="location">${gallery.location}</span>
        <div class="kno-mo-container" id="kmoContainer${gallery.id.slice(-1)}">
          <span class="kno-mo">View Image</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `;
  
    parentContainer.appendChild(galleryDiv);
  
    galleryDiv.querySelector('.kno-mo-container').addEventListener('click', () => {
      showFullScreenImage(index);
    });
  });
  
  backArrow.addEventListener('click', () => {
    fullScreenView.style.display = 'none';
  });
  
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      showFullScreenImage(currentIndex - 1, 'prev');
    }
  });
  
  rightArrow.addEventListener('click', () => {
    if (currentIndex < galleryData.length - 1) {
      showFullScreenImage(currentIndex + 1, 'next');
    }
  });
  