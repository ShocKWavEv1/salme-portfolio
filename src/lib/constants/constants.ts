import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const customCursor = () => {
  const cursor: any = document.getElementById("custom-cursor");
  const links: any = document.querySelectorAll(
    ".image-gallery, .video-reel, .play-cursor, a, button"
  );

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    gsap.to(cursor, { x: clientX, y: clientY });
  };

  const onMouseEnterLink = (event: any) => {
    const link = event.target;

    if (link.classList.contains("play-cursor")) {
      gsap.to(cursor, { width: 15, height: 15 });
    } else {
      gsap.to(cursor, { width: 15, height: 15 });
    }
  };

  const onMouseLeaveLink = () => {
    gsap.to(cursor, { width: 45, height: 45, cursor: "pointer" });
  };

  document.addEventListener("mousemove", onMouseMove);

  links.forEach((link: any) => {
    link.addEventListener("mouseenter", onMouseEnterLink);
    link.addEventListener("mouseleave", onMouseLeaveLink);
  });
};
