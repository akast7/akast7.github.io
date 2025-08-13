// Simple search functionality for filtering publication list
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const items = document.querySelectorAll(".publication-item");

  if (!input) return;

  input.addEventListener("input", function () {
    const filter = input.value.toLowerCase();
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});