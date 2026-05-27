
```vue
<template>
  <div class="page">

    
    <header class="header">

      <router-link to="/" class="logo-link">
        <img :src="pic" alt="Logo" class="logo" />
      </router-link>

      <span class="title">About Me</span>

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

        <h1>Lucas</h1>

        <p class="subtitle">
          Frontend Developer • Game Design Lover
        </p>

        <p class="hero-description">
          Passionate about immersive digital experiences
          and modern web technologies.
        </p>

        <div class="hero-buttons">
          <router-link to="/projects" class="primary-btn">
            View Projects
          </router-link>

          <router-link to="/contact" class="secondary-btn">
            Contact Me
          </router-link>
        </div>
      </div>
    </section>


    
    <main class="content">

      
      <section class="box">
        <h2>Who Am I?</h2>

        <p>
          My name is Lucas, I am 26 years old and currently studying programming.
          I am deeply passionate about entertainment-focused technologies,
          especially video games and user-centered design.
        </p>

        <p>
          I enjoy building creative and interactive digital experiences while
          continuously improving my technical skills. Through this portfolio,
          I hope to showcase both my projects and my enthusiasm for development.
        </p>
      </section>


      <!-- SKILLS -->
      <section class="box">
        <h2>My Skills</h2>

        <div class="skills-row">

          <div class="skill-card">
            <img :src="ijs" alt="JavaScript" class="image" />
            <span>JavaScript</span>
          </div>

          <div class="skill-card">
            <img :src="ipy" alt="Python" class="image" />
            <span>Python</span>
          </div>

          <div class="skill-card">
            <img :src="ire" alt="React" class="image" />
            <span>React</span>
          </div>

          <div class="skill-card">
            <img :src="isql" alt="SQL" class="image" />
            <span>SQL</span>
          </div>

          <div class="skill-card">
            <img :src="ivue" alt="Vue" class="image" />
            <span>Vue</span>
          </div>

          <div class="skill-card">
            <img :src="dock" alt="Docker" class="image" />
            <span>Docker</span>
          </div>

          <div class="skill-card">
            <img :src="jup" alt="Jupyter Notebook" class="image" />
            <span>Jupyter Notebook</span>
          </div>

        </div>
      </section>


      
      <section class="box">
        <h2>Featured Projects</h2>

        <div class="project-grid">

          <div class="project-card">
            <h3>AI Chat Application</h3>
            <p>
              Modern AI-powered conversational application using Vue and APIs.
            </p>
          </div>

          <div class="project-card">
            <h3>Fantasy RPG Prototype</h3>
            <p>
              Experimental game systems inspired by RPG mechanics and immersive worlds.
            </p>
          </div>

          <div class="project-card">
            <h3>Portfolio Website</h3>
            <p>
              Responsive cosmic-themed portfolio built with Vue.js.
            </p>
          </div>

        </div>
      </section>


      
      <section class="box">
        <h2>My Hobbies</h2>

        <p>
          Outside programming, I enjoy trekking and long hikes across mountains,
          forests, and natural landscapes.
        </p>

        <p>
          I also love reading classic literature and fantasy novels such as
          The Lord of the Rings and War and Peace.
        </p>

        <p>
          Video games remain one of my biggest inspirations, both creatively
          and technically.
        </p>
      </section>

    </main>

  </div>
</template>


<script>
import '../style.css'

import lg from '../assets/Neon _tree_in_cosmic_glow.png'
import pic from '../assets/Picture_Portfolio.png'
import ijs from '../assets/Javascript.png'
import ipy from '../assets/Python.png'
import ire from '../assets/React.png'
import isql from '../assets/SQL.png'
import ivue from '../assets/Vue.png'
import dock from '../assets/Docker.png'
import jup from '../assets/Jupyter_Notebook.png'

export default {
  name: 'About',

  data() {
    return {
      pic,
      lg,
      ijs,
      ipy,
      ire,
      isql,
      ivue,
      dock,
      jup
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
}

.page::before {
  content: "";
  position: fixed;
  inset: 0;

  background:
    radial-gradient(circle at top left,
    rgba(0, 240, 255, 0.12),
    transparent 30%),

    radial-gradient(circle at bottom right,
    rgba(255, 222, 33, 0.10),
    transparent 30%);

  pointer-events: none;
}



.header {
  position: sticky;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 16px 32px;

  background: rgba(10, 16, 40, 0.85);
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


/* LOGO */
.logo {
  width: 80px;
  height: 80px;

  object-fit: cover;
  border-radius: 12px;

  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(5deg) scale(1.05);
}

.logo-link {
  display: flex;
  align-items: center;
}



.hero {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 100px 24px 60px;
}

.hero-content {
  max-width: 900px;
}

.hero h1 {
  font-size: 5rem;
  margin-bottom: 10px;

  font-family: "Orbitron";

  color: #FFDE21;
}

.subtitle {
  font-size: 1.7rem;
  color: #C8D0FF;

  margin-bottom: 20px;

  font-family: "Rajdhani";
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;

  max-width: 700px;
  margin: auto;

  color: #E6E8F0;

  font-family: "Rajdhani";
}

.hero-buttons {
  margin-top: 36px;

  display: flex;
  justify-content: center;
  gap: 20px;

  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 14px 28px;
  border-radius: 12px;

  text-decoration: none;

  font-family: "Rajdhani";
  font-size: 1.1rem;
  font-weight: bold;

  transition: all 0.3s ease;
}

.primary-btn {
  background: #FFDE21;
  color: #0A1028;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 222, 33, 0.35);
}

.secondary-btn {
  border: 2px solid #00F0FF;
  color: #00F0FF;
}

.secondary-btn:hover {
  background: rgba(0, 240, 255, 0.15);
  transform: translateY(-3px);
}



.content {
  display: flex;
  flex-direction: column;
  gap: 28px;

  padding: 24px;

  width: 100%;
  max-width: 1200px;

  margin: auto;
}



.box {
  background: rgba(255,255,255,0.08);

  border-radius: 18px;

  padding: 28px;

  border-left: 6px solid #FFDE21;

  backdrop-filter: blur(10px);

  box-shadow: 0 10px 30px rgba(0,0,0,0.25);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.box:hover {
  transform: translateY(-5px);

  box-shadow: 0 14px 35px rgba(0,0,0,0.35);

  border-left-color: #00F0FF;
}

.box h2 {
  font-family: "Orbitron";
  font-size: 2rem;

  margin-bottom: 20px;

  color: #FFDE21;
}

.box p {
  font-family: "Rajdhani";
  font-size: 1.15rem;

  line-height: 1.8;

  color: #F5F7FF;

  max-width: 80ch;
}



.skills-row {
  display: flex;
  gap: 20px;

  flex-wrap: wrap;

  margin-top: 24px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  background: rgba(255,255,255,0.05);

  padding: 20px;

  border-radius: 14px;

  width: 120px;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.skill-card:hover {
  transform: scale(1.08);

  background: rgba(255,255,255,0.12);
}

.skill-card span {
  font-family: "Rajdhani";
  font-size: 1rem;
  font-weight: bold;
}

.image {
  width: 70px;
  height: 70px;

  object-fit: contain;
}



.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 20px;

  margin-top: 20px;
}

.project-card {
  background: rgba(255,255,255,0.05);

  padding: 20px;

  border-radius: 14px;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);

  background: rgba(255,255,255,0.10);
}

.project-card h3 {
  font-family: "Orbitron";

  color: #00F0FF;

  margin-bottom: 10px;
}

.project-card p {
  font-size: 1rem;
}



@media (max-width: 768px) {

  .header {
    flex-direction: column;
    align-items: flex-start;

    gap: 18px;
  }

  .nav-links {
    margin-left: 0;
    flex-wrap: wrap;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .box {
    padding: 22px;
  }

  .box h2 {
    font-size: 1.6rem;
  }

  .box p {
    font-size: 1rem;
  }

  .skills-row {
    justify-content: center;
  }

  .logo {
    width: 65px;
    height: 65px;
  }
}

</style>
```

