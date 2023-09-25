// Sample data for events and gallery images
const eventsData = [
  { name: "Stargazing Night", date: "October 15, 2023" },
  { name: "Mars Exploration Talk", date: "November 5, 2023" },
  // Add more events here
];

const galleryImages = [
  "space.png",
  "galaxy.png",
  "space2.png",
  // Add more images here
];

// Function to dynamically generate event cards
function generateEventCards() {
  const eventCards = document.getElementById("event-cards");
  eventsData.forEach(event => {
      const card = document.createElement("div");
      card.classList.add("event-card");
      card.innerHTML = `
          <h3>${event.name}</h3>
          <p>Date: ${event.date}</p>
      `;
      eventCards.appendChild(card);
  });
}

// Call functions to generate event cards
generateEventCards();

// Function to dynamically generate image grid
function generateImageGrid() {
  const imageGrid = document.getElementById("image-grid");
  galleryImages.forEach((image, index) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("image-item");
      gridItem.innerHTML = `
          <img src="${image}" alt="Celestial images ${index + 1}">
          <div class="image-caption">Celestial images ${index + 1}</div>
      `;
      imageGrid.appendChild(gridItem);
  });
}

// Call the function to generate the image grid
generateImageGrid();

// JavaScript to toggle the mobile navigation menu when the mobile menu button is clicked
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

 

// Function to display a link preview
function displayLinkPreview(link) {
  const linkPreview = document.getElementById('link-preview');

  // Create an `<iframe>` to embed the linked webpage
  const iframe = document.createElement('iframe');
  iframe.src = link;
  iframe.width = '100%';
  iframe.height = '300'; // Adjust the height as needed

  // Append the `<iframe>` to the link preview container
  linkPreview.innerHTML = '';
  linkPreview.appendChild(iframe);
}

// Example event listener for when a link is shared
const chatInput = document.getElementById('chat-input'); // Assuming you have an input field for chat messages
chatInput.addEventListener('input', (event) => {
    const message = event.target.value;
    const links = message.match(/https?:\/\/[^\s]+/g); // Find links in the message

    if (links) {
        // Display the link preview for the first detected link
        displayLinkPreview(links[0]);
    }
});
