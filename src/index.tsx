const root = document.getElementById("react-root") as HTMLDivElement;

root.innerText = "Loaded!";

window.addEventListener(
  "deviceorientation",
  event => {
    root.innerText =
      `absolute: ${event.absolute}\n` +
      `alpha: ${event.alpha}\n` +
      `beta: ${event.beta}\n` +
      `gamma: ${event.gamma}`;
  },
  true
);
