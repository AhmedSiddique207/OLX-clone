import React, { useState, useEffect } from "react";
import "./back.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
     
      <i class="fa-solid fa-chevron-right toppp "></i>&nbsp;
       Back to top
    </div>
  );
};

export default BackToTopButton;
