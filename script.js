const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;


canvas.width = cw;
canvas.height = ch;


window.addEventListener('resize', function(event) {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw
    canvas.height = ch;
    maxColumns = cw / fontSize;
    console.log(cw, ch)
}, true);

let charArr = [
    "一",
    "零",
    "五",
    "一",
    "零",
    "九",
    "一",
    "一",
    "二",
    "一",
    "零",
    "一",
    "一",
    "一",
    "四",
    "一",
    "零",
    "五",
    "一",
    "一",
    "七",
    "一",
    "零",
    "九",
    "九",
    "八",
    "一",
    "二",
    "一",
    "一",
    "零",
    "六",
    "一",
    "一",
    "七",
    "一",
    "一",
    "六",
    "一",
    "一",
    "五",
    "一",
    "一",
    "七",
    "一",
    "零",
    "九",
    "一",
    "零",
    "五",
    "一",
    "一",
    "六",
    "一",
    "一",
    "五",
    "一",
    "一",
    "七",
    "一",
    "零",
    "七",
    "一",
    "零",
    "五",
];

let maxCharCount = 300;
let fallingCharArr = [];
let fontSize = 10;
let maxColumns = cw / fontSize;


let frames = 0;

class FallingChar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.value =
      charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

    ctx.fillStyle = "rgba(0,255,0)";
    ctx.font = fontSize + "px sans-serif";
    ctx.fillText(this.value, this.x, this.y);
    this.y += this.speed;

    if (this.y > ch) {
      this.y = (Math.random() * ch) / 2 - 50;
      this.x = Math.floor(Math.random() * maxColumns) * fontSize;
      this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
    }
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * ch) / 2 - 50
    );
    fallingCharArr.push(fallingChar);
  }
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, cw, ch);
  for (let i = 0; i < fallingCharArr.length && frames % 3 == 0; i++) {
    fallingCharArr[i].draw(ctx);
  }

  requestAnimationFrame(update);
  frames++;
};

update();
