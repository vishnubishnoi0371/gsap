gsap.registerPlugin(SplitText);

let split, animation;

function setup() {
  // Clean up previous
  split && split.revert();
  animation && animation.revert();

  // Create new split
  split = new SplitText(".text", { type: "chars,words,lines" });
}
setup();
window.addEventListener("resize", setup);

document.querySelector("#chars").addEventListener("click", () => {
  animation && animation.revert();
  animation = gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04
  });
});
