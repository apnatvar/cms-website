'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function IndexTestimonialsSection({ testimonialsContent }) {
  const [current, setCurrent] = useState(0);
  const reviews = testimonialsContent?.reviews || [];

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % reviews.length);
  };

  return (
    <section className="index-testimonials">
      <div className="header">
        <p className="subheading">{testimonialsContent?.subtitle}</p>
        <h2 className="heading">{testimonialsContent?.title}</h2>
      </div>

      <div className="review-card">
        {reviews.length > 0 && (
          <div className="review-card-item">
            <div className="image-container">
              <Image
                src={reviews[current]?.image?.url}
                alt={reviews[current]?.image?.alt || "Testimonials Image"}
                width={100}
                height={100}
                className="image"
              />
            </div>
            <div className="review">
              <p className="paragraph">{reviews[current]?.review}</p>
              <p className="author">{reviews[current]?.author}</p>
              <p className="designation">{reviews[current]?.designation}</p>
            </div>
          </div>
        )}
      </div>

      {reviews.length > 1 && (
        <>
          <button className="nav-button left" onClick={handlePrev}>
            &#9664;
          </button>
          <button className="nav-button right" onClick={handleNext}>
            &#9654;
          </button>
        </>
      )}
    </section>
  );
}
