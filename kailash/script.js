const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

const syncHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

document.querySelectorAll(".section-heading, .manifest-grid, .kora-grid, .guide-grid, .price-top").forEach((element) => {
  element.setAttribute("data-reveal", "");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("revealed"));
}

const galleryItems = Array.from(document.querySelectorAll(".gallery-grid figure"));
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxCounter = document.querySelector(".lightbox-counter");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
let activeImageIndex = 0;
let lastFocusedGalleryItem = null;
let touchStartX = 0;

const renderLightboxImage = () => {
  const item = galleryItems[activeImageIndex];
  const image = item?.querySelector("img");
  const caption = item?.querySelector("figcaption")?.textContent?.trim() || "";
  if (!image || !lightboxImage) return;

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption;
  lightboxCounter.textContent = `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;
};

const openLightbox = (index, trigger) => {
  if (!lightbox || !galleryItems.length) return;
  activeImageIndex = index;
  lastFocusedGalleryItem = trigger;
  renderLightboxImage();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  lightboxClose?.focus();
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
  lightboxImage.removeAttribute("src");
  lastFocusedGalleryItem?.focus();
};

const showNextImage = (direction) => {
  activeImageIndex = (activeImageIndex + direction + galleryItems.length) % galleryItems.length;
  renderLightboxImage();
};

galleryItems.forEach((item, index) => {
  item.tabIndex = 0;
  item.setAttribute("role", "button");
  item.setAttribute("aria-label", `Открыть фотографию: ${item.querySelector("img")?.alt || index + 1}`);
  item.addEventListener("click", () => openLightbox(index, item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(index, item);
    }
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => showNextImage(-1));
lightboxNext?.addEventListener("click", () => showNextImage(1));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0]?.clientX || 0;
}, { passive: true });
lightbox?.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0]?.clientX || 0;
  const distance = touchEndX - touchStartX;
  if (Math.abs(distance) > 50) showNextImage(distance < 0 ? 1 : -1);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showNextImage(-1);
  if (event.key === "ArrowRight") showNextImage(1);
});
