
function ShowAll() {
    reviews.forEach(r => r.hidden = false);
    activeFilter = "all";
    renderReviews();
    if (selectedIndex !== null) renderPanel(selectedIndex);
}

function Unread() {
    reviews.forEach(r => r.hidden = r.status !== "unread");
    activeFilter = "unread";
    renderReviews();
    selectedIndex = null;
    document.getElementById("review-panel").innerHTML = "";
}

function UnReplied() {
    reviews.forEach(r => r.hidden = r.status !== "read");
    activeFilter = "read";
    renderReviews();
    selectedIndex = null;
    document.getElementById("review-panel").innerHTML = "";
}




const reviews = [
    {
        name: "Marvin McKinney",
        image: "./images/pic1.jpg",
        stars: 3,
        time: "3:20 PM",
        comment: "The team is talented, and their product was good, but communication could be better. I had to follow up multiple times to get updates. If they improve responsiveness, they'd be perfect.",
        hidden: false,
        status: "unread",
        reply: "Really appreciate you taking the time to share this. I’m so glad to hear you liked the product and our team’s work — that truly means a lot. At the same time, I’m genuinely sorry you had to follow up more than once to get updates. That’s on us, and we’re working on being more proactive with communication. Thanks again for the thoughtful feedback — it helps us get better, and we hope to make your next experience a smoother one.",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]

    },
    {
        name: "Alice Johnson",
        image: "./images/pic2.jpg",
        stars: 4.5,
        time: "11:45 AM",
        comment: "Quick support and consistent communication. Great job!",
        hidden: false,
        status: "read",
        reply: "Thank you for the feedback...",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]

    },
    {
        name: "David Anderson",
        image: "./images/pic3.jpg",
        stars: 2,
        time: "Yesterday",
        comment: "They need improvement in response time and support...",
        hidden: false,
        status: "read",
        reply: "Thank you for the feedback...",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]

    },
    {
        name: "Linda Martinez",
        image: "./images/pic4.jpg",
        stars: 3,
        time: "3:20 PM",
        comment: "The team is talented, and their product was good...",
        hidden: false,
        status: "unread",
        reply: "Thank you for the feedback...",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]

    },
    {
        name: "James Lee",
        image: "./images/pic1.jpg",
        stars: 3,
        time: "3:20 PM",
        comment: "The team is talented, and their product was good...",
        hidden: false,
        status: "read",
        reply: "Thank you for the feedback...",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]

    },
    {
        name: "Sophia Roberts",
        image: "./images/pic3.jpg",
        stars: 5,
        time: "9:10 AM",
        comment: "Absolutely wonderful experience! Highly recommended.",
        hidden: false,
        status: "read",
        reply: "Thank you for your kind words! We’re glad you had a great experience.",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]
    },
    {
        name: "Liam Turner",
        image: "./images/pic4.jpg",
        stars: 2.5,
        time: "Yesterday",
        comment: "Service was slow and the response time could be improved.",
        hidden: false,
        status: "unread",
        reply: "We appreciate your feedback and will work on improving our service.",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]
    },
    {
        name: "Emily Nguyen",
        image: "./images/pic1.jpg",
        stars: 3.5,
        time: "Monday",
        comment: "The interface was user-friendly but had occasional glitches.",
        hidden: false,
        status: "read",
        reply: "Thanks for the feedback! We are already working on bug fixes.",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]
    },
    {
        name: "Noah Bennett",
        image: "./images/pic2.jpg",
        stars: 1,
        time: "Last Week",
        comment: "Very disappointed with the product. It didn’t meet expectations.",
        hidden: false,
        status: "unread",
        reply: "We’re really sorry to hear this. Please reach out so we can make it right.",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]
    },
    {
        name: "Grace Foster",
        image: "./images/pic3.jpg",
        stars: 4,
        time: "2 Days Ago",
        comment: "Good value for the price. Would recommend to others.",
        hidden: false,
        status: "read",
        reply: "Thank you so much for recommending us!",
        images: [
            "./images/pic1.jpg",
            "./images/pic2.jpg",
            "./images/pic3.jpg",
            "./images/pic4.jpg"
        ]
    }

];


let selectedIndex = null;
let activeFilter = "all";

function renderReviews() {
    const listContainer = document.querySelector(".review-list");
    listContainer.innerHTML = "";

    reviews.forEach((review, index) => {
        if (!review.hidden) {
            const div = document.createElement("div");
            div.className = `review-list-item mb-3 p-2 border rounded ${index === selectedIndex ? "active" : ""}`;
            div.onclick = () => {
                selectedIndex = index;
                renderReviews();
                renderPanel(index);
            };

            div.innerHTML = `
        <div class="d-flex">
          <img src="${review.image}" class="rounded-circle me-2" width="40" height="40">
          <div>
            <div class="fw-bold">${review.name}</div>
            <div class="star-rating text-warning">${generateStars(review.stars)}</div>
            <small class="text-muted">${review.time}</small>
          </div>
        </div>
        <div class="text-truncate small mt-1">${review.comment}</div>
      `;
            listContainer.appendChild(div);
        }
    });

    // Update button counts
    document.querySelector(".btn-outline-primary").textContent = `All (${reviews.length})`;

    // Highlight selected filter
    document.querySelectorAll(".btn-group .btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.btn[data-filter="${activeFilter}"]`)?.classList.add("active");
}



function generateStars(starCount) {
    const fullStars = Math.floor(starCount);
    const halfStar = starCount % 1 >= 0.5;
    let starHTML = "";

    for (let i = 0; i < fullStars; i++) {
        starHTML += '<i class="bi bi-star-fill"></i>';
    }

    if (halfStar) {
        starHTML += '<i class="bi bi-star-half"></i>';
    }

    while (starHTML.match(/<i/g).length < 5) {
        starHTML += '<i class="bi bi-star"></i>';
    }

    return starHTML;
}

function renderPanel(index) {
    const r = reviews[index];
    const panel = document.getElementById("review-panel");

    const imageTags = r.images.map(img => `<img src="${img}" class="me-2">`).join("");

    panel.innerHTML = `
    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <img src="${r.image}" class="rounded-circle me-2" width="40" height="40">
        <div>
          <strong>${r.name}</strong> <i class="bi bi-flag text-danger"></i><br>
          <small class="text-muted">Posted on Jun 24, 2025 • ${r.time}</small>
        </div>
      </div>
      <div class="star-rating mb-2">${generateStars(r.stars)} <span class="ms-2">${r.stars.toFixed(1)}</span></div>
      <p id="review-text">${r.comment}</p>

      <div class="review-images d-flex mb-2">${imageTags}</div>

      <div class="d-flex mt-2">
        <i class="bi bi-pencil-square me-3 text-primary" title="Edit" style="cursor: pointer;" onclick="editReview(${index}, 'comment')"></i>
        <i class="bi bi-trash me-3 text-danger" title="Delete" style="cursor: pointer;"></i>
        <i class="bi bi-file-earmark-text me-3 text-secondary" style="cursor: pointer;" title="Read Details"></i>
      </div>
    </div>

    <hr style="margin: 1px 0px;">

    <div class="mb-4">
      <div class="d-flex align-items-center mb-2">
        <img src="./images/pic2.jpg" class="rounded-circle me-2" width="40" height="40">
        <div>
          <strong>You</strong><br>
          <small class="text-muted">Replied by AI on Jun 24, 2025 • ${r.time}</small>
        </div>
      </div>
      <p id="reply-text">${r.reply}</p>

      <!-- Reply edit buttons -->
      <div class="d-flex mt-2">
        <i class="bi bi-pencil-square me-3 text-primary" style="cursor: pointer;" title="Edit Reply" onclick="editReview(${index}, 'reply')"></i>
      </div>
    </div>
  `;
}


function editReview(index, type) {
    const r = reviews[index];
    const panel = document.getElementById("review-panel");

    if (type === 'comment') {
        const commentText = panel.querySelector("#review-text");
        commentText.outerHTML = `
        <textarea id="edit-text" class="form-control mb-2">${r.comment}</textarea>
        <button class="btn btn-sm btn-success mb-2" onclick="saveEdit(${index}, 'comment')">Save</button>
        `;
    } else if (type === 'reply') {
        const replyText = panel.querySelector("#reply-text");
        replyText.outerHTML = `
        <textarea id="edit-reply" class="form-control mb-2">${r.reply}</textarea>
        <button class="btn btn-sm btn-success mb-2" onclick="saveEdit(${index}, 'reply')">Save</button>
        `;
    }
}


function saveEdit(index, type) {
    if (type === 'comment') {
        const newText = document.getElementById("edit-text").value;
        reviews[index].comment = newText;
    } else if (type === 'reply') {
        const newReply = document.getElementById("edit-reply").value;
        reviews[index].reply = newReply;
    }

    renderPanel(index);
    renderReviews();
}




document.addEventListener("DOMContentLoaded", () => {
    ShowAll();
});
