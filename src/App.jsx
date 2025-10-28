import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import FlipWords from './components/FlipWords';
import Header from './components/Header';
import TimeMachine from './components/TimeMachine/TimeMachine';
import AppsShowcase from './components/AppShowcase/AppShowcase';

function MovingGrid() {
  const groupRef = useRef();
  const speed = 0.6; // slow drift

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.position.z += delta * speed;
    if (groupRef.current.position.z > 4) groupRef.current.position.z = 0;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 40 }).map((_, i) => (
        <gridHelper
          key={i}
          args={[100, 20, 17, 75, '#ffd300', '#ffd300']}
          position={[0, -1, -i * 4]}
          rotation={[-Math.PI / 1, 0, 0]}
          material={new THREE.LineBasicMaterial({
            color: '#ffd300',
            transparent: true,
            opacity: 1 - i * 0.02 // fake glow: nearer is brighter
          })}
        />
      ))}
    </group>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black flex overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">

        <Header />

        <div className="full-section canvas-wrapper">
          <div className="hero-title">
            <h1 className="opacity-95 text-4xl font-bold text-white">Hi, I'm Nate</h1>
            <h2 className="opacity-90 text-xl text-yellow">
                <FlipWords
                  words={[
                    "Sofware Developer in Test (SDET)",
                    "Mobile Developer",
                    "QA Automation Engineer",
                    "Full-Stack Developer",
                    "Creator",
                    "Problem Solver",
                    "Dream Builder",
                  ]}
                  interval={3800}
                />
            </h2>
          </div>

          <Canvas
            style={{ width: "100vw", height: "100vh" }}
            camera={{ position: [0, 3, 7], fov: 50 }}
            onCreated={({ gl, scene }) => {
              gl.setClearColor('#000000');
              scene.fog = new THREE.Fog('#000000', 5, 40);
            }}
          >
            <ambientLight intensity={0.35} />
            <fog attach="fog" args={["#000000", 5, 20]} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />

            <MovingGrid />
          
          </Canvas>

        </div>

        <div className="full-section about-section" id="about">
          <h2>About</h2>
          <h1 className='text-left'>9 years of technical solutions.</h1>
          <p>
            I’m a developer passionate about building engaging digital experiences. 
            Blending creative tech with performance and clean design.
            I've gained extensive experience in developing and testing
            frontend applications, ensuring high quality and seamless user experiences.
          </p>
          <TimeMachine />
        </div>

        {/* <div className="full-section experience-section" id="experience">
          <h2>Experience</h2>
          <p>
            Frontend engineering, creative coding, automation, and interactive 3D experiences.
          </p>
          <AppsShowcase/>
        </div> */}

        <div className="full-section contact-section" id="contact">
          <h2>Contact</h2>
          <p>
            Let’s build something together. Reach me at yourname@email.com
          </p>
          <div class="social-row">
            {/* <a href="https://x.com/YOUR_HANDLE" target="_blank" class="social-icon x">
              <i class="fa-brands fa-x-twitter"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/nate-hawley-iii/" target="_blank" class="social-icon linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Nhawley" target="_blank" class="social-icon github">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="mailto:nhawley5@gmail.com" class="social-icon email">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className='footer'>
          <p> &copy; 2025 Nate Hawley III </p>
        </div>
      </div>
    </div>
  );
}
