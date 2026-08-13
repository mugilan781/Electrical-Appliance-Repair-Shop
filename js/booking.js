/* ============================================================
   ELECTRICAL APPLIANCE REPAIR SHOP — BOOKING FORM JS
   Multi-step form | Validation | Success Animation
   ============================================================ */

'use strict';

class BookingForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;

    this.steps = Array.from(this.form.querySelectorAll('.booking-step'));
    this.indicators = Array.from(this.form.querySelectorAll('.step-indicator'));
    this.currentStep = 0;
    this.totalSteps = this.steps.length;

    this.nextBtns = this.form.querySelectorAll('.booking-next');
    this.prevBtns = this.form.querySelectorAll('.booking-prev');
    this.submitBtn = this.form.querySelector('.booking-submit');

    this.init();
  }

  init() {
    this.showStep(0);

    this.nextBtns.forEach(btn => {
      btn.addEventListener('click', () => this.nextStep());
    });

    this.prevBtns.forEach(btn => {
      btn.addEventListener('click', () => this.prevStep());
    });

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', (e) => this.handleSubmit(e));
    }

    // Real-time validation
    this.form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  }

  showStep(idx) {
    this.steps.forEach((step, i) => {
      step.style.display = i === idx ? 'block' : 'none';
      step.style.animation = i === idx ? 'fadeInRight 0.4s ease both' : '';
    });

    this.indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === idx);
      indicator.classList.toggle('completed', i < idx);
    });

    // Show/hide prev
    const prevBtn = this.form.querySelector('.booking-prev');
    if (prevBtn) prevBtn.style.display = idx === 0 ? 'none' : 'flex';

    // Next vs submit
    const nextBtn = this.form.querySelector('.booking-next');
    const submitBtn = this.form.querySelector('.booking-submit');
    if (nextBtn) nextBtn.style.display = idx === this.totalSteps - 1 ? 'none' : 'flex';
    if (submitBtn) submitBtn.style.display = idx === this.totalSteps - 1 ? 'flex' : 'none';

    this.updateProgress();
  }

  nextStep() {
    if (!this.validateStep(this.currentStep)) return;
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
      this.showStep(this.currentStep);
      this.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  }

  validateStep(stepIdx) {
    const step = this.steps[stepIdx];
    if (!step) return true;

    const fields = step.querySelectorAll('.form-control[required]');
    let valid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) valid = false;
    });

    return valid;
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMsg = '';

    // Required
    if (field.required && !value) {
      isValid = false;
      errorMsg = 'This field is required.';
    }

    // Email
    if (isValid && type === 'email' && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        isValid = false;
        errorMsg = 'Please enter a valid email address.';
      }
    }

    // Phone
    if (isValid && type === 'tel' && value) {
      const phonePattern = /^[\d\s\-+()]{7,15}$/;
      if (!phonePattern.test(value)) {
        isValid = false;
        errorMsg = 'Please enter a valid phone number.';
      }
    }

    // Min length
    const minLen = field.getAttribute('minlength');
    if (isValid && minLen && value.length < parseInt(minLen)) {
      isValid = false;
      errorMsg = `Minimum ${minLen} characters required.`;
    }

    this.setFieldState(field, isValid, errorMsg);
    return isValid;
  }

  setFieldState(field, isValid, errorMsg = '') {
    field.classList.toggle('error', !isValid);
    field.classList.toggle('success', isValid && field.value.trim() !== '');

    let errorEl = field.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = errorMsg;
    errorEl.style.display = !isValid ? 'block' : 'none';
  }

  updateProgress() {
    const progressBar = this.form.querySelector('.booking-progress-fill');
    if (progressBar) {
      const pct = ((this.currentStep) / (this.totalSteps - 1)) * 100;
      progressBar.style.width = pct + '%';
    }

    const stepText = this.form.querySelector('.booking-step-count');
    if (stepText) {
      stepText.textContent = `Step ${this.currentStep + 1} of ${this.totalSteps}`;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateStep(this.currentStep)) return;

    // Collect all form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    // Simulate submission
    const submitBtn = this.submitBtn;
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span class="spinner" style="width:20px;height:20px;border-width:2px"></span> Processing...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      this.showSuccess();
    }, 1800);
  }

  showSuccess() {
    const successHTML = `
      <div class="booking-success" style="text-align:center;padding:3rem 2rem">
        <div style="
          width:80px;height:80px;background:rgba(16,185,129,0.12);
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          margin:0 auto 1.5rem;border:2px solid #10B981
        ">
          <svg width="40" height="40" fill="none" stroke="#10B981" stroke-width="2.5" viewBox="0 0 24 24">
            <polyline class="check-icon" points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 style="font-family:'Sora',sans-serif;font-size:1.6rem;font-weight:800;color:var(--text-primary);margin-bottom:0.75rem">
          Booking Confirmed!
        </h3>
        <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:2rem;max-width:380px;margin-inline:auto">
          Thank you! Your service request has been received. Our team will contact you within <strong>2 hours</strong> to confirm your appointment.
        </p>
        <div style="background:var(--bg-secondary);border-radius:1rem;padding:1.25rem;margin-bottom:2rem;text-align:left;font-size:0.9rem">
          <div style="display:flex;align-items:center;gap:0.5rem;color:var(--color-blue);font-weight:600;margin-bottom:0.5rem">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            What happens next?
          </div>
          <ul style="color:var(--text-secondary);list-style:none;padding:0;margin:0">
            <li style="padding:0.3rem 0;display:flex;gap:0.5rem"><span>📞</span> We'll call you to confirm the appointment</li>
            <li style="padding:0.3rem 0;display:flex;gap:0.5rem"><span>🔧</span> Our technician will visit at the scheduled time</li>
            <li style="padding:0.3rem 0;display:flex;gap:0.5rem"><span>✅</span> Repair completed with 30-day warranty</li>
          </ul>
        </div>
        <a href="index.html" class="btn btn-primary">
          <svg width="18" height="18" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Back to Home
        </a>
      </div>
    `;

    this.form.innerHTML = successHTML;
    this.form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ── SIMPLE CONTACT FORM ───────────────────────────────────
class ContactForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = this.form.querySelectorAll('.form-control[required]');
      let allValid = true;

      fields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          allValid = false;
        } else {
          field.classList.remove('error');
          field.classList.add('success');
        }
      });

      if (!allValid) {
        window.AppHelpers?.showToast('Please fill in all required fields.', 'error');
        return;
      }

      const btn = this.form.querySelector('[type="submit"]');
      if (btn) {
        btn.innerHTML = `<span class="spinner" style="width:18px;height:18px;border-width:2px"></span> Sending...`;
        btn.disabled = true;
      }

      setTimeout(() => {
        window.AppHelpers?.showToast('Message sent successfully! We\'ll reply within 24 hours.');
        this.form.reset();
        this.form.querySelectorAll('.form-control').forEach(f => {
          f.classList.remove('success', 'error');
        });
        if (btn) {
          btn.innerHTML = 'Send Message';
          btn.disabled = false;
        }
      }, 1500);
    });

    // Real-time validation
    this.form.querySelectorAll('.form-control').forEach(field => {
      field.addEventListener('blur', () => {
        if (field.required) {
          field.classList.toggle('error', !field.value.trim());
          field.classList.toggle('success', !!field.value.trim());
        }
      });
    });
  }
}

// ── NEWSLETTER FORM ───────────────────────────────────────
class NewsletterForm {
  constructor(selector) {
    document.querySelectorAll(selector).forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value.trim()) {
          window.AppHelpers?.showToast('Please enter your email address.', 'error');
          return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
          window.AppHelpers?.showToast('Please enter a valid email address.', 'error');
          return;
        }

        const btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.textContent = 'Subscribing...'; btn.disabled = true; }

        setTimeout(() => {
          window.AppHelpers?.showToast('Subscribed successfully! Welcome aboard! 🎉');
          input.value = '';
          if (btn) { btn.textContent = 'Subscribe'; btn.disabled = false; }
        }, 1200);
      });
    });
  }
}

// ── INITIALIZE ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new BookingForm('bookingForm');
  new ContactForm('contactForm');
  new NewsletterForm('.newsletter-form');
});

