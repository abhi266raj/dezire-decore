/**
 * Dezire Decore - Decoration & Event Planner
 * Interactive Client Logic
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

  // 2. Header Scroll Effect & Active Nav Link Highlight
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Interactive Price Estimator
  const occasionChips = document.querySelectorAll('#occasionChips .chip');
  const venueSelect = document.getElementById('venueSelect');
  const addonInputs = document.querySelectorAll('.addon-input');
  
  const occasionText = document.getElementById('selectedOccasionText');
  const occasionPrice = document.getElementById('selectedOccasionPrice');
  const venueRow = document.getElementById('venueRow');
  const venueText = document.getElementById('selectedVenueText');
  const venuePrice = document.getElementById('selectedVenuePrice');
  const addonsRow = document.getElementById('addonsSummaryRow');
  const addonsText = document.getElementById('selectedAddonsText');
  const addonsPrice = document.getElementById('selectedAddonsPrice');
  const totalAmount = document.getElementById('calculatedTotal');
  const bookCalculatedBtn = document.getElementById('bookCalculatedBtn');

  let currentOccasion = {
    name: 'Birthday Party',
    cost: 999
  };

  function updateEstimator() {
    let total = currentOccasion.cost;
    occasionText.textContent = currentOccasion.name;
    occasionPrice.textContent = `₹${currentOccasion.cost.toLocaleString('en-IN')}`;

    // Venue
    const selectedVenueOpt = venueSelect.options[venueSelect.selectedIndex];
    const venueCost = parseInt(selectedVenueOpt.value, 10) || 0;
    const venueLabel = selectedVenueOpt.getAttribute('data-label') || 'Standard Room';

    if (venueCost > 0) {
      venueRow.style.display = 'flex';
      venueText.textContent = venueLabel;
      venuePrice.textContent = `+₹${venueCost.toLocaleString('en-IN')}`;
      total += venueCost;
    } else {
      venueRow.style.display = 'none';
    }

    // Addons
    let addonsTotal = 0;
    const selectedAddonTitles = [];
    addonInputs.forEach(input => {
      if (input.checked) {
        addonsTotal += parseInt(input.value, 10);
        selectedAddonTitles.push(input.getAttribute('data-title'));
      }
    });

    if (addonsTotal > 0) {
      addonsRow.style.display = 'flex';
      addonsText.textContent = selectedAddonTitles.join(', ');
      addonsPrice.textContent = `+₹${addonsTotal.toLocaleString('en-IN')}`;
      total += addonsTotal;
    } else {
      addonsRow.style.display = 'none';
    }

    totalAmount.textContent = total.toLocaleString('en-IN');
  }

  // Event Listeners for Estimator
  occasionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      occasionChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentOccasion.name = chip.getAttribute('data-name');
      currentOccasion.cost = parseInt(chip.getAttribute('data-cost'), 10);
      updateEstimator();
    });
  });

  if (venueSelect) {
    venueSelect.addEventListener('change', updateEstimator);
  }

  addonInputs.forEach(input => {
    input.addEventListener('change', updateEstimator);
  });

  // 1-Click WhatsApp Booking from Estimator
  if (bookCalculatedBtn) {
    bookCalculatedBtn.addEventListener('click', () => {
      const selectedVenueOpt = venueSelect.options[venueSelect.selectedIndex];
      const venueLabel = selectedVenueOpt.getAttribute('data-label') || 'Living Room';
      
      const selectedAddonTitles = [];
      addonInputs.forEach(input => {
        if (input.checked) {
          selectedAddonTitles.push(input.getAttribute('data-title'));
        }
      });

      const total = totalAmount.textContent;

      let msg = `🎉 *Dezire Decore - Custom Booking Request* 🎉\n\n`;
      msg += `📌 *Occasion:* ${currentOccasion.name}\n`;
      msg += `🏠 *Venue Scale:* ${venueLabel}\n`;
      if (selectedAddonTitles.length > 0) {
        msg += `✨ *Add-ons Chosen:* ${selectedAddonTitles.join(', ')}\n`;
      }
      msg += `💰 *Estimated Total:* ₹${total}\n\n`;
      msg += `Hi Dezire Decore team, I'd like to check date availability for this setup in Ghaziabad!`;

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

  // 5. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 6. Booking Inquiry Form Handling -> WhatsApp Dispatch
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
        msg += `📝 *Notes/Theme Request:* ${notes}\n`;
      }
      msg += `\nPlease confirm decorator availability!`;

      const waUrl = `https://wa.me/918279731933?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      bookingForm.reset();
    });
  }

  // 7. Dynamic Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initial estimator calculation
  updateEstimator();
});
