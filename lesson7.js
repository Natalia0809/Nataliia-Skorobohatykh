// task 1
let newWindow = window.open('', '', 'width=300', 'height=300');
setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  newWindow.close();
}, 6000);

// task 2
function changeCSS() {
    let textElement = document.getElementById('text');

    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
  }
  
// task 3
document.getElementById('btn1').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
  });

    document.getElementById('btn2').addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'pink';
  });

  let btn3 = document.getElementById('btn3');
  btn3.addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
  });
  btn3.addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
  });

  let myLink = document.getElementById('myLink');
  myLink.addEventListener('mouseenter', function() {
    document.body.style.backgroundColor = 'yellow';
  });
  myLink.addEventListener('mouseleave', function() {
    document.body.style.backgroundColor = 'white';
  });
  
// task 4
function deleteSelectedItem() {
    let dropdown = document.getElementById('myDropdown');
    let selectedIndex = dropdown.selectedIndex;
    if (selectedIndex !== -1) {
      dropdown.remove(selectedIndex);
    }
  }

// task 5 
document.addEventListener('DOMContentLoaded', function() {
const button = document.getElementById('myButton');
const messageElement = document.getElementById('message');

button.addEventListener('click', function() {
  messageElement.textContent = "I was pressed!";
});

button.addEventListener('mouseover', function() {
  messageElement.textContent = "Mouse on me!";
});

button.addEventListener('mouseout', function() {
  messageElement.textContent = "Mouse is not on me!";
 });
});

// task 6
document.addEventListener('DOMContentLoaded', function() {
const sizeInfoElement = document.getElementById('sizeInfo');
  function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sizeInfoElement.textContent =  `${width} x ${height}`;
  }
  updateSizeInfo();
  window.addEventListener('resize', updateSizeInfo);
});

// task 7
document.addEventListener('DOMContentLoaded', function() {
const cityData = {
    ger: ['Berlin', 'Hamburg', 'Munich'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Odessa']
  };

  const countryDropdown = document.getElementById('country');
  const citiesDropdown = document.getElementById('cities');
  const selectionInfo = document.getElementById('selectionInfo');

  function populateCities() {
    const selectedCountry = countryDropdown.value;
    const cities = cityData[selectedCountry] || [];

    citiesDropdown.innerHTML = '';

    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.text = city;
      citiesDropdown.appendChild(option);
    });
    displaySelection();
  }
  citiesDropdown.addEventListener('change', displaySelection);
  function displaySelection() {
    const selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;

    selectionInfo.textContent = `Selected Country: ${selectedCountry}, Selected City: ${selectedCity}`;
}
countryDropdown.addEventListener('change', populateCities);
citiesDropdown.addEventListener('change', displaySelection);
    populateCities();
});