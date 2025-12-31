/* ---------- DATA ---------- */
const images = [
{
    id: 1,
    url: "https://media.istockphoto.com/id/1128850660/photo/lumbini-nepal-birthplace-of-buddha-siddhartha-gautama.jpg?s=1024x1024&w=is&k=20&c=FyzkJijxAPGi_xi3_cY5KYgb2g0zfRZhTlvlqr8GgTE=",
    source: "https://www.istockphoto.com/photo/lumbini-nepal-birthplace-of-buddha-siddhartha-gautama-gm1128850660-297988848",
    keywords: "lumbini, nepalese-buddhist-sites"
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/2168475002/photo/night-view-of-boudha-or-bodhnath-stupa-with-moon.jpg?s=1024x1024&w=is&k=20&c=IV4oaeKI_wkPl8iFFDKngo3nUNMqPDxPyRGYX-76QxA=",
    source: "https://www.istockphoto.com/photo/night-view-of-boudha-or-bodhnath-stupa-with-moon-gm2168475002-588503029",
    keywords: "bouddhanath-stupa, stupa, nepalese-buddhist-sites"
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1585397919/photo/swayambhunath-stupa-in-kathmandu-nepal.jpg?s=1024x1024&w=is&k=20&c=H3D-yCgayi9CosEZ97GzmAA5RkgCjKzW-Dpr7efzylQ=",
    source: "https://www.istockphoto.com/photo/swayambhunath-stupa-in-kathmandu-nepal-gm1585397919-529009450",
    keywords: "swayambhunath-stupa, stupa, nepalese-buddhist-sites"
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/614040714/photo/yangon-myanmar-shwedagon-pagoda-at-twilight.jpg?s=1024x1024&w=is&k=20&c=lC-gzMWKsFHw31zQKT9L-id6b5-TGcrfFRDss5fpC_8=",
    source: "https://www.istockphoto.com/photo/yangon-myanmar-shwedagon-pagoda-at-twilight-gm614040714-106123583",
    keywords: "shwedagon-pagoda, pagoda, burmese-buddhist-sites"
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/664556100/photo/golden-rock-pagoda.jpg?s=1024x1024&w=is&k=20&c=40pZdNb0GXJRetTrfGhkVqdc_-3qSZPGW3t8gKvewFM=",
    source: "https://www.istockphoto.com/photo/golden-rock-pagoda-gm664556100-120978755",
    keywords: "kyaiktiyo-pagoda, pagoda, burmese-buddhist-sites"
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/512618630/photo/aerial-view-yangon-sule-pagoda-myanmar-burma.jpg?s=1024x1024&w=is&k=20&c=8veZDn-vXyEiEitT4bkEq0ahqLgejWNKcxvFwJMjatg=",
    source: "https://www.istockphoto.com/photo/aerial-view-yangon-sule-pagoda-myanmar-burma-gm512618630-87233167",
    keywords: "sule-pagoda, pagoda, burmese-buddhist-sites"
  },
  {
    id: 7,
    url: "https://media.istockphoto.com/id/479524452/photo/the-temples-of-bagan-at-sunrise-bagan-myanmar.jpg?s=1024x1024&w=is&k=20&c=THPTldJXVgiaA-csVnANWKiMgS1Q0XtdvtCNIoF26-k=",
    source: "https://www.istockphoto.com/photo/the-temples-of-bagan-at-sunrise-bagan-myanmar-gm479524452-68052191",
    keywords: "bagan, burmese-buddhist-sites"
  },
  {
    id: 8,
    url: "https://media.istockphoto.com/id/495690668/photo/phaung-daw-oo-pagoda-inle-lake-shan-state-myanmar.jpg?s=1024x1024&w=is&k=20&c=sKQWMUjUTIcrMK7Sb6Fvn-NOYxz_3a3pBCfpUNXp8CQ=",
    source: "https://www.istockphoto.com/photo/phaung-daw-oo-pagoda-inle-lake-shan-state-myanmar-gm495690668-78130251",
    keywords: "phaung-daw-oo-pagoda"
  },
  {
    id: 9,
    url: "https://media.istockphoto.com/id/1148814978/photo/mahabodhi-temple-bodh-gaya-india-the-site-where-gautam-buddha-attained-enlightenment.jpg?s=1024x1024&w=is&k=20&c=Qi96a38rXkhqHz17xfmdUU3f-eA6LEV4m8F708rl7Os=",
    source: "https://www.istockphoto.com/photo/mahabodhi-temple-bodh-gaya-india-the-site-where-gautam-buddha-attained-enlightenment-gm1148814978-310365772",
    keywords: "buddha-gaya"
  },
  {
    id: 10,
    url: "https://media.istockphoto.com/id/1148815017/photo/parinirvana-stupa-and-temple-kushinagar-india.jpg?s=1024x1024&w=is&k=20&c=toKTRiEIww2e9Q7HW-z2ZNy26_OxB7jXelovNWYSmMg=",
    source: "https://www.istockphoto.com/photo/parinirvana-stupa-and-temple-kushinagar-india-gm1148815017-310365801",
    keywords: "kushinagar"
  }
];


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