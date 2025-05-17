const items = ['라면', '빵', '음료수', '삼각김밥'];
const emojis = {
  '라면': '🍜',
  '빵': '🥐',
  '음료수': '🥤',
  '삼각김밥': '🍙'
};

function spinRoulette() {
  const roulette = document.getElementById('roulette');
  const resultBox = document.getElementById('result');

  let index = 0;
  let spins = 20 + Math.floor(Math.random() * 10); // 총 회전 수 (무작위)

  const interval = setInterval(() => {
    roulette.textContent = emojis[items[index % items.length]];
    index++;
    if (index >= spins) {
      clearInterval(interval);
      const selected = items[(index - 1) % items.length];
      resultBox.textContent = `오늘은 ${selected}! ${emojis[selected]}`;
    }
  }, 100);
}
