document.addEventListener("DOMContentLoaded", async function () {

    // 1. Extrage lista educației

    const educationList = document.querySelector("#education ol");

    const educationArray = Array.from(educationList.querySelectorAll("li"))
        .map(li => li.textContent);

    console.log("Array educatie:", educationArray);


    // 2. Filtrări

    const filter1 = educationArray.filter(item => item.includes("12"));
    console.log("Filtru '12':", filter1);

    const filter2 = educationArray.filter(item => item.includes("Facultatea"));
    console.log("Filtru 'Facultatea':", filter2);


    // 3. Primul cuvânt din fiecare
    

    const firstWords = educationArray.map(item => item.split(" ")[0]);

    console.log("Primul cuvânt:", firstWords);


    // 4. Total ani de studiu

    const totalYears = educationArray.reduce((total, item) => {

        const match = item.match(/(\d+)-(\d+)/);

        if (match) {

            const start = parseInt(match[1]);
            const end = parseInt(match[2]);

            return total + (end - start + 1);

        }

        return total + 4;

    }, 0);

    console.log(`Total ani de studiu: ${totalYears}`);


    // 5. Proiecte (array normal)

    const projects = [
        { name: "Calculator JS", tech: "JavaScript", done: true },
        { name: "Portfolio Website", tech: "HTML/CSS", done: true },
        { name: "Mini Wolfram", tech: "Python", done: false },
        { name: "ToDo App", tech: "React", done: true }
    ];

    const projectsList = document.getElementById("projects-list");
    const summary = document.getElementById("projects-summary");

    projectsList.innerHTML = projects
        .map(p => `<p>${p.name} (${p.tech}) - ${p.done ? "Finalizat" : "În curs"}</p>`)
        .join("");

    const completed = projects.filter(p => p.done).length;

    summary.textContent = `Finalizate: ${completed} din ${projects.length}`;


    // 6. Proiecte din JSON (fetch)

    try {

        const response = await fetch("data/projects.json");

        const jsonProjects = await response.json();

        projectsList.innerHTML = jsonProjects
            .map(p => `<p>${p.name} (${p.tech}) - ${p.done ? "Finalizat" : "În curs"}</p>`)
            .join("");

        const completedJSON = jsonProjects.filter(p => p.done).length;

        summary.textContent = `Finalizate: ${completedJSON} din ${jsonProjects.length}`;

    } catch (error) {

        console.error("Eroare la încărcarea proiectelor:", error);

    }

});