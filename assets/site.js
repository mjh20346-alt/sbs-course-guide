(function () {
  var fallback = "assets/course-photos/course-fallback.png";

  function prepareImage(img) {
    if (!img) return;
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.hasAttribute("referrerpolicy")) img.setAttribute("referrerpolicy", "no-referrer");

    function useFallback() {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";
      img.classList.add("image-fallback");
      img.src = fallback;
    }

    img.addEventListener("error", useFallback);
    if (img.complete && img.naturalWidth === 0) useFallback();
  }

  document.querySelectorAll("img").forEach(prepareImage);
})();
