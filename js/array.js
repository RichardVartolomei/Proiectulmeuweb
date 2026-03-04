// 1. Extragem lista ordonată și o transformăm în array de string-uri
const educationList = document.querySelector("#education ol");
const educationItems = Array.from(educationList.querySelectorAll("li"));
const educationArray = educationItems.map(li => li.textContent.trim());

console.log("Array educație:", educationArray);

// 2. Filtrare după cuvânt cheie
const filter2025 = educationArray.filter(item => item.includes("2025"));
console.log("Filtru '2025':", filter2025);

const filterClase = educationArray.filter(item => item.includes("Clasele"));
console.log("Filtru 'Clasele':", filterClase);

// 3. Array cu primul cuvânt din fiecare element
const firstWords = educationArray.map(item => item.split(" ")[0]);
console.log("Primul cuvânt din fiecare:", firstWords);

// 4. Calcul total ani de studiu
// Presupunem că avem texte de tipul "Clasele 1-4"
const totalYears = educationArray.reduce((total, item) => {
    const match = item.match(/(\d+)-(\d+)/);
    if (match) {
        const start = parseInt(match[1]);
        const end = parseInt(match[2]);
        return total + (end - start + 1);
    }
    return total;
}, 0);

console.log(`Total ani de studiu: ${totalYears}`);
