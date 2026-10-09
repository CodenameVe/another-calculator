const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 24;

let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(0).map(() => Math.random() * -100);

function resizeCanvas() {
  // save old column count
  const oldColumns = columns;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);

  if (columns > oldColumns) {
    // window got wider -> add new drops, don't touch old ones
    const extra = columns - oldColumns;
    const newDrops = Array(extra).fill(0).map(() => Math.random() * -100);
    drops = drops.concat(newDrops);
  } else if (columns < oldColumns) {
    // window got narrower -> just trim, keep the rest falling
    drops = drops.slice(0, columns);
  }
  // if same size, do nothing — drops keep falling
}

resizeCanvas();

// debounce resize so it doesn't fire 100x per second
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 100);
});

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(draw, 60);