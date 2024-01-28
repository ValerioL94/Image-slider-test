import './styles.css';
import slideshow from './modules/slideshow';
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

slideshow.displaySlides();
setInterval(slideshow.autoDisplay, 5000);
