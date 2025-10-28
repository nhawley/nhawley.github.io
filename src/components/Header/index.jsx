import { useState, useEffect } from "react";
import "./index.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header dark ${isScrolled ? "small" : ""}`}>
      <nav className="nav">
        <a href="#about" className="nav-link">About</a>
        {/* <a href="#experience" className="nav-link">Experience</a> */}
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
