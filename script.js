const textElement = document.getElementById('text');
const music = document.getElementById('background-music');

// Text message
const message = `Hello, my name is Arturo, or lumen or something, I don't know, I'm getting tired. 
I loved coding, it was the only thing I ever did, but I've been losing myself recently, 
with emotions and work and school, I don't know what's right from wrong anymore, I don't know 
what to believe anymore or if I even have the courage to do it, loneliness has taken a toll, some 
days worse than others, I don't know who I am anymore, and when I try to remember, I just see all 
the bad in me because it is bad, I want to be successful in life but I probably won't have enough 
money for me, I always loved coding, I love how games were made like Minecraft java, or rust, Fortnite, 
but, I can't do any of that anymore because of work. And when I'm not at work, loneliness takes over, 
it's one thing or another, never peaceful, I am in a loop, forever. I have tried to make this website 
but, I guess it's not complete, I hope someone can finish this if I give up, but I'll probably finish it myself.`;

// Break the message into sentences
const sentences = message.split('.');
let currentSentence = 0;

// Trigger random glitch effect
function randomGlitchEffect() {
  const randomFont = Math.floor(Math.random() * 10) + 1; // 10 fonts
  textElement.className = `font-${randomFont}`;
  textElement.style.color = ['white', 'red', 'blue'][Math.floor(Math.random() * 3)];
  textElement.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
}

// Typewriter effect for each sentence
function typeSentence(sentence, callback) {
  let charIndex = 0;
  textElement.innerHTML = '';
  const interval = setInterval(() => {
    if (charIndex < sentence.length) {
      textElement.innerHTML += sentence[charIndex];
      charIndex++;
      if (Math.random() > 0.5) randomGlitchEffect();
    } else {
      clearInterval(interval);
      setTimeout(callback, 1000); // Pause before next sentence
    }
  }, 80);
}

// Sequentially show sentences
function showSentences() {
  if (currentSentence < sentences.length) {
    const sentence = sentences[currentSentence].trim() + '.';
    typeSentence(sentence, () => {
      currentSentence++;
      showSentences();
    });
  } else {
    endSequence();
  }
}

// End sequence: show smiley face, glitch, fade to black
function endSequence() {
  textElement.innerHTML = ':)';
  textElement.style.animation = 'glitch 1s infinite, colorShift 1.5s infinite';
  setTimeout(() => {
    textElement.innerHTML = '';
    document.body.style.background = 'black';
  }, 3000);
}

// Start sequence when music plays
music.addEventListener('play', showSentences);

// End sequence when music finishes
music.addEventListener('ended', endSequence);