let images = [];

function loadJSON(path = "data/images.json") {
  return fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      images = data;
      init(); // Initialize your gallery after data loads
    })
    .catch(err => {
      console.error("Failed to load images:", err);
      alert("Failed to load JSON data. Make sure you are running a local server.");
    });
}

// Call this to load JSON
loadJSON();

let index = 0;
let animating = false;

/* ---------- DOM ---------- */
const img = document.getElementById("mainImage");
const source = document.getElementById("imageSource");
const keywords = document.getElementById("imageKeywords");
const progress = document.getElementById("progress");

/* ---------- INIT ---------- */
function init() {
  createProgress();
  render();
}
init(); // 🔥 FIX: render on first load

/* ---------- RENDER ---------- */
function render(direction = null) {
  if (animating) return;
  animating = true;

  if (direction) {
    img.classList.add(direction === "down" ? "slide-down" : "slide-up");
  }

  setTimeout(() => {
    img.src = images[index].url;
    // source.textContent = images[index].source;
    // source.innerHTML = `<a href="${images[index].source}">Go to Source</a>`;
    const link = document.createElement("a");
    link.href = images[index].source;
    link.textContent = "Go to Source";

    source.innerHTML = ""; // optional: clear old content
    source.appendChild(link);


    keywords.textContent = images[index].keywords;

    img.classList.remove("slide-up", "slide-down");
    img.classList.remove("zoomed");

    updateProgress();
    animating = false;
  }, 250);
}

/* ---------- NAV ---------- */
function next() {
  index = (index + 1) % images.length;
  render("down");
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  render("up");
}

/* ---------- BUTTONS ---------- */
upBtn.onclick = prev;
downBtn.onclick = next;

/* ---------- WHEEL ---------- */
viewer.addEventListener("wheel", e => {
  e.preventDefault();   // 🔥 stops scrollbar flash
  e.deltaY > 0 ? next() : prev();
}, { passive: false });

/* ---------- TOUCH ---------- */
let startY = 0;
viewer.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

viewer.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) next();
  if (endY - startY > 50) prev();
});

// Touch (mobile)
viewer.addEventListener("touchmove", e => {
  e.preventDefault();   // 🔥 stops mobile scroll
}, { passive: false });

/* ---------- KEYBOARD ---------- */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") next();
  if (e.key === "ArrowUp") prev();
});

/* ---------- ZOOM ---------- */
img.addEventListener("click", () => {
  img.classList.toggle("zoomed");
});

/* ---------- PROGRESS ---------- */
function createProgress() {
  images.forEach(() => {
    const dot = document.createElement("div");
    dot.className = "progress-dot";
    progress.appendChild(dot);
  });
}

function updateProgress() {
  [...progress.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}