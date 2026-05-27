
<template>
  <div class="page">

    
    <header class="header">

      <router-link to="/" class="logo-link">
        <img :src="pic" alt="Logo" class="logo" />
      </router-link>

      <span class="title">Contact Me</span>

      <nav class="nav-links">

        <router-link to="/about" class="link-link">
          About
        </router-link>

        <router-link to="/projects" class="link-link">
          Projects
        </router-link>

        <router-link to="/contact" class="link-link">
          Contact
        </router-link>

      </nav>
    </header>


    
    <section class="hero">

      <div class="hero-content">

        <h1>Let's Connect</h1>

        <p>
          Whether you want to discuss projects, collaborate,
          or simply get in touch, feel free to contact me.
        </p>

      </div>

    </section>


    
    <main class="content">

      <section class="contact-box">

        <div class="contact-header">

          <div>
            <h2>Get In Touch</h2>

            <p>
              I am always interested in new opportunities,
              creative collaborations, and innovative projects.
            </p>
          </div>

        </div>


        
        <div class="contact-grid">

          
          <div class="contact-card">

            <div class="contact-icon">
              ✉
            </div>

            <h3>Email</h3>

            <a href="mailto:yourmail@email.com">
              lucas.bouquain@epitech.eu
            </a>

          </div>


          
          <div class="contact-card">

            <div class="contact-icon">
              in
            </div>

            <h3>LinkedIn</h3>

            <a
              href="www.linkedin.com/in/lucas-bouquain-440ab6411"
              target="_blank"
            >
              linkedin.com/in/myprofile
            </a>

          </div>


          
          <div class="contact-card">

            <div class="contact-icon">
              ⌘
            </div>

            <h3>GitHub</h3>

            <a
              href="https://github.com/LB533"
              target="_blank"
            >
              https://github.com/LB533
            </a>

          </div>


          
          <div class="contact-card">

            <div class="contact-icon">
              ↓
            </div>

            <h3>Resume</h3>

            <a :href="resume" download>
              Download CV
            </a>

          </div>

        </div>

      </section>

    </main>

  </div>
</template>


<script>
import '../style.css'

import pic from '../assets/Picture_Portfolio.png'
import resume from '../assets/Resume.pdf'


export default {
  name: 'Contact',

  data() {
    return {
      pic,
      resume
    }
  }
}
</script>


<style scoped>

.page {
  min-height: 100vh;

  background:
    linear-gradient(135deg, #0A1028, #2A0A3D);

  display: flex;
  flex-direction: column;

  color: white;

  overflow-x: hidden;
  position: relative;

  width: 100%;
}

.page::before {
  content: "";
  position: fixed;
  inset: 0;

  background:
    radial-gradient(circle at top left,
    rgba(0,240,255,0.12),
    transparent 30%),

    radial-gradient(circle at bottom right,
    rgba(255,222,33,0.10),
    transparent 30%);

  pointer-events: none;
}

* {
  box-sizing: border-box;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 16px 32px;

  width: 100%;

  background: rgba(10,16,40,0.85);

  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.title {
  font-family: "Orbitron";
  font-size: 1.4rem;

  color: #FFDE21;
}

.nav-links {
  margin-left: auto;

  display: flex;
  gap: 28px;

  flex-wrap: wrap;
}

.link-link {
  color: white;
  text-decoration: none;

  font-family: "Rajdhani";
  font-size: 1.2rem;
  font-weight: 600;

  position: relative;

  transition: all 0.3s ease;
}

.link-link:hover {
  color: #FFDE21;
}

.link-link::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -4px;

  width: 0%;
  height: 2px;

  background: #FFDE21;

  transition: width 0.3s ease;
}

.link-link:hover::after {
  width: 100%;
}

.logo {
  width: 80px;
  height: 80px;

  object-fit: cover;
  border-radius: 12px;

  transition: transform 0.3s ease;

  max-width: 100%;
}

.logo:hover {
  transform: rotate(5deg) scale(1.05);
}

.logo-link {
  display: flex;
  align-items: center;
}

.hero {
  padding: 80px 24px 40px;

  text-align: center;

  width: 100%;
}

.hero-content {
  max-width: 900px;
  margin: auto;

  width: 100%;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 4.5rem);

  margin-bottom: 20px;

  font-family: "Orbitron";

  color: #FFDE21;

  word-break: break-word;
}

.hero p {
  font-family: "Rajdhani";
  font-size: clamp(1rem, 3vw, 1.3rem);

  line-height: 1.8;

  color: #E6E8F0;
}

.content {
  width: 100%;
  max-width: 1200px;

  margin: auto;

  padding: 24px;

  overflow-x: hidden;
}

.contact-box {
  background: rgba(255,255,255,0.08);

  border-radius: 20px;

  padding: 32px;

  border-left: 6px solid #FFDE21;

  backdrop-filter: blur(10px);

  box-shadow: 0 12px 35px rgba(0,0,0,0.25);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  width: 100%;
}

.contact-box:hover {
  transform: translateY(-5px);

  border-left-color: #00F0FF;

  box-shadow: 0 16px 40px rgba(0,0,0,0.35);
}

.contact-header {
  margin-bottom: 32px;
}

.contact-header h2 {
  font-family: "Orbitron";
  font-size: 2rem;

  color: #FFDE21;

  margin-bottom: 14px;

  word-break: break-word;
}

.contact-header p {
  font-family: "Rajdhani";
  font-size: 1.15rem;

  line-height: 1.8;

  color: #F5F7FF;
}

.contact-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 24px;

  width: 100%;
}

.contact-card {
  background: rgba(255,255,255,0.05);

  border-radius: 16px;

  padding: 28px;

  text-align: center;

  transition:
    transform 0.3s ease,
    background 0.3s ease;

  width: 100%;

  overflow: hidden;
}

.contact-card:hover {
  transform: translateY(-6px);

  background: rgba(255,255,255,0.10);
}

.contact-icon {
  width: 70px;
  height: 70px;

  margin: auto auto 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(0,240,255,0.12);

  color: #00F0FF;

  font-size: 2rem;
  font-weight: bold;

  flex-shrink: 0;
}

.contact-card h3 {
  font-family: "Orbitron";

  margin-bottom: 14px;

  color: #FFDE21;

  word-break: break-word;
}

.contact-card a,
.contact-card span {
  font-family: "Rajdhani";

  font-size: 1.1rem;

  color: white;

  text-decoration: none;

  transition: color 0.3s ease;

  word-break: break-word;

  overflow-wrap: break-word;
}

.contact-card a:hover {
  color: #00F0FF;
}

@media (max-width: 768px) {

  .header {
    flex-direction: column;
    align-items: flex-start;

    gap: 18px;

    padding: 16px 20px;
  }

  .nav-links {
    margin-left: 0;

    width: 100%;

    gap: 18px;
  }

  .hero {
    padding: 60px 20px 30px;
  }

  .content {
    padding: 20px;
  }

  .contact-box {
    padding: 22px;
  }

  .contact-header h2 {
    font-size: 1.6rem;
  }

  .contact-header p {
    font-size: 1rem;
  }

  .logo {
    width: 65px;
    height: 65px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 22px;
  }
}

@media (max-width: 480px) {

  .header {
    padding: 14px 16px;
  }

  .hero {
    padding: 50px 16px 24px;
  }

  .content {
    padding: 16px;
  }

  .contact-box {
    padding: 18px;
  }

  .contact-card {
    padding: 18px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;

    font-size: 1.6rem;
  }

  .link-link {
    font-size: 1rem;
  }

  .contact-card a,
  .contact-card span {
    font-size: 1rem;
  }
}

</style>