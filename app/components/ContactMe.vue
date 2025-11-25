<template>
  <section class="contact-section">
    <h2 class="section-title">
      <span class="title-bracket">[</span> Let's Connect
      <span class="title-bracket">]</span>
    </h2>
    <p class="contact-intro">
      Have a project in mind or just want to chat about tech? Drop me a message
      and let's build something amazing together!
    </p>

    <!-- Social Links -->
    <div class="social-links">
      <a
        href="https://github.com/IwuchukwuDivine"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="GitHub"
      >
        <lucide-github :size="20" />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/divine-iwuchukwu-155089195"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="LinkedIn"
      >
        <lucide-linkedin :size="20" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://twitter.com/_DeeVyn"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        title="Twitter"
      >
        <lucide-twitter :size="20" />
        <span>Twitter</span>
      </a>
      <a
        href="mailto:ekeneifunanya@gmail.com"
        class="social-link"
        title="Email"
      >
        <lucide-mail :size="20" />
        <span>Email</span>
      </a>
    </div>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label font-micro5-regular">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-input"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label font-micro5-regular">Subject</label>
        <input
          v-model="form.subject"
          type="text"
          class="form-input"
          placeholder="What's this about?"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-label font-micro5-regular">Message</label>
        <textarea
          v-model="form.message"
          class="form-textarea"
          placeholder="Tell me about your project or just say hi..."
          rows="6"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button font-micro5-regular">
        <span>Send Message</span>
        <span class="button-arrow">→</span>
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  email: "",
  subject: "Hello from your website",
  message: "I'm interested in your services. Please get back to me.",
});
const handleSubmit = () => {
  window.location.href = `mailto:ekeneifunanya@gmail.com?subject=${form.value.subject}&body=${form.value.message}`;
  form.value = { email: "", subject: "", message: "" };
};
</script>
<style scoped>
/* Contact Section */
.contact-section {
  background: var(--color-background-color);
  max-width: 800px;
  margin: 0 auto;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-color);
  color: var(--color-text-color);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.social-link:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.4);
}

.contact-intro {
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: var(--color-primary-color);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-input,
.form-textarea {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--color-text-color);
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-color);
  box-shadow: 0 0 15px rgba(var(--color-primary-color-rgb), 0.3);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-button:hover {
  background: transparent;
  color: var(--color-primary-color);
  box-shadow: 0 0 30px rgba(var(--color-primary-color-rgb), 0.5);
  transform: translateY(-2px);
}

.button-arrow {
  transition: transform 0.3s ease;
}

.submit-button:hover .button-arrow {
  transform: translateX(5px);
}
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .social-links {
    gap: 1rem;
  }

  .social-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
