// make 16 sketchblock divs
function makeGrid(x, y) {
  const wrapper = document.querySelector("#wrapper");
  const row = document.createElement("div");
  
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
}

// swap colors on mouseover
function setHover() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block =>
    block.addEventListener("mouseover", function() {
      block.classList.add("block-alt");
    }));
  }

makeGrid(16, 16);
setHover();