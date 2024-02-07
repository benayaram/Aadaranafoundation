document.addEventListener("DOMContentLoaded", function() {
    // Programs data (assuming it's hardcoded for demonstration)
    var programs = [
        {
            title: "Food Distribution",
            date: "09-08-2023",
            profile: {
                name: "Aadarana Foundation",
                logo: "LOGO.png",
                role: "Project Officer"
            }
        },
        // Add more program objects here
    ];

    // Display all programs
    displayPrograms(programs);
});

function displayPrograms(programs) {
    var programCardsContainer = document.getElementById('programCards');
    programCardsContainer.innerHTML = ''; // Clear previous program cards

    programs.forEach(function(program) {
        var programCard = document.createElement('div');
        programCard.classList.add('program-card');

        var programTitle = document.createElement('h2');
        programTitle.textContent = program.title;

        var programDate = document.createElement('p');
        programDate.classList.add('date');
        programDate.textContent = program.date;

        var profileDetails = document.createElement('div');
        profileDetails.classList.add('profile');

        var profileImage = document.createElement('img');
        profileImage.src = program.profile.logo;
        profileImage.alt = program.profile.name + " Logo";

        var profileName = document.createElement('p');
        profileName.textContent = "Organization: " + program.profile.name;

        var profileRole = document.createElement('p');
        profileRole.textContent = "Role: " + program.profile.role;

        profileDetails.appendChild(profileImage);
        profileDetails.appendChild(profileName);
        profileDetails.appendChild(profileRole);

        var detailsColumn = document.createElement('div');
        detailsColumn.classList.add('details-column');
        detailsColumn.appendChild(programTitle);
        detailsColumn.appendChild(programDate);
        detailsColumn.appendChild(profileDetails);

        programCard.appendChild(detailsColumn);

        programCardsContainer.appendChild(programCard);
    });
}
