const avatar = document.querySelector(".contact-info__avatar");
const bodyTag = document.querySelector("body");
const mainHeader = document.querySelector(".contact-info__header");

const bodyStyle = getComputedStyle(bodyTag);

const cssVars = {
  "--secondary-text-color": bodyStyle.getPropertyValue(
    "--secondary-text-color"
  ),
  "--icon-color": bodyStyle.getPropertyValue("--icon-color"),
  "--border-color": bodyStyle.getPropertyValue("--border-color"),
  "--text-decoration-color": bodyStyle.getPropertyValue(
    "--text-decoration-color"
  ),
  "--dark-background-color": bodyStyle.getPropertyValue(
    "--dark-background-color"
  ),
};

const hoverVars = {
  "--secondary-text-color": "#cf4940",
  "--icon-color": "#43858d",
  "--border-color": "#e85349",
  "--text-decoration-color": "#e85349",
  "--dark-background-color": "#230e11",
};

const glitchClasses = ["layers", "glitch"];

const primaryAvatarImg = avatar.src;
const hoverAvatarImg = "assets/johnny.png";

avatar.addEventListener("mouseover", () => {
  for (const [key, value] of Object.entries(hoverVars)) {
    bodyTag.style.setProperty(key, value);
  }
  glitchClasses.forEach((glitchClass) => {
    mainHeader.classList.add(glitchClass);
  });
  avatar.src = hoverAvatarImg;
});

avatar.addEventListener("mouseleave", () => {
  for (const [key, value] of Object.entries(cssVars)) {
    bodyTag.style.setProperty(key, value);
  }
  glitchClasses.forEach((glitchClass) => {
    mainHeader.classList.remove(glitchClass);
  });
  avatar.src = primaryAvatarImg;
});
