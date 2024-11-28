// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all tab buttons and the underline line
  const tabs = document.querySelectorAll('.tab_btn');
  const line = document.querySelector('.line');

  // Get the content sections by their IDs
  const departmentContent = document.getElementById('department-content');
  const facultyContent = document.getElementById('dpt-faculty-content');
  const associationContent = document.getElementById('dpt-association-content');
  const cardsSection = document.getElementById('department-cards');

  // Function to show the relevant content and hide others
  function showContent(tabName) {
      // Hide all content sections
      departmentContent.style.display = 'none';
      facultyContent.style.display = 'none';
      associationContent.style.display = 'none';
      cardsSection.style.display = 'none';


      // Show the clicked tab's content based on tabName
      switch(tabName) {
          case 'Department':
              cardsSection.style.display = 'flex';
              departmentContent.style.display = 'flex'; // Assuming flex layout
              break;
          case 'Faculty Members':
              facultyContent.style.display = 'block';
              cardsSection.style.display = 'none';
              break;
          case 'Association':
              associationContent.style.display = 'block';
              cardsSection.style.display = 'none';
              break;
          default:
              console.warn(`No content section found for tab: ${tabName}`);
      }
  }

  // Function to update the active tab and position the underline
  function setActiveTab(tab) {
      // Remove 'active' class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add 'active' class to the clicked tab
      tab.classList.add('active');

      // Move the underline below the active tab
      setLinePosition(tab);
  }

  // Function to set the underline position and width
  function setLinePosition(activeTab) {
      // Get the position and width of the active tab
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = activeTab.parentElement.getBoundingClientRect();

      // Calculate the left offset relative to the parent container
      const left = activeTab.offsetLeft;

      // Set the line's width and left position
      line.style.width = `${activeTab.offsetWidth}px`;
      line.style.left = `${left}px`;
  }

  // Event listeners for tab clicks
  tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
          const clickedTab = e.currentTarget;
          const tabName = clickedTab.textContent.trim();

          // Redirect to "Home" if Home tab is clicked
          if (tabName === 'Home') {
              window.location.href = '../dpt.html';
              return; // Stop further execution
          }

          // Update active tab and move underline
          setActiveTab(clickedTab);

          // Show the relevant content based on the clicked tab
          showContent(tabName);
      });
  });

  // Function to initialize the default active tab
  function initializeTabs() {
      // Find the tab that has the 'active' class
      let activeTab = document.querySelector('.tab_btn.active');

      // If no tab is active, default to the first tab (Department)
      if (!activeTab) {
          activeTab = tabs[1]; // Assuming Department is the second tab
          setActiveTab(activeTab);
          showContent(activeTab.textContent.trim());
      } else {
          // Ensure the corresponding content is displayed
          showContent(activeTab.textContent.trim());
      }

      // Position the underline correctly
      setLinePosition(activeTab);
  }

  // Initialize tabs on page load
  initializeTabs();

  // Adjust the underline position on window resize
  window.addEventListener('resize', () => {
      const activeTab = document.querySelector('.tab_btn.active');
      if (activeTab) {
          setLinePosition(activeTab);
      }
  });

  // Additional Functionality: Load Department Details if on Department Tab
  // Assuming you have a function loadDepartmentDetails for department-specific content
  function loadDepartmentDetails() {
    const departmentData = {
        "Mechanical Engineering": {
            description: `The department was established in the year 2011. The department offers a 4-year B.E. program (8 semesters) in Mechanical Engineering which is affiliated to Anna University, Chennai and approved by All India Council for Technical Education (AICTE). The department currently has an intake of 120 students. The department has qualified competent and motivated faculty members with minimum qualification of M.Tech/M.E. in subjects like engineering design, thermal engineering, manufacturing engineering, CAD/CAM, industrial engineering etc., with good teaching experience.`,
            image: "https://via.placeholder.com/300",
            cards: [
                { title: "VISION", content: [
                    "World Class Technical Education",
                    "Ethical Values",
                    "Competitive Skills",
                    "High Pattern of Discipline",
                    "To enhance the students to perform with global standards and make them evolve as socially responsible technocrats"
                ]},
                { title: "MISSION", content: [
                    "To provide holistic education in the field of Mechanical Engineering.",
                    "To develop skilled engineers who are innovative, ethical, and disciplined.",
                    "To promote research and development in collaboration with industry."
                ]}
            ],
        },
        "Civil Engineering": {
            description: `Civil Engineering involves designing and constructing infrastructure projects like buildings, bridges, roads, and more. Our mission is to train engineers who contribute to sustainable infrastructure development.`,
            image: "https://via.placeholder.com/300",
            cards: [
                { title: "VISION", content: [
                    "To construct sustainable infrastructure",
                    "To adopt innovative construction practices",
                    "To integrate environmental safety in design"
                ]},
                { title: "MISSION", content: [
                    "Focus on environmental impact reduction",
                    "Develop engineering solutions for urbanization",
                    "Provide leadership in civil engineering education"
                ]}
            ],
        },
    };

    // Read query parameter
    const params = new URLSearchParams(window.location.search);
    const departmentName = decodeURIComponent(params.get("department"));

    const content = document.getElementById("department-content");
    const cardsSection = document.getElementById("department-cards");

    // Validate and render content
    if (departmentName && departmentData[departmentName]) {
        const data = departmentData[departmentName];
        document.getElementById("department-image").src = data.image;
        document.getElementById("department-title").textContent = departmentName;
        document.getElementById("department-description").innerHTML = data.description;

        // Render the cards in two columns (side by side)
        cardsSection.innerHTML = `
            <div class="department-cards-row">
                ${data.cards.map(card => `
                    <div class="department-card">
                        <h3>${card.title}</h3>
                        <ul class="department-info-list">
                            ${card.content.map(item => `
                                <li class="department-info-item">${item}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        document.getElementById("department-title").textContent = "Department Not Found";
        document.getElementById("department-description").textContent =
            "Please select a valid department from the list page.";
        cardsSection.innerHTML = "";
    }
}



// Initialize the function on load
if (window.location.pathname.endsWith("department.html")) {
    loadDepartmentDetails();
}

});
