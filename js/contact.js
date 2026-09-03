/**
 * Contact Form & Notification System
 */

class ToastNotification {
  constructor() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  }

  show(message, type = 'success', duration = 3500) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconSvg = type === 'success' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }
}

const toaster = new ToastNotification();

function setupContactInteractions() {
  // Copy email button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email') || 'anuja.raorane@univie.ac.at';
      try {
        await navigator.clipboard.writeText(email);
        toaster.show('Email copied to clipboard!', 'success');
      } catch (err) {
        // Fallback for older browsers or permission denials
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        toaster.show('Email copied to clipboard!', 'success');
      }
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        toaster.show('Please fill in all required fields.', 'error');
        return;
      }

      // Email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toaster.show('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate sending / open mailto fallback
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Sending...
      `;

      setTimeout(() => {
        // Create mailto link for direct mail app fallback
        const mailtoUrl = `mailto:anuja.raorane@univie.ac.at?subject=${encodeURIComponent(subject || 'Portfolio Contact from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        toaster.show('Thank you! Message queued. Opening mail client...', 'success');
        window.open(mailtoUrl, '_blank');

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 800);
    });
  }
}

document.addEventListener('DOMContentLoaded', setupContactInteractions);
