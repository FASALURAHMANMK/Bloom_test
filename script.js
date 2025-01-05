// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    smooth: true,
    direction: 'vertical',
    lerp: 0.1, // Adjust smoothness (lower = smoother)
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Problem Section
gsap.from("#problem h2, #problem p", {
    scrollTrigger: {
        trigger: "#problem",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Animate Solution Section
gsap.from("#solution h2, #solution p", {
    scrollTrigger: {
        trigger: "#solution",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Animate Call-to-Action Section
gsap.from("#call-to-action h2, #call-to-action p, #call-to-action button", {
    scrollTrigger: {
        trigger: "#call-to-action",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Interactive Button Click
document.getElementById("join-button").addEventListener("click", () => {
    alert("You have planted a seed of positivity!");
});
