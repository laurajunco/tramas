const submitTag = document.querySelector(`.button`)
const inputTag = document.querySelector(`input`)
const contentTag = document.querySelector(`.colcha`)

submitTag.addEventListener('click', function() {
  appendSquares(inputTag.value)
  inputTag.value = ""
});

function appendSquares(text) {
  chars = text.toUpperCase().split("")   
  chars.forEach(char => {
    const divTag = document.createElement("div");   
    if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
      divTag.classList.add("vowel")
    } else if (char === " ") {
      divTag.classList.add("space")
    } else {
      divTag.classList.add("letter")
    }
    contentTag.appendChild(divTag)
  });

  const blackTag = document.createElement("div")
  blackTag.classList.add("new"); 
  contentTag.appendChild(blackTag)
}