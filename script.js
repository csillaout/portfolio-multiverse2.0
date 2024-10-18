// You can replace the contents of this file with your own JavaScript code.

// For a challenge, why not try adding the current year to the footer?
// It's currently hard-coded, but this way it would update automatically.
// You can use new Date().getFullYear() to get the current year.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

document.addEventListener("DOMContentLoaded", () => {
  // Get the image and button elements
  const image = document.getElementById("profile-image");
  const button = document.querySelector(".change");

  // Set the alternative image source
  const newImageSrc = "/src/images/uniqornish.jpeg";

  // Add an event listener to the button
  button.addEventListener("click", () => {
    // Change the image source
    if (image.src.includes("csillatoth.png")) {
      image.src = newImageSrc;
    } else {
      image.src = "/src/images/csillatoth.png"; // Revert to the original image if clicked again
    }
  });
});
