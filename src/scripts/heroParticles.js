export function initHeroParticles() {
  const canvas = document.getElementById("right-particles");
  const rightCol = document.getElementById("hero-right-col")
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particlesArray = [];

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();

  let mouse = {
    x: null,
    y: null,
    radius: 120
  };

  const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouse.x = undefined;
    mouse.y = undefined;
  };

  const handleResize = () => {
    resizeCanvas();
    init();
  };

  rightCol.addEventListener("mousemove", handleMouseMove);
  rightCol.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("resize", handleResize);

  class Particle {
    constructor(x, y, vx, vy, size, color) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.size = size;
      this.color = color;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      if (mouse.x !== undefined && mouse.y !== undefined) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          let force = (mouse.radius - distance) / mouse.radius;
          let pullX = (dx / distance) * force * 1.5;
          let pullY = (dy / distance) * force * 1.5;

          this.x += pullX;
          this.y += pullY;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
      if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;

      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 7000;

    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() + 1;
      let x = Math.random() * (canvas.width - size * 4) + size * 2;
      let y = Math.random() * (canvas.height - size * 4) + size * 2;
      let vx = (Math.random() - 0.5) * 0.8;
      let vy = (Math.random() - 0.5) * 0.8;
      let color = 'rgba(27, 25, 25, 0.5)'; 

      particlesArray.push(new Particle(x, y, vx, vy, size, color));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
  }

  init();
  animate();
}