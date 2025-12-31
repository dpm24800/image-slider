# Image Slider
A smooth, interactive image viewer inspired by TikTok's vertical swipe interface. Users can scroll through images, zoom in, navigate with keyboard arrows, and track progress. The project supports loading image data from **JSON** or **CSV** files.

---

## Features

* Smooth **vertical slide animation** (TikTok feel)
* **Progress indicator** showing the current image
* **Image zoom** on click
* Full **keyboard navigation** (Arrow Up / Arrow Down)
* **Mouse wheel** and **touch swipe** support
* Dynamic loading from **JSON** or **CSV** files
* Clean, responsive layout

---

## Folder Structure

```
project-root/
│
├── index.html          # Main HTML file
├── styles.css          # Global CSS
│
├── data/
│   ├── images.json     # Image data in JSON format
│   └── images.csv      # Image data in CSV format
│
├── js/
│   ├── script.js       # Main gallery logic
│   ├── json-reader.js  # JSON loader helper
│   └── csv-reader.js   # CSV loader helper
│
└── assets/             # Optional: local images, icons, fonts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dpm24800/image-slider.git
cd image-slider
```

### 2. Open `index.html` via a local server

**Important:** Due to browser security restrictions (CORS), you **cannot load JSON or CSV data by opening the file directly** in your browser. You must run a local server. Options include:

* **VS Code Live Server extension**: Right-click `index.html` → Open with Live Server
* **Python server**: `python -m http.server 8000`
* **Node.js server**: `http-server -p 8080`

After starting a server, open the page in your browser, e.g.:

```
http://127.0.0.1:5500/index.html
```

### 3. Loading Data

* **JSON**: The gallery reads `data/images.json` by default.
* **CSV**: To use CSV, include `PapaParse` and `js/csv-reader.js`.

---

## Dependencies

* [PapaParse](https://www.papaparse.com/) (optional, for CSV support)

Include in `index.html` if using CSV:

```html
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
```

---

## Usage

* **Swipe Up / Down** or **Arrow Keys** to navigate images
* **Click on an image** to zoom
* **Mouse wheel** for scrolling images
* **Progress dots** indicate the current image

---

## Live Demo

You can view a live demo of this image slider [here](https://dpm24800.github.io/image-slider/).

![screenshot](data/screenshot.png)

---
## Contributing

Feel free to submit pull requests or open issues to improve this project.

---

## License

MIT License © Dipak Pulami Magar
