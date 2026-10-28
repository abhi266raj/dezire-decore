/**
 * Dezire Decore - Decoration & Event Planner
 * Verified Client Logic & Seamless UX
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle & Body Scroll Lock
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMobileNav() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  }

  function toggleMobileNav() {
    if (!navMenu || !mobileToggle) return;
    const willOpen = !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', willOpen);
    mobileToggle.classList.toggle('active', willOpen);
    document.body.classList.toggle('nav-open', willOpen);
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', toggleMobileNav);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  // 2. Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Scrollspy Navigation Highlighting
  const sections = document.querySelectorAll('section[id], header[id="hero"]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || (id === 'hero' && (href === '#hero' || href === 'index.html#hero'))) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // 4. Custom Quote Request Formulator (Zero made-up pricing)
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
    if (venueSelect && venueText) venueText.textContent = venueSelect.value;

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

  // 5. Portfolio Filter Tabs (Instant, Zero Race Condition)
  const filterBtns = document.querySelectorAll('.tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        const match = (filter === 'all' || itemCat === filter);
        if (match) {
          item.classList.remove('is-hidden');
          item.style.display = '';
        } else {
          item.classList.add('is-hidden');
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Fast Touch-Enabled Lightbox Modal Logic
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxSource = document.getElementById('lightboxSource');
  const lightboxSourceLink = document.getElementById('lightboxSourceLink');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  // Create or get counter element
  let lightboxCounter = document.getElementById('lightboxCounter');
  if (!lightboxCounter && lightboxModal) {
    lightboxCounter = document.createElement('span');
    lightboxCounter.id = 'lightboxCounter';
    lightboxCounter.className = 'lightbox-counter';
    const imgBox = lightboxModal.querySelector('.lightbox-image-box');
    if (imgBox) imgBox.appendChild(lightboxCounter);
  }

  let currentGalleryIndex = 0;
  const visibleGalleryItems = () => Array.from(document.querySelectorAll('.gallery-item')).filter(el => !el.classList.contains('is-hidden') && el.style.display !== 'none');

  const GOOGLE_MAPS_LISTING = 'https://www.google.com/maps/place/Dezire+Decore+-+Decoration+%26+Event+Planner/@28.6676137,77.4800782,17z/data=!4m8!3m7!1s0x390cf3f0faf988bb:0xb8de77d788648f0a!8m2!3d28.6676137!4d77.4800782!9m1!1b1!16s%2Fg%2F11ydsvkggp';

  function openLightbox(index) {
    const items = visibleGalleryItems();
    if (!items.length || index < 0 || index >= items.length) return;
    currentGalleryIndex = index;

    const item = items[index];
    const fullImg = item.getAttribute('data-full') || item.querySelector('img')?.src;
    const title = item.getAttribute('data-title') || item.querySelector('h4')?.textContent || 'Event Decor Setup';
    const desc = item.getAttribute('data-desc') || item.querySelector('p')?.textContent || '';
    const category = item.getAttribute('data-category-name') || 'Event Decor';
    const source = item.getAttribute('data-source') || 'Verified Google Maps & Facebook';
    const sourceUrl = item.getAttribute('data-source-url');

    if (lightboxImg) {
      lightboxImg.style.opacity = '0.3';
      lightboxImg.src = fullImg;
      lightboxImg.onload = () => { lightboxImg.style.opacity = '1'; };
    }
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;
    if (lightboxCategory) lightboxCategory.textContent = category;
    if (lightboxSource) lightboxSource.textContent = `Verified Source: ${source}`;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} of ${items.length}`;

    if (lightboxSourceLink) {
      lightboxSourceLink.hidden = false;
      if (sourceUrl && sourceUrl.includes('facebook.com')) {
        lightboxSourceLink.href = sourceUrl;
        lightboxSourceLink.innerHTML = '<i class="fa-brands fa-facebook"></i> Watch Video Reel on Facebook';
      } else {
        lightboxSourceLink.href = sourceUrl || GOOGLE_MAPS_LISTING;
        lightboxSourceLink.innerHTML = '<i class="fa-brands fa-google"></i> View on Google Maps Profile';
      }
    }

    if (lightboxWaBtn) {
      const waMsg = `Hi Dezire Decore! I saw "${title}" in your gallery (${category}) and would like to get availability and quotation for my event.`;
      lightboxWaBtn.href = `https://wa.me/918279731933?text=${encodeURIComponent(waMsg)}`;
    }

    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.classList.add('nav-open');
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const items = visibleGalleryItems();
      const idx = items.indexOf(item);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  function navigateLightbox(step) {
    const items = visibleGalleryItems();
    if (!items.length) return;
    currentGalleryIndex = (currentGalleryIndex + step + items.length) % items.length;
    openLightbox(currentGalleryIndex);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Touch Swipe Navigation for Lightbox Modal
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) {
          navigateLightbox(1); // Swipe left -> Next
        } else {
          navigateLightbox(-1); // Swipe right -> Previous
        }
      }
    }, { passive: true });
  }

  // 7. Booking Inquiry Form Handling with Positive User Feedback
  const bookingForm = document.getElementById('bookingForm');
  const eventDateInput = document.getElementById('eventDate');

  if (eventDateInput) {
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
  }

  if (bookingForm) {
    let feedbackBanner = bookingForm.querySelector('.form-feedback');
    if (!feedbackBanner) {
      feedbackBanner = document.createElement('div');
      feedbackBanner.className = 'form-feedback success';
      bookingForm.insertBefore(feedbackBanner, bookingForm.querySelector('button[type="submit"]'));
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName')?.value.trim() || '';
      const phone = document.getElementById('clientPhone')?.value.trim() || '';
      const date = document.getElementById('eventDate')?.value || '';
      const category = document.getElementById('eventCategory')?.value || 'Event Decoration';
      const location = document.getElementById('eventLocation')?.value.trim() || '';
      const notes = document.getElementById('customNotes')?.value.trim() || '';

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

      if (feedbackBanner) {
        feedbackBanner.innerHTML = `<i class="fa-solid fa-circle-check"></i> Redirecting to WhatsApp... If it doesn't open automatically, <a href="${waUrl}" target="_blank" rel="noopener" class="text-gold" style="text-decoration: underline; font-weight: bold;">click here to chat</a>.`;
        feedbackBanner.style.display = 'flex';
      }

      const opened = window.open(waUrl, '_blank');
      if (!opened) {
        window.location.href = waUrl;
      }

      setTimeout(() => {
        bookingForm.reset();
        if (eventDateInput) {
          const today = new Date().toISOString().split('T')[0];
          eventDateInput.setAttribute('min', today);
        }
      }, 1000);
    });
  }

  // 8. Dynamic Year in Footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize inquiry summary
  updateInquirySummary();
});
