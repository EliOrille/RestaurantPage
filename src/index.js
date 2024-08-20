import "./styles.css";
import bgimage from "./pancake background image.jpg";
console.log('hi');

const content = document.getElementById('content');
// const image = document.getElementById('image');
const image = document.createElement("img");
image.id = 'image';
image.src = bgimage;
content.appendChild(image);
// document.body.appendChild(image);

