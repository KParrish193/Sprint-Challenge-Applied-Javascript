// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(){

    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const pageTitle = document.createElement('h1');
    const weather = document.createElement('span');

    headerDiv.classList.add('header');
    date.classList.add('date');
    weather.classList.add('temp');

    date.textContent = `SMARCH 28, 2019`;
    pageTitle.textContent = `Lambda Times`;
    weather.textContent = `98°`;

    headerDiv.appendChild(date);
    headerDiv.appendChild(pageTitle);
    headerDiv.appendChild(weather);

    return headerDiv
}

const headerEntryPoint = document.querySelector('.header-container')
headerEntryPoint.appendChild(Header());

