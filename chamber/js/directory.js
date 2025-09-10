// Global member data
let memberData = [];

// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Load members from JSON
async function loadMembers() {
  try {
    const response = await fetch("data/members.json"); // relative to HTML file
    memberData = await response.json();
    displayMembers(memberData, "grid");
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Display members in grid or list
function displayMembers(members, view) {
  const container = document.getElementById("members");
  container.innerHTML = "";
  container.className = view;

  members.forEach(member => {
    if (view === "grid") {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    } else { // list view
      const listItem = document.createElement("div");
      listItem.classList.add("member-list");
      listItem.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address} | ${member.phone} | 
           <a href="${member.website}" target="_blank">Website</a>
        </p>
      `;
      container.appendChild(listItem);
    }
  });
}

// Toggle buttons
document.getElementById("gridView").addEventListener("click", () => displayMembers(memberData, "grid"));
document.getElementById("listView").addEventListener("click", () => displayMembers(memberData, "list"));

// Load members
loadMembers();
