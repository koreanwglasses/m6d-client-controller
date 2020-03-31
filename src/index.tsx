import * as React from "react";
import * as ReactDOM from "react-dom";
import GyroNorm from "gyronorm";

const root = document.getElementById("react-root") as HTMLDivElement;

(async () => {
  const gn = new GyroNorm();
  try {
    await gn.init({});
  } catch (e) {
    root.innerText =
      "This device does not support 3-axis gyroscope input detection.\n" +
      e.toString();
    return;
  }

  gn.start(data => {
    root.innerText =
      `absolute: ${data.do.absolute}\n` +
      `alpha: ${data.do.alpha}\n` +
      `beta: ${data.do.beta}\n` +
      `gamma: ${data.do.gamma}`;
  });
})();
