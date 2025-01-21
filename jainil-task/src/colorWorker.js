import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs';

self.onmessage = function(event) {
    const img = event.data;
    const colorThief = new ColorThief();
    const color = colorThief.getColor(img);
    self.postMessage(color);
};