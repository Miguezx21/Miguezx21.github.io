/* =========================
   BOTONES MAGNÉTICOS
========================= */

if (window.innerWidth > 768) {
  const magneticButtons = document.querySelectorAll(".magnetic");

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 8;

      const moveY = (y - centerY) / 8;

      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0px, 0px)";
    });
  });
}

/* =========================
   EFECTO CV
========================= */

const cvButton = document.getElementById("cvButton");

if (cvButton) {
  cvButton.addEventListener("click", () => {
    createParticles();
  });
}

/* =========================
   PARTÍCULAS
========================= */

function createParticles() {
  const rect = cvButton.getBoundingClientRect();

  const x = rect.left + rect.width / 2;

  const y = rect.top + rect.height / 2;

  for (let i = 0; i < 18; i++) {
    const particle = document.createElement("span");

    document.body.appendChild(particle);

    particle.style.position = "fixed";

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.width = "10px";
    particle.style.height = "10px";

    particle.style.borderRadius = "50%";

    particle.style.background = "white";

    particle.style.pointerEvents = "none";

    particle.style.zIndex = "999";

    const randomX = (Math.random() - 0.5) * 500;

    const randomY = (Math.random() - 0.5) * 500;

    particle.animate(
      [
        {
          transform: "translate(0,0)",
          opacity: 1,
        },
        {
          transform: `translate(${randomX}px, ${randomY}px)`,
          opacity: 0,
        },
      ],
      {
        duration: 900,
        easing: "ease-out",
      },
    );

    setTimeout(() => {
      particle.remove();
    }, 900);
  }
}

/* =========================
   EASTER EGG
========================= */

const profileImage = document.querySelector(".profile-img");

if (profileImage) {
  let clicks = 0;

  profileImage.addEventListener("click", () => {
    clicks++;

    if (clicks === 5) {
      document.body.classList.toggle("developer-mode");

      alert("Modo Developer Activado 🚀");

      clicks = 0;
    }
  });
}
