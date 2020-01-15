/* eslint-disable */
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function checkAnswer(answer, correctAnswer) {
  if(answer == correctAnswer) {
    return true;
  } else {
    return false;
  }
}