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
  
  galleryData.forEach((gallery) => {
    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');
    galleryDiv.id = gallery.id;
  
    galleryDiv.innerHTML = `
      <img src="${gallery.imgSrc}" alt="${gallery.imgName}" />
      <div class="low-section">
        <span class="img-name">
          ${gallery.imgName
            .split(' ')
            .slice(0, -1)
            .join(' ')} <span class="line-break"></span>${gallery.imgName
      .split(' ')
      .slice(-1)}
        </span>
        <span class="location">${gallery.location}</span>
        <div class="kno-mo-container" id="kmoContainer${gallery.id.slice(-1)}">
          <span class="kno-mo">Know more</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `;
  
    parentContainer.appendChild(galleryDiv);
  });