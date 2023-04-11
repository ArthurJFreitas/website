window.onload = function(){
  const themeToggleButton = document.getElementById("theme-toggle");

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggleButton.textContent = "☀️";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggleButton.textContent = "🌙";
    }
  });
};