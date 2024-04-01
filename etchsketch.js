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

makeGrid(16, 16);