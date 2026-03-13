function scrollGrid(direction) {
  const slider = document.getElementById("product-slider");
  const scrollAmount = 330; // Card width + gap
  if (direction === "left") {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full", "invisible");
    menu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    setTimeout(() => menu.classList.add("invisible"), 500); // Hide after transition
    document.body.style.overflow = "auto";
  }
}

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full", "invisible");
    menu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden"; // Lock background
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    setTimeout(() => menu.classList.add("invisible"), 500);
    document.body.style.overflow = "auto"; // Unlock background
  }
}

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full", "invisible");
    menu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    setTimeout(() => menu.classList.add("invisible"), 500);
    document.body.style.overflow = "auto";
  }
}