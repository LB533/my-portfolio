

```vue
<template>
  <div class="page">

    
    <header class="header">

      <router-link to="/" class="logo-link">
        <img :src="pic" alt="Logo" class="logo" />
      </router-link>

      <span class="title">My Projects</span>

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

        <h1>Featured Projects</h1>

        <p>
          A collection of applications and experiments focused on
          web development, APIs, user experience, and interactive systems.
        </p>

      </div>
    </section>


    
    <main class="content">

      
      <section class="project-box">

        <div class="project-header">
          <div>
            <h2>Virtual Agenda E-Todo</h2>
            <span class="project-type">Productivity Application</span>
          </div>

          <div class="tech-stack">
            <span>Vue.js</span>
            <span>JavaScript</span>
            <span>Local Storage</span>
          </div>
        </div>


        
        <div class="carousel">

          <transition name="fade" mode="out-in">
            <img
              :key="images[currentIndex]"
              :src="images[currentIndex]"
              class="carousel-image"
            />
          </transition>

          <button class="carousel-btn left" @click="prev">
            ‹
          </button>

          <button class="carousel-btn right" @click="next">
            ›
          </button>

          <div class="carousel-dots">
            <span
              v-for="(image, index) in images"
              :key="index"
              :class="['dot', { active: currentIndex === index }]"
              @click="currentIndex = index"
            ></span>
          </div>

        </div>


        <div class="project-content">

          <p>
            The purpose of this application was to create a persistent
            virtual agenda allowing users to manage tasks, monitor progress,
            and organize productivity workflows efficiently.
          </p>

          <p>
            User data remains persistent between sessions, ensuring a smooth
            and reliable experience.
          </p>

        </div>

      </section>


      
      <section class="project-box">

        <div class="project-header">
          <div>
            <h2>API News Dashboard</h2>
            <span class="project-type">Data Visualization Platform</span>
          </div>

          <div class="tech-stack">
            <span>Vue.js</span>
            <span>REST APIs</span>
            <span>JavaScript</span>
          </div>
        </div>


        
        <div class="carousel">

          <transition name="fade" mode="out-in">
            <img
              :key="otherimages[othercurrentIndex]"
              :src="otherimages[othercurrentIndex]"
              class="carousel-image"
            />
          </transition>

          <button class="carousel-btn left" @click="previous">
            ‹
          </button>

          <button class="carousel-btn right" @click="nextious">
            ›
          </button>

          <div class="carousel-dots">
            <span
              v-for="(image, index) in otherimages"
              :key="index"
              :class="['dot', { active: othercurrentIndex === index }]"
              @click="othercurrentIndex = index"
            ></span>
          </div>

        </div>


        <div class="project-content">

          <p>
            This project aggregates information from multiple APIs to provide
            users with real-time insights and decision-making support.
          </p>

          <p>
            The application demonstrates API integration, responsive UI design,
            and dynamic data visualization.
          </p>

        </div>

      </section>

    </main>

  </div>
</template>


<script>
import '../style.css'

import lg from '../assets/Neon _tree_in_cosmic_glow.png'
import pic from '../assets/Picture_Portfolio.png'


import home from '../assets/Homepage.png'
import login from '../assets/Login.png'
import profile from '../assets/Profile.png'

import electricity from '../assets/ElectricityAPI.png'
import homeapi from '../assets/HomeAPI.png'
import waterapi from '../assets/WaterAPI.png'
import weatherapi from '../assets/WeatherAPI.png'

export default {
  name: 'Projects',

  data() {
    return {
      pic,
      lg,

      images: [
        login,
        home,
        profile
      ],

      otherimages: [
        electricity,
        homeapi,
        waterapi,
        weatherapi
      ],

      currentIndex: 0,
      othercurrentIndex: 0
    }
  },

  methods: {

    next() {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length
    },

    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length)
        % this.images.length
    },

    nextious() {
      this.othercurrentIndex =
        (this.othercurrentIndex + 1)
        % this.otherimages.length
    },

    previous() {
      this.othercurrentIndex =
        (this.othercurrentIndex - 1 + this.otherimages.length)
        % this.otherimages.length
    }
  }
}
</script>


<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;

  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  position: relative;

  color: white;

  background:
    linear-gradient(135deg, #0A1028, #2A0A3D);
}

.page::before {
  content: "";

  position: fixed;
  inset: 0;

  pointer-events: none;

  background:
    radial-gradient(
      circle at top left,
      rgba(0,240,255,0.12),
      transparent 30%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(255,222,33,0.10),
      transparent 30%
    );
}

img {
  max-width: 100%;
  display: block;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 16px 32px;

  background: rgba(10,16,40,0.85);

  backdrop-filter: blur(10px);

  border-bottom:
    1px solid rgba(255,255,255,0.1);
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;

  object-fit: cover;

  border-radius: 12px;

  transition: transform 0.3s ease;
}

.logo:hover {
  transform:
    rotate(5deg)
    scale(1.05);
}

.title {
  font-family: "Orbitron";

  font-size: 1.4rem;

  color: #FFDE21;
}

.nav-links {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 28px;

  flex-wrap: wrap;
}

.link-link {
  position: relative;

  text-decoration: none;

  color: white;

  font-family: "Rajdhani";
  font-size: 1.15rem;
  font-weight: 600;

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

.hero {
  width: 100%;

  padding:
    90px 24px 50px;

  text-align: center;
}

.hero-content {
  width: 100%;
  max-width: 900px;

  margin: auto;
}

.hero h1 {
  margin-bottom: 20px;

  font-family: "Orbitron";

  font-size: clamp(2.5rem, 8vw, 4.8rem);

  color: #FFDE21;
}

.hero p {
  font-family: "Rajdhani";

  font-size: clamp(1rem, 2vw, 1.3rem);

  line-height: 1.8;

  color: #E6E8F0;
}

.content {
  width: 100%;
  max-width: 1200px;

  margin: auto;

  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-box {
  width: 100%;

  padding: 32px;

  overflow: hidden;

  border-radius: 20px;

  border-left: 6px solid #FFDE21;

  background:
    rgba(255,255,255,0.08);

  backdrop-filter: blur(10px);

  box-shadow:
    0 12px 35px rgba(0,0,0,0.25);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.project-box:hover {
  transform: translateY(-5px);

  border-left-color: #00F0FF;

  box-shadow:
    0 16px 40px rgba(0,0,0,0.35);
}

.project-header {
  width: 100%;

  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 20px;

  flex-wrap: wrap;
}

.project-header h2 {
  margin-bottom: 8px;

  font-family: "Orbitron";

  font-size: clamp(1.5rem, 4vw, 2rem);

  color: #FFDE21;
}

.project-type {
  color: #C8D0FF;

  font-family: "Rajdhani";
  font-size: 1.05rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-stack span {
  padding: 8px 14px;

  border-radius: 999px;

  background:
    rgba(0,240,255,0.12);

  color: #00F0FF;

  font-family: "Rajdhani";
  font-weight: bold;
}

.carousel {
  position: relative;

  width: 100%;

  margin-bottom: 28px;

  padding: 12px;

  overflow: hidden;

  border-radius: 18px;

  background:
    rgba(255,255,255,0.04);

  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 100%;
  height: auto;

  max-height: 700px;

  object-fit: contain;

  border-radius: 18px;

  transition: transform 0.4s ease;
}

.carousel:hover .carousel-image {
  transform: scale(1.01);
}

.carousel-btn {
  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background:
    rgba(10,16,40,0.85);

  color: #FFDE21;

  font-size: 2rem;

  transition: all 0.3s ease;

  z-index: 10;
}

.carousel-btn:hover {
  background: #FFDE21;

  color: #0A1028;

  transform:
    translateY(-50%)
    scale(1.08);
}

.left {
  left: 12px;
}

.right {
  right: 12px;
}

.carousel-dots {
  position: absolute;

  bottom: 18px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;

  border-radius: 50%;

  cursor: pointer;

  background:
    rgba(255,255,255,0.4);

  transition: all 0.3s ease;
}

.dot.active {
  background: #FFDE21;

  transform: scale(1.2);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.project-content p {
  font-family: "Rajdhani";

  font-size: clamp(1rem, 2vw, 1.15rem);

  line-height: 1.8;

  color: #F5F7FF;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
    padding:
      60px 20px 30px;
  }

  .content {
    padding: 20px;
  }

  .project-box {
    padding: 22px;
  }

  .carousel {
    padding: 8px;
  }

  .carousel-image {
    max-height: 420px;
  }

  .carousel-btn {
    width: 42px;
    height: 42px;

    font-size: 1.4rem;
  }

  .left {
    left: 6px;
  }

  .right {
    right: 6px;
  }

  .logo {
    width: 65px;
    height: 65px;
  }
}

@media (max-width: 480px) {

  .header {
    padding: 14px 16px;
  }

  .nav-links {
    gap: 12px;
  }

  .link-link {
    font-size: 1rem;
  }

  .hero {
    padding:
      50px 16px 24px;
  }

  .content {
    padding: 16px;
  }

  .project-box {
    padding: 18px;
  }

  .carousel-image {
    max-height: 300px;
  }

  .carousel-btn {
    width: 36px;
    height: 36px;

    font-size: 1.2rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .tech-stack span {
    padding: 6px 10px;

    font-size: 0.9rem;
  }
}

</style>