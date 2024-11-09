// Функции JavaScript, если необходимо
$(document).ready(function () {
  // Пример с кнопкой
  $("button").click(function () {
    alert("Супер! Вы только что подписались!");
  });
});

const button = document.getElementById('myButton');
button.disabled = false; // Для включения кнопки  
button.disabled = true;  // Для отключения кнопки