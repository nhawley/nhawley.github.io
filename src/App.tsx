import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import Grainient from './components/layout/Grainient';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen">
      <Header />
        <main>
          <Grainient
            color1={isDark ? '#15205b' : '#f0f4ff'}
            color2={isDark ? '#4f82b9' : '#4f82b9'}
            color3={isDark ? '#091f5b' : '#c8d8f0'}
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={2}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          >
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </Grainient>
        </main>
      <Footer />
    </div>
  );
}

export default App;