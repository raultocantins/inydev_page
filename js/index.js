import { ScrollTrigger } from "../js/gsap/src/all.js";
import { gsap } from "../js/gsap/src/index.js";
gsap.registerPlugin(ScrollTrigger);
gsap
    .timeline({})
    .from("#animationText1", { scale: 1, opacity: 1 })
    .to(".section1", {
        scale: 10,
        opacity: 0,
        scrollTrigger: {
            scrub: true,
            trigger: ".section1",
            pin: ".section1",
            start: "top 15%",
            end: "100% 0%",
            markers: false,
        },
    });
gsap
    .timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "center center",
            end: "bottom center",
            markers: false,
            scrub: true,
            pin: true,
        },
    })
    .from("#animationText2", { opacity: 0.0, scale: 0 })
    .from("#animationText3", { opacity: 0.0 })
    .from("#viewmore", { opacity: 0.0 });

gsap
    .timeline({ repeat: 0, repeatDelay: 0 })
    .from("#item1", { opacity: 0.0, scale: 0, duration: 0.1 })
    .from("#item2", { opacity: 0.0, scale: 0, duration: 0.1, padding: 10 })
    .from("#item3", { opacity: 0.0, scale: 0, duration: 0.1, padding: 10 })
    .from("#item4", { opacity: 0.0, scale: 0, duration: 0.1, padding: 10 })
    .from("#item5", { opacity: 0.0, scale: 0, duration: 0.2 });
