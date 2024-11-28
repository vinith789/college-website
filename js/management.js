const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.navbar-content');
const line = document.querySelector('.navbar-line');

// Function to set line position based on the active tab
function setLinePosition(activeTab) {
  line.style.width = activeTab.offsetWidth + 'px';
  line.style.left = activeTab.offsetLeft + 'px';
}

// Set initial line position below the "Home" tab
window.addEventListener('load', () => {
  const activeTab = document.querySelector('.tab_btn.active');
  setLinePosition(activeTab);
});

// Adjust line position on tab click
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    // Move line to the clicked tab
    setLinePosition(e.target);

    // Show the associated content
    all_content.forEach(content => content.classList.remove('active'));
    all_content[index].classList.add('active');
  });
});

// Adjust line position dynamically
function setLinePosition(activeTab) {
  line.style.width = `${activeTab.offsetWidth}px`; // Dynamically set width
  line.style.left = `${activeTab.offsetLeft}px`;  // Position it accurately
}

// Add window resize listener to ensure proper adjustments
window.addEventListener("resize", () => {
  const activeTab = document.querySelector(".tab_btn.active");
  setLinePosition(activeTab); // Recalculate position on resize
});

// Array to store the content data
const contentArray = [
  {
      image: "./Frame 1.png",
      header: "Chairman",
      subheader: "Head of the Organization",
      paragraph: "This is the Chairman's description. Include details and information about the Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Vice Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Vice Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Vice Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Vice Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  },
  {
      image: "./Frame 1.png",
      header: "Vice Chairman",
      subheader: "Supporting Role",
      paragraph: "This is the Vice Chairman's description. Include details and information about the Vice Chairman here."
  }
];

// Function to initialize content and buttons
function initializeContent() {
  const buttonSection = document.querySelector(".management-button-section");

  contentArray.forEach((content, index) => {
      // Create a button for each content
      const button = document.createElement("button");
      button.classList.add("management-content-button"); // Changed class name to match CSS
      button.onclick = () => showContent(index);
      buttonSection.appendChild(button);
  });

  // Load the first content initially
  showContent(0);
}

// Function to display content based on index with animation
function showContent(index) {
  const displayCard = document.getElementById("management-display-card");

  // Add fade-out effect
  displayCard.classList.remove("show");

  // Wait a bit for fade-out to finish, then update content
  setTimeout(() => {
      displayCard.innerHTML = ""; // Clear previous content

      // Get content data by index
      const content = contentArray[index];

      // Create left side (image card)
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");

      const image = document.createElement("img");
      image.src = content.image;
      image.alt = content.header;

      imageCard.appendChild(image);

      // Create right side content area
      const contentArea = document.createElement("div");
      contentArea.classList.add("management-card-content");

      const header = document.createElement("h2");
      header.textContent = content.header;

      const subheader = document.createElement("h4");
      subheader.textContent = content.subheader;

      const paragraph = document.createElement("p");
      paragraph.textContent = content.paragraph;

      contentArea.appendChild(header);
      contentArea.appendChild(subheader);
      contentArea.appendChild(paragraph);

      // Append left and right sides to display card
      displayCard.appendChild(imageCard);
      displayCard.appendChild(contentArea);

      // Fade in effect
      setTimeout(() => {
          displayCard.classList.add("show");
      }, 50);

      // Update button styles
      const buttons = document.querySelectorAll(".management-content-button");
      buttons.forEach((btn, idx) => {
          btn.classList.toggle("active", idx === index); // Highlight the active button
      });
  }, 300); // Time matches CSS fade-out effect
}

// Initialize content on page load
window.onload = initializeContent;
