import { doctors } from './doctors.js';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("doctorCards");

    // Generate doctor cards
    doctors.forEach(doc => {
        const card = document.createElement("div");
        card.className = "doc1";
        console.log(doc);
        if(doc.specialization === "dentist") {
        card.innerHTML = `
            <div class="docinfo">
                <div class="docimg">
                    <img src="${doc.image}" alt="Doctor Image">
                </div>
                <div class="docdetails">
                    <h2>${doc.name}</h2>
                    <p>Specialization: ${doc.specialization}</p>
                    <p>Experience: ${doc.experience}</p>
                    <p>Rating: ${doc.rating}</p>
                    <button class="book-btn">Book Appointment</button>
                </div>
            </div>
            <div class="slot">
                <button>Book Clinic Visit</button>
                <div class="aviable">
                    <p>Available Slots:</p>
                    <ul>
                        ${doc.slots.map(slot => `<li>${slot}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        container.appendChild(card);
        }
    });

    // Back button
    const header = document.querySelector(".head");
    if (header) {
        header.addEventListener("click", () => {
            window.location.href = '/';
        });
    } else {
        console.warn("No .head element found");
    }
});
