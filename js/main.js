// ================= CONTACT FORM =================
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});

// ================= MOBILE MENU TOGGLE =================
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ================= PORTFOLIO RENDER =================
// expects data.js -> const portfolioData = [...]

const portfolio = document.getElementById("portfolio");

if (typeof portfolioData !== "undefined") {
  portfolioData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width:100%; border-radius:12px;">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    portfolio.appendChild(card);
  });
}


