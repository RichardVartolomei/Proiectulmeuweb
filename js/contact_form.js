document.addEventListener("DOMContentLoaded", function() {

    // --- Salut personalizat ---
    const headerParagraph = document.querySelector('header p');
    const hour = new Date().getHours();
    if(hour >= 6 && hour < 12) headerParagraph.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
    else if(hour >= 12 && hour < 18) headerParagraph.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
    else headerParagraph.textContent = "Bună seara! Bine ai venit pe pagina mea.";

    // --- Formular validare ---
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const nume = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mesaj = document.getElementById("message").value.trim();

        if(nume.length < 2){
            feedback.textContent = "Nume prea scurt!";
            feedback.style.color = "red";
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            feedback.textContent = "Email invalid!";
            feedback.style.color = "red";
            return;
        }

        if(mesaj.length < 10){
            feedback.textContent = "Mesajul trebuie să aibă cel puțin 10 caractere!";
            feedback.style.color = "red";
            return;
        }

        console.log("Nume:", nume);
        console.log("Email:", email);
        console.log("Mesaj:", mesaj);
        console.warn("Goodbye World!");

        feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
        feedback.style.color = "green";
        form.reset();
    });

    // --- Dark Mode toggle ---
    const darkModeBtn = document.getElementById("dark-mode-toggle");
    darkModeBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // --- Toggle vizibilitate secțiuni ---
    document.querySelectorAll("main h2").forEach(function(h2){
        h2.style.cursor = "pointer";
        h2.addEventListener("click", function(){
            const content = h2.nextElementSibling;
            content.classList.toggle("hidden");
            h2.classList.toggle("collapsed");
        });
    });

    // --- ALERT HELLO WORLD ---
    alert("Hello World!");
    // --- Buton back to top ---
    const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
});