// make 16 sketchblock divs
function makeGrid(x, y) {
  const wrapper = document.querySelector("#wrapper");
  const row = document.createElement("div");

  //clear grid
  while(wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.firstChild);
  }
  
  row.classList.add("row");

  for (i = 0; i < x; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    row.appendChild(block);
  }

  for (i = 0; i < y; i++) {
    clone = row.cloneNode(true);
    wrapper.appendChild(clone);
  }
  setHover();
}

// set mouseover interaction
function setHover() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block =>
    block.addEventListener("mouseover", function() {
      if (!block.style.opacity) {
        block.style.opacity = "1";
        block.style.backgroundColor = "rgb(" + getColorValue() + ", " + getColorValue() + ", " + getColorValue() + ")"; // messy duplication of statements. fix later
      }
      else if (block.style.opacity > 0){
        block.style.opacity -= 0.1;
        block.style.backgroundColor = "rgb(" + getColorValue() + ", " + getColorValue() + ", " + getColorValue() + ")";
      }
    }));
  }

// random rgb value
function getColorValue() {
  return Math.floor(Math.random() * 255).toString();
}


// prompt for grid creation
function gridPrompt() {
  const gridSize = prompt("Enter the size of your new grid. The max size is 100.");
  if (!parseInt(gridSize)){
    gridPrompt();
  }
  else if (gridSize > 100) {
    gridPrompt();
  }
  else {
    makeGrid(parseInt(gridSize), parseInt(gridSize));
  }
}

// set up button to create a new grid
const newGridBtn = document.querySelector("button");
newGridBtn.addEventListener("click", function() {
  gridPrompt();
})

// Initial setup
makeGrid(16, 16);
