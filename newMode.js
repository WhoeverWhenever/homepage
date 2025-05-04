const avatar = document.querySelector(".contact-info__avatar");
const bodyTag = document.querySelector("body");
const mainHeader = document.querySelector(".contact-info__header");
const glitchTextTags = ["h3", "span", "p", "li"];

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

const glitchHeaderClasses = ["layers", "glitch"];
const glitchTextClass = "glitch-text";

const glitchTextElements = glitchTextTags.flatMap((tag) =>
  Array.from(document.querySelectorAll(tag))
);

const primaryAvatarImg = avatar.src;
const hoverAvatarImg = "assets/johnny.png";

function setCSSVars(vars) {
  for (const [key, value] of Object.entries(vars)) {
    bodyTag.style.setProperty(key, value);
  }
}

function toggleGlitchEffects(enable) {
  glitchHeaderClasses.forEach((cls) =>
    mainHeader.classList.toggle(cls, enable)
  );
  glitchTextElements.forEach((el) =>
    el.classList.toggle(glitchTextClass, enable)
  );
}

avatar.addEventListener("mouseover", () => {
  setCSSVars(hoverVars);
  toggleGlitchEffects(true);
  avatar.src = hoverAvatarImg;
});

avatar.addEventListener("mouseleave", () => {
  setCSSVars(cssVars);
  toggleGlitchEffects(false);
  avatar.src = primaryAvatarImg;
});
