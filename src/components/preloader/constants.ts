import gsap from "gsap";

export const timer = () => {
  const TIME_IN_SECONDS = 4;

  let counterItem: any = document.querySelector(".timer");

  let counter = {
    val: 0,
  };

  gsap.to(counter, {
    duration: TIME_IN_SECONDS,
    val: 100,
    onUpdate() {
      counterItem.textContent = `${Math.ceil(counter.val)}%`;
    },
    ease: "Power3.easeOut",
    repeat: 0,
    delay: 0.5,
  });
};

export const curtain = () => {
  const tl = gsap.timeline();

  tl.to("body", {
    overflow: "hidden",
  })
    .to(".preloader .text-container", {
      duration: 1.5,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".preloader .text-container h1", {
      duration: 1,
      opacity: 0.5,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".preloader .text-container h1", {
      duration: 1,
      opacity: 0.5,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(".preloader, .time_container", {
      duration: 0.75,
      stagger: 0.2,
      //y: "-100%",
      opacity: 0,
      ease: "Power3.easeOut",
    })
    .to("body", {
      overflow: "auto",
    })
    .to(".preloader", {
      display: "none",
    });
};
