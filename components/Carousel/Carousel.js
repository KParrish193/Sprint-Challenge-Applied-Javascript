/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker(){

  const carouselDiv = document.createElement('div');
  const carouselLeft = document.createElement('div');
  const carouselImgMtn = document.createElement('img');
  const carouselImgComp = document.createElement('img');
  const carouselImgTrees = document.createElement('img');
  const carouselImgTrnTbl = document.createElement('img');
  const carouselRight = document.createElement('div');

  carouselDiv.classList.add('carousel');
  carouselLeft.classList.add('left-button');
  carouselRight.classList.add('right-button');

  
  carouselImgMtn.src = './assets/carousel/mountains.jpeg';
  carouselImgComp.src = './assets/carousel/computer.jpeg';
  carouselImgTrees.src = './assets/carousel/trees.jpeg';
  carouselImgTrnTbl.src = './assets/carousel/computer.jpeg';
  // carouselLeft.textContent = 	U+219E;
  // carouselRight.textContent = U+21A0;

  carouselDiv.appendChild(carouselLeft);
  carouselDiv.appendChild(carouselImgMtn);
  carouselDiv.appendChild(carouselImgComp);
  carouselDiv.appendChild(carouselImgTrees);
  carouselDiv.appendChild(carouselImgTrnTbl);
  carouselDiv.appendChild(carouselRight);

  return carouselDiv
  };

  const carouselEntryPoint = document.querySelector('.carousel-container');
    carouselEntryPoint.appendChild(carouselMaker());
