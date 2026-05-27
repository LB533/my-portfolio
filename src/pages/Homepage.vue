


<template>
  <div class="page">

    
    <header class="header">

      <router-link to="/" class="logo-link">
        <img :src="pic" alt="Logo" class="logo" />
      </router-link>

      <span class="title">
        My Portfolio
      </span>

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

        <p class="hero-intro">
          Welcome To My Portfolio
        </p>

        <h1>
          BOUQUAIN Lucas
        </h1>

        <p class="hero-subtitle">
          Fullstack Developer • Creative Technologist • Video Game Enjoyer
        </p>

        <p class="hero-description">
          Passionate about modern web development, video game design,
          and immersive digital experiences. Explore my projects,
          skills, and creative ventures.
        </p>


        
        <div class="hero-buttons">

          <router-link to="/projects" class="primary-btn">
            View Projects
          </router-link>

          <router-link to="/about" class="secondary-btn">
            About Me
          </router-link>

        </div>

      </div>

    </section>


    
    <main class="content">

      
      <section class="box">

        <h2>What You Will Find Here</h2>

        <div class="overview-grid">

          <div class="overview-card">

            <div class="overview-icon">
              ⚡
            </div>

            <h3>Technical Skills</h3>

            <p>
              Discover the technologies and programming languages
              I use to build modern applications.
            </p>

          </div>


          <div class="overview-card">

            <div class="overview-icon">
              🚀
            </div>

            <h3>Creative Projects</h3>

            <p>
              Explore interactive projects focused on web development,
              APIs, and immersive user experiences.
            </p>

          </div>


          <div class="overview-card">

            <div class="overview-icon">
              🎮
            </div>

            <h3>Passion & Innovation</h3>

            <p>
              Learn more about my hobbies, video games and design.
            </p>

          </div>

        </div>

      </section>


      
      <section class="quote-box">

        <blockquote>
          “If there is a problem, there is a solution.”
        </blockquote>

        <span>
          — Personal Motto
        </span>

      </section>

    </main>

  </div>
</template>


<script>
import '../style.css'

import pic from '../assets/Picture_Portfolio.png'

export default {
  name: 'Home',

  data() {
    return {
      pic
    }
  }
}
</script>


<style scoped>

/* PAGE */
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
    rgba(0,240,255,0.12),
    transparent 30%),

    radial-gradient(circle at bottom right,
    rgba(255,222,33,0.10),
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
}

.logo:hover {
  transform: rotate(5deg) scale(1.05);
}

.logo-link {
  display: flex;
  align-items: center;
}


/* HERO */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 120px 24px 80px;
}

.hero-content {
  max-width: 950px;
}

.hero-intro {
  color: #00F0FF;

  font-family: "Rajdhani";
  font-size: 1.2rem;
  font-weight: bold;

  margin-bottom: 18px;

  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero h1 {
  font-size: 5.5rem;

  margin-bottom: 16px;

  font-family: "Orbitron";

  color: #FFDE21;

  line-height: 1.1;
}

.hero-subtitle {
  font-family: "Rajdhani";
  font-size: 1.7rem;

  color: #C8D0FF;

  margin-bottom: 28px;
}

.hero-description {
  font-family: "Rajdhani";
  font-size: 1.2rem;

  line-height: 1.9;

  color: #F5F7FF;

  max-width: 760px;
  margin: auto;
}



.hero-buttons {
  margin-top: 40px;

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
  transform: translateY(-4px);

  box-shadow: 0 10px 25px rgba(255,222,33,0.35);
}

.secondary-btn {
  border: 2px solid #00F0FF;

  color: #00F0FF;
}

.secondary-btn:hover {
  background: rgba(0,240,255,0.12);

  transform: translateY(-4px);
}



.content {
  width: 100%;
  max-width: 1200px;

  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 24px;
}



.box {
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
}

.box:hover {
  transform: translateY(-5px);

  border-left-color: #00F0FF;

  box-shadow: 0 16px 40px rgba(0,0,0,0.35);
}

.box h2 {
  font-family: "Orbitron";
  font-size: 2rem;

  color: #FFDE21;

  margin-bottom: 28px;
}



.overview-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 24px;
}



.overview-card {
  background: rgba(255,255,255,0.05);

  border-radius: 16px;

  padding: 28px;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-6px);

  background: rgba(255,255,255,0.10);
}

.overview-icon {
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(0,240,255,0.12);

  color: #00F0FF;

  font-size: 2rem;

  margin-bottom: 20px;
}

.overview-card h3 {
  font-family: "Orbitron";

  color: #FFDE21;

  margin-bottom: 16px;
}

.overview-card p {
  font-family: "Rajdhani";
  font-size: 1.1rem;

  line-height: 1.8;

  color: #F5F7FF;
}


/* QUOTE */
.quote-box {
  background: rgba(255,255,255,0.05);

  border-radius: 20px;

  padding: 42px;

  text-align: center;

  backdrop-filter: blur(10px);

  border: 1px solid rgba(255,255,255,0.08);
}

.quote-box blockquote {
  font-family: "Orbitron";
  font-size: 2rem;

  color: #FFDE21;

  margin-bottom: 16px;
}

.quote-box span {
  font-family: "Rajdhani";
  font-size: 1.1rem;

  color: #C8D0FF;
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

  .hero {
    padding: 90px 24px 60px;
  }

  .hero h1 {
    font-size: 3.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .box {
    padding: 24px;
  }

  .box h2 {
    font-size: 1.6rem;
  }

  .quote-box blockquote {
    font-size: 1.4rem;
  }

  .logo {
    width: 65px;
    height: 65px;
  }
}

</style>

