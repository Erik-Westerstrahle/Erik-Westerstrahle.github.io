function displayProjects() {
    const projects = [
        { name: "Project 1", url: "https://github.com/Erik-Westerstrahle/morseCodeTranslator.git" },
        { name: "Project 2", url: "https://github.com/yourusername/project2" },
        { name: "Project 3", url: "https://github.com/yourusername/project3" }
        // Add more projects as needed
    ];

    const container = document.createElement('div');
    container.className = 'projects-container';

    projects.forEach(project => {
        const projectBox = document.createElement('div');
        projectBox.className = 'project-box';

        const link = document.createElement('a');
        link.href = project.url;
        link.target = '_blank';
        link.textContent = project.name;

        projectBox.appendChild(link);
        container.appendChild(projectBox);
    });

    document.body.appendChild(container);
}

window.onload = displayProjects;
