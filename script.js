// Timeline
const Timeline = gsap.timeline()

Timeline
.from('.logo', { autoAlpha: 0, duration: 1, x: -10})
.from('.menu-links ul li', { autoAlpha: 0, duration: 1, x: -10, stagger: 0.1}, "-=1")
.from('.title', { autoAlpha: 0, duration: 1, y: 10})
.from('.tagline', { autoAlpha: 0, duration: 0.5, y: 10})
.from('.desc', { autoAlpha: 0, duration: 0.5, y: 10}, "-=0.5")
.from('.beer', { autoAlpha: 0, duration: 0.3, y: -1000})
.to('.beer', { duration: 1.5, y: -600, repeat: -1, yoyo: true, ease: "power1.inOut" });