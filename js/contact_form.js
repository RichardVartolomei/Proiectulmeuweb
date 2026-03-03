function submitForm() {
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    // 7. Afișare în consolă
    console.log("Nume:", nume);
    console.log("Email:", email);
    console.log("Mesaj:", mesaj);

    // 8. Avertizare finală
    console.warn("Goodbye World!");
 } 
document.addEventListener("DOMContentLoaded", function() {

    // Exercițiul 1: Salut personalizat
    const headerParagraph = document.querySelector('header p');
    const hour = new Date().getHours();
    if(hour >= 6 && hour < 12) headerParagraph.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
    else if(hour >= 12 && hour < 18) headerParagraph.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
    else headerParagraph.textContent = "Bună seara! Bine ai venit pe pagina mea.";

    // Exercițiul 2: Validare formular()
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
        if(!email.includes("@")){
            feedback.textContent = "Email invalid! Trebuie să conțină @";
            feedback.style.color = "red";
            return;
        }
        if(mesaj.length < 10){
            feedback.textContent = "Mesajul trebuie să aibă cel puțin 10 caractere!";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = `Multumim, ${nume}! Mesajul a fost trimis.`;
        feedback.style.color = "green";
        form.reset();
    });

    // Exercițiul 3: Dark Mode toggle
    const darkModeBtn = document.getElementById("dark-mode-toggle");
    darkModeBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Exercițiul 4: Toggle vizibilitate secțiuni
    document.querySelectorAll("main h2").forEach(function(h2){
        h2.addEventListener("click", function(){
            const content = h2.nextElementSibling;
            content.classList.toggle("hidden");
            h2.classList.toggle("collapsed");
        });
    });

    alert("Hello World!");
});