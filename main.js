
let bgColor = prompt("Orqa fon rangi qanday bo'lsin? (Masalan: red, blue, )");


let textColor = prompt("Matn rangini qanday bo'lsin? (Masalan: white, black, )");


if (bgColor) {
  document.body.style.backgroundColor = bgColor;
}


if (textColor) {
  document.body.style.color = textColor;
}
