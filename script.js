const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-slate-900');
  
  if (document.body.classList.contains('bg-white')) {
    themeToggle.textContent = '☼';
  } else {
    themeToggle.textContent = '☽';
  }
});
const words = ["مبرمجة واجهات أمامية صاعدة", "شغوفة بتطوير الويب", "أسطورة البرمجة القادم ⏳"];
let i = 0;
let timer;

function typingEffect() {
  const word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('typing-text').innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 2000);
      return;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  const word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typing-text').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(typingEffect, 500);
      return;
    }
    timer = setTimeout(loopDeleting, 50);
  };
  loopDeleting();
}

typingEffect();
