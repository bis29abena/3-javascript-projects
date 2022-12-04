const left = document.querySelector(".leftArrow");
const right = document.querySelector(".rightArrow");
const images = document.querySelectorAll(".image");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 500}px)`;
    sliderNumber = index + 1;
    button.style.backgroundColor = "white";
  });
});

const changeColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 500}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 500}px)`;
  sliderNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  sliderNumber = length;
};

left.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

right.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
