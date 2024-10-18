const profileImage = document.querySelector("#profile-image");
//const button = document.querySelector(".change");

profileImage.addEventListener("click", function () {
  const src = profileImage.getAttribute("src");

  if (src === "csillatoth.png") {
    profileImage.setAttribute("src", "uniqornish.jpeg");
  } else if (src === "uniqornish.jpeg") {
    profileImage.setAttribute("src", "csillatoth.png");
  }
});
