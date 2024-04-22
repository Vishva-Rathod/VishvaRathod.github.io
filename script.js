// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Zoom controls
  const zoomInButton = document.getElementById("zoom-in");
  const zoomOutButton = document.getElementById("zoom-out");
  const pdfViewer = document.getElementById("pdf-iframe");

  let zoomLevel = 1;
  zoomInButton.addEventListener("click", function () {
    zoomLevel += 0.1;
    pdfViewer.style.transform = `scale(${zoomLevel})`;
    pdfViewer.style.transformOrigin = "0 0";
  });

  zoomOutButton.addEventListener("click", function () {
    zoomLevel -= 0.1;
    if (zoomLevel < 1) zoomLevel = 1;
    pdfViewer.style.transform = `scale(${zoomLevel})`;
    pdfViewer.style.transformOrigin = "0 0";
  });
});

if (
  /iPhone|iPad|iPod|Android|BlackBerry|webOS|Windows Phone/i.test(
    navigator.userAgent
  )
) {
  window.location.href = "/portfolio.pdf";
}