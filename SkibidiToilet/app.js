const submitBtn = document.querySelector(".submit");
const input = document.querySelector(".input__card");
const names = [
  "Туалетный Танец",
  "Скибиди Санитар",
  "Ритмичный Реструм",
  "Туалетная Тусовка",
  "Би-Би-Бидет",
  "Туалетный Трепет",
  "Санитарная Скорость",
  "Туалетный Трип",
  "Ритмичный Раздельный",
  "Туалетное Танго",
  "Танцующий Унитаз",
  "Санитарный Шейк",
  "Ритмичный Писсуар",
  "Туалетный Флекс",
  "Би-Би-Биде-Бум",
  "Туалетная Импровизация",
  "Санитарная Ритмика",
  "Туалетный Брейк",
  "Ритмичный Сплэш",
  "Туалетный Хип-Хоп",
];
submitBtn.addEventListener("click", () => {
  document.querySelector('label').classList.add('none');
  document.querySelector('h1').classList.add('none');
  submitBtn.classList.add('none')
 document.querySelector('.wrapper__input').insertAdjacentHTML('beforeend',`<h1 class="name">Ты на 99% => ${names[Math.round(Math.random()*names.length)]}</h1>`)
});
input.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  const arrayInputValue = inputValue.split(" ");
  inputValue = arrayInputValue.join("");
  if (inputValue.length === 16) {
    submitBtn.classList.remove("disabled");
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.add("disabled");
    submitBtn.disabled = true;
  }
});
input.addEventListener("input", function (e) {
  let trimmedValue = this.value.replace(/\s/g, ""); // Удаляем все пробелы из значения поля ввода
  let formattedValue = "";
  for (let i = 0; i < trimmedValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " "; // Добавляем пробел после каждых четырех цифр
    }
    formattedValue += trimmedValue[i];
  }
  this.value = formattedValue;
});
