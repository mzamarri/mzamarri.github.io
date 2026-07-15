const roles = [
    "Software Engineer?",
    "Full-Stack Developer?",
    "Frontend Developer?",
    "Backend Developer?"
]

const typewriter = document.getElementById("typewriter");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingSpeed = 120;
const deletingSpeed = 60;
const pauseTime = 1500;

function animate() {
    const role = roles[roleIndex];

    if (!deleting) {
        typewriter.textContent = role.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === role.length) {
            deleting = true;
            setTimeout(animate, pauseTime);
            return;
        }

        setTimeout(animate, typingSpeed);
    } else {
        typewriter.textContent = role.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(animate, deletingSpeed);
    }
}

animate();

