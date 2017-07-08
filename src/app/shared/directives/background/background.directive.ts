import { Directive, ElementRef/*, Input*/ } from '@angular/core';

const bg = 'img/back-ink-blue.jpg';

const css = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  zIndex: -10,
  transition: 'opacity 3s',
  opacity: 0
};

const addStyles = (el, styles) => {
  Object.keys(styles).forEach((key) => {
    el.nativeElement.style[key] = styles[key];
  });
};

const updateStyles = (el, alpha) => {
  el.nativeElement.style.opacity = alpha;
};

const loadImage = (url, callback) => {
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.addEventListener('load', () => {
    document.body.removeChild(img);
    callback.call();
  });
  document.body.appendChild(img);
};

@Directive({
  selector: '[bgImg]'
})
export class BackgroundDirective {

  constructor(el: ElementRef) {
    console.log('load: start');
    // Apply styles
    addStyles(el, css);
    // Load image
    loadImage(bg, () => {
      console.log('load: complete');
      updateStyles(el, 1);
    });
  }
}
