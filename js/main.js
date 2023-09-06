const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const n = 3;

const pointA = {
  x: myCanvas.width / 2,
  y: 300,
};
const pointB = {
  x: myCanvas.width / 2,
  y: 200,
};

animate();

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  const sec = new Date().getTime() / 1000;
  const size = 10;

  for (let i = 2; i < 5; i++) {
    if (i % 3 == 0) continue;

    const t = (Math.sin(sec * 3.5) + 1) / i;
    // const t = i / 3;
    const C = vLerp(pointA, pointB, t);
    drawCircles(C, size);
  }

  drawCircles(pointA, size);
  // drawCircles(pointB, size);
  requestAnimationFrame(animate);
}

function drawCircles(pos, size) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "black";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.textRendering = "auto";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  // ctx.fillText(, pos.x, pos.y);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function vLerp(a, b, t) {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
  };
}

///////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// const pointA = {
//   x: myCanvas.width - myCanvas.width / 2.2,
//   y: 200,
// };
// const pointB = {
//   x: myCanvas.width / 2.2,
//   y: 200,
// };

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const size = 10;

//   for (let i = 2; i < 5; i++) {
//     if (i % 3 == 0) continue;

//     const t = (Math.sin(sec * 3.5) + 1) / i;
//     // const t = i / 3;
//     const C = vLerp(pointA, pointB, t);
//     drawCircles(C, size);
//   }

//   drawCircles(pointA, size);
//   // drawCircles(pointB, size);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: lerp(a.x, b.x, t),
//     y: 200,
//   };
// }

//////////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const pointA = { x: myCanvas.width / 2.1, y: myCanvas.height / 2 };
// const pointB = {
//   x: myCanvas.width - myCanvas.width / 2.1,
//   y: myCanvas.height / 2,
// };

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 2) + 1) / 2;
//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, "C");

//   drawCircles(pointA, "A");
//   drawCircles(pointB, "B");
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, label) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   ctx.fillText(label, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: lerp(a.x, b.x, t),
//     y: myCanvas.height / 2,
//   };
// }

// ///////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 3) + 1) / 2;
//   const size = lerp(20, 10, t);
//   const size2 = lerp(20, 15, t);
//   const size3 = lerp(20, 5, t);

//   const pointA = {
//     x: myCanvas.width / 2.13,
//     y: myCanvas.height / 2,
//   };
//   const pointB = {
//     x: myCanvas.width - myCanvas.width / 2.13,
//     y: myCanvas.height / 2,
//   };

//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, size);

//   drawCircles(pointA, size2);
//   drawCircles(pointB, size3);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: myCanvas.width / 2,
//     y: myCanvas.height / 2,
//   };
// }

// ////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 3) + 1) / 2;
//   const size = lerp(20, 10, t);
//   const size2 = lerp(20, 15, t);
//   const size3 = lerp(20, 5, t);

//   const pointA = {
//     x: myCanvas.width / 2.13,
//     y: lerp(myCanvas.height / 2.2, myCanvas.height / 2, t),
//   };
//   const pointB = {
//     x: myCanvas.width - myCanvas.width / 2.13,
//     y: lerp(myCanvas.height / 2.2, myCanvas.height / 2, t),
//   };

//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, size);

//   drawCircles(pointA, size2);
//   drawCircles(pointB, size);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: myCanvas.width / 2,
//     y: myCanvas.height / 2,
//   };
// }

// //////////////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 3) + 1) / 2;
//   const size = lerp(20, 10, t);
//   const size2 = lerp(20, 15, t);
//   const size3 = lerp(20, 5, t);

//   const pointA = {
//     x: lerp(
//       myCanvas.width - myCanvas.width / 2,
//       myCanvas.width / 2.1,
//       t * t * t
//     ),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t),
//   };
//   const pointB = {
//     x: lerp(myCanvas.width / 2, myCanvas.width - myCanvas.width / 2.1, t * t),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t),
//   };

//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, size);

//   drawCircles(pointA, size);
//   drawCircles(pointB, size);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: myCanvas.width / 2,
//     y: myCanvas.height / 2,
//   };
// }

// //////////////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 3) + 1) / 2;
//   const size = lerp(20, 10, t);
//   const size2 = lerp(20, 15, t);
//   const size3 = lerp(20, 5, t);

//   const pointA = {
//     x: lerp(myCanvas.width - myCanvas.width / 2, myCanvas.width / 2.1, t),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t),
//   };
//   const pointB = {
//     x: lerp(myCanvas.width / 2, myCanvas.width - myCanvas.width / 2.1, t),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t),
//   };

//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, size);

//   drawCircles(pointA, size);
//   drawCircles(pointB, size);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: myCanvas.width / 2,
//     y: myCanvas.height / 2,
//   };
// }

// /////////////////////////////////////////////
// const myCanvas = document.getElementById("myCanvas");
// const ctx = myCanvas.getContext("2d");

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const n = 3;

// animate();

// function animate() {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//   const sec = new Date().getTime() / 1000;
//   const t = (Math.sin(sec * 3) + 1) / 2;
//   const size = lerp(20, 10, t);
//   const size2 = lerp(20, 15, t);
//   const size3 = lerp(20, 5, t);

//   const pointA = {
//     x: lerp(myCanvas.width - myCanvas.width / 2, myCanvas.width / 2.1, t),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t * t * t),
//   };
//   const pointB = {
//     x: lerp(myCanvas.width / 2, myCanvas.width - myCanvas.width / 2.1, t),
//     y: lerp(myCanvas.height / 2, myCanvas.height / 2.2, t * t),
//   };

//   const C = vLerp(pointA, pointB, t);
//   drawCircles(C, size);

//   drawCircles(pointA, size);
//   drawCircles(pointB, size);
//   requestAnimationFrame(animate);
// }

// function drawCircles(pos, size) {
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "black";
//   ctx.fill();
//   ctx.fillStyle = "white";
//   ctx.textRendering = "auto";
//   ctx.textBaseline = "middle";
//   ctx.textAlign = "center";
//   // ctx.fillText(, pos.x, pos.y);
// }

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

// function vLerp(a, b, t) {
//   return {
//     x: myCanvas.width / 2,
//     y: myCanvas.height / 2,
//   };
// }
