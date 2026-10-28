/**
 * Dezire Decore - Decoration & Event Planner
 * Verified Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 2. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Custom Quote Request Formulator (Zero made-up pricing)
  const occasionChips = document.querySelectorAll('#occasionChips .chip');
  const venueSelect = document.getElementById('venueSelect');
  const addonInputs = document.querySelectorAll('.addon-input');
  
  const occasionText = document.getElementById('selectedOccasionText');
  const venueText = document.getElementById('selectedVenueText');
  const addonsRow = document.getElementById('addonsSummaryRow');
  const addonsText = document.getElementById('selectedAddonsText');
  const bookCalculatedBtn = document.getElementById('bookCalculatedBtn');

  let currentOccasionName = 'Birthday Party';

  function updateInquirySummary() {
    if (occasionText) occasionText.textContent = currentOccasionName;

    // Venue
    if (venueSelect && venueText) {
      venueText.textContent = venueSelect.value;
    }

    // Elements
    const selectedAddonTitles = [];
    addonInputs.forEach(input => {
      if (input.checked) {
        selectedAddonTitles.push(input.getAttribute('data-title'));
      }
    });

    if (addonsRow && addonsText) {
      if (selectedAddonTitles.length > 0) {
        addonsRow.style.display = 'flex';
        addonsText.textContent = selectedAddonTitles.join(', ');
      } else {
        addonsRow.style.display = 'none';
      }
    }
  }

  // Event Listeners for Inquiry Summary
  occasionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      occasionChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentOccasionName = chip.getAttribute('data-name');
      updateInquirySummary();
    });
  });

  if (venueSelect) {
    venueSelect.addEventListener('change', updateInquirySummary);
  }

  addonInputs.forEach(input => {
    input.addEventListener('change', updateInquirySummary);
  });

  // 1-Click WhatsApp Quote Request
  if (bookCalculatedBtn) {
    bookCalculatedBtn.addEventListener('click', () => {
      const venueLabel = venueSelect ? venueSelect.value : 'Standard Venue';
      
      const selectedAddonTitles = [];
      addonInputs.forEach(input => {
        if (input.checked) {
          selectedAddonTitles.push(input.getAttribute('data-title'));
        }
      });

      let msg = `✨ *Dezire Decore - Event Quote Request* ✨\n\n`;
      msg += `📌 *Occasion:* ${currentOccasionName}\n`;
      msg += `🏠 *Venue Type:* ${venueLabel}\n`;
      if (selectedAddonTitles.length > 0) {
        msg += `🎈 *Preferred Elements:* ${selectedAddonTitles.join(', ')}\n`;
      }
      msg += `\nHello Dezire Decore! Please share availability and customized pricing for this setup in Ghaziabad.`;

      const waUrl = `https://wa.me/918279731933?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 4. Portfolio Filter Tabs
  const filterBtns = document.querySelectorAll('.tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Booking Inquiry Form Handling -> Direct WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const date = document.getElementById('eventDate').value;
      const category = document.getElementById('eventCategory').value;
      const location = document.getElementById('eventLocation').value.trim();
      const notes = document.getElementById('customNotes').value.trim();

      let msg = `✨ *New Booking Inquiry - Dezire Decore* ✨\n\n`;
      msg += `👤 *Client Name:* ${name}\n`;
      msg += `📞 *Phone Number:* ${phone}\n`;
      msg += `📅 *Event Date:* ${date}\n`;
      msg += `🎈 *Occasion:* ${category}\n`;
      msg += `📍 *Delivery Location:* ${location}\n`;
      if (notes) {
        msg += `📝 *Theme / Request:* ${notes}\n`;
      }
      msg += `\nPlease provide availability and custom quotation!`;

      const waUrl = `https://wa.me/918279731933?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      bookingForm.reset();
    });
  }

  // 6. Dynamic Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize summary
  updateInquirySummary();
});
