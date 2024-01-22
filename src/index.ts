import "./style.css";

import { createSummary } from "smmry-fi";

console.log("Hello there!");

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector<HTMLTextAreaElement>("textarea")!;
  const output = document.querySelector<HTMLOutputElement>("output")!;

  input.addEventListener("input", () => {
    output.textContent = createSummary(input.value);
  });
});
