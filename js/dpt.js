// Redirect to department page with the department name as a URL parameter
function goToDepartment(departmentName) {
  const url = `department.html?department=${encodeURIComponent(departmentName)}`;
  window.location.href = url;
}

// Dynamically generate department cards
function generateDepartmentCards() {
    const departments = [
        {
          name: "Computer Science And Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/computer.png",
        },
        {
          name: "Artificial Intelligence and Data Science",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png",
        },
        {
          name: "Information Technology",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/information.png",
        },
        {
          name: "Electronics and Communication Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/electronics.png",
        },
        {
          name: "Electrical and Electronics Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/electrical.png",
        },
        {
          name: "Mechanical Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/gear.png",
        },
        {
          name: "Civil Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/building.png",
        },
        {
          name: "ME Industrial Safety Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/safety-collection-place.png",
        },
        {
          name: "ME Structural Engineering",
          image: "https://via.placeholder.com/300",
          icon: "https://img.icons8.com/ios-filled/50/000000/engineering.png",
        }, // -- added more dpt content  here
      ];


  const cardContainer = document.getElementById("dpt-card-container");

  departments.forEach(department => {
      const departmentCard = document.createElement("div");
      departmentCard.className = "department-card";
      departmentCard.onclick = () => goToDepartment(department.name);

      departmentCard.innerHTML = `
          <div class="dpt-card" style="--bg-image: url('${department.image}');">
              <img src="${department.icon}" alt="${department.name} Icon" class="dpt-icon">
              <h3>${department.name}</h3>
          </div>
      `;
      cardContainer.appendChild(departmentCard);
  });
}

// Initialize the department cards on page load
document.addEventListener("DOMContentLoaded", generateDepartmentCards);
