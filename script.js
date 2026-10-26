// Ensure script executes only after HTML document tree finishes rendering completely
document.addEventListener("DOMContentLoaded", () => {

    // =========================================================================
    // FEATURE 1: INTERACTIVE MENU CATEGORY FILTER SWITCHER
    // =========================================================================
    const tabs = document.querySelectorAll(".tab-btn");
    const categories = document.querySelectorAll(".menu-category-group");
  
    if (tabs.length > 0 && categories.length > 0) {
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          // 1. Strip highlighted active states from all selection tab buttons
          tabs.forEach(t => {
            t.classList.remove("active");
            t.setAttribute("aria-expanded", "false");
          });
  
          // 2. Add visual active state highlight status to the clicked option
          tab.classList.add("active");
          tab.setAttribute("aria-expanded", "true");
  
          // 3. Hide all displayed food dish items container groupings
          categories.forEach(category => {
            category.classList.remove("active-category");
            category.setAttribute("aria-hidden", "true");
          });
  
          // 4. Extract data-category identifier key name (dataset is an object, not a function)
          const targetCategory = tab.dataset.category;
          const activeContainer = document.getElementById(targetCategory);
  
          if (activeContainer) {
            activeContainer.classList.add("active-category");
            activeContainer.setAttribute("aria-hidden", "false");
          }
        });
      });
    }
  
    // =========================================================================
    // FEATURE 2: SERVICES CATEGORY DYNAMIC FILTERING ENGINE
    // =========================================================================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceCards = document.querySelectorAll(".service-card");

    if (filterButtons.length > 0 && serviceCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Toggle active highlighting on buttons
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                serviceCards.forEach(card => {
                    const cardCategory = card.getAttribute("data-category");
                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.classList.remove("hide");
                    } else {
                        card.classList.add("hide");
                    }
                });
            });
        });
    }

    // =========================================================================
    // FEATURE 3: IMAGE GALLERY LIGHTBOX VIEWER ELEMENT
    // =========================================================================
    const galleryImages = document.querySelectorAll(".card-image, .about-image");
    
    if (galleryImages.length > 0) {
        // Dynamically append the modal runtime framework to the document body markup
        const lightboxContainer = document.createElement("div");
        lightboxContainer.id = "lightboxModal";
        lightboxContainer.style.cssText = `
            position: fixed; z-index: 9999; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); display: none; align-items: center; justify-content: center;
            cursor: zoom-out; opacity: 0; transition: opacity 0.3s ease;
        `;
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width: 85%; max-height: 85%; border: 3px solid #fff; box-shadow: 0 5px 25px rgba(0,0,0,0.5);";
        
        lightboxContainer.appendChild(lightboxImg);
        document.body.appendChild(lightboxContainer);

        // Map trigger handles across matching asset elements
        galleryImages.forEach(img => {
            img.style.cursor = "zoom-in";
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxContainer.style.display = "flex";
                setTimeout(() => lightboxContainer.style.opacity = "1", 10);
            });
        });

        lightboxContainer.addEventListener("click", () => {
            lightboxContainer.style.opacity = "0";
            setTimeout(() => lightboxContainer.style.display = "none", 300);
        });
    }

    // =========================================================================
    // FEATURE 4: ROBUST FORM FUNCTIONALITY & VALIDATION
    // =========================================================================
    const contactForm = document.getElementById("contactForm");
    const enquiryForm = document.getElementById("enquiryForm");

    // 4.1 Contact Form Submission Logic (General Info & Email Handling)
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const feedbackDisplay = document.getElementById("formFeedback");
            feedbackDisplay.style.display = "none";
            feedbackDisplay.className = "form-feedback-msg";

            const clientName = document.getElementById("fullname").value.trim();
            const messageContent = document.getElementById("message").value.trim();

            if (clientName.length < 3) {
                event.preventDefault();
                displayFeedback("Error: Please provide a full name containing at least 3 characters.", "error-alert");
                return;
            }
            if (messageContent.length < 10) {
                event.preventDefault();
                displayFeedback("Error: Please input a comprehensive message (minimum 10 characters).", "error-alert");
                return;
            }

            // If validations pass, show success alert block before opening email client
            displayFeedback(`Processing message. Thank you ${clientName}, opening email client...`, "success-alert");
        });
    }

    // 4.2 enquiry.html Calculator Dynamic Engine
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const enquiryFeedback = document.getElementById("enquiryFeedback");
            enquiryFeedback.style.display = "none";
            enquiryFeedback.className = "form-feedback-msg";

            const selectedService = document.getElementById("enquiry-service").value;
            const guestNum = parseInt(document.getElementById("enquiry-guests").value) || 0;
            
            // Base Cost Logic Matrix matching Brand Guidelines
            let costPerHead = 0;
            if (selectedService === "intimate") costPerHead = 450;
            if (selectedService === "professional") costPerHead = 350;
            if (selectedService === "wedding") costPerHead = 650;

            const totalEstimate = guestNum * costPerHead;

            // Display dynamic assessment metrics context window directly on user viewports
            enquiryFeedback.style.display = "block";
            enquiryFeedback.classList.add("success-alert");
            enquiryFeedback.innerHTML = `
                <strong>Enquiry Received!</strong><br>
                Estimated Base Rate Structure: R${totalEstimate.toLocaleString()} (R${costPerHead} x ${guestNum} guests).<br>
                Sne will contact you within 24 hours to confirm menu customization options and final date availability.
            `;
            
            enquiryForm.reset();
        });
    }

    // Helper Utility handling screen updates
    function displayFeedback(text, alertClass) {
        const feedbackDisplay = document.getElementById("formFeedback");
        if (feedbackDisplay) {
            feedbackDisplay.style.display = "block";
            feedbackDisplay.classList.add(alertClass);
            feedbackDisplay.innerText = text;
        }
    }
});
  
