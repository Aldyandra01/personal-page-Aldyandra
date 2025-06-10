// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika document di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

documentevent.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle search input
  const searchIcon = document.querySelector("#search");
  const searchInput = document.querySelector("#searchInput");

  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    if (searchInput.style.display === "none") {
      searchInput.style.display = "inline-block";
      searchInput.focus();
    } else {
      searchInput.style.display = "none";
    }
  });

  // Tekan Enter untuk menjalankan pencarian
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value.toLowerCase();
      if (!keyword.trim()) return;
      
      // Contoh: cari dan highlight teks di halaman
      const bodyText = document.body.innerText.toLowerCase();
      if (bodyText.includes(keyword)) {
        alert(`Kata "${keyword}" ditemukan di halaman.`);
      } else {
        alert(`Kata "${keyword}" tidak ditemukan.`);
      }
    }
  });
