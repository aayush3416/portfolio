import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './portfolio.css';

const projectsData = [
  {
    id: "storefront-ecommerce",
    title: "StoreFront Ecommerce",
    description:
      "A full-stack e-commerce platform with product listings, cart management, user authentication, and payment integration. Deployed on AWS.",
    href: "https://github.com/aayush3416/storefront-ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "talk-a-tive",
    title: "Talk-a-tive",
    description:
      "A real-time chat application featuring group chats, one-on-one messaging, typing indicators, and user search. Powered by Socket.io.",
    href: "https://github.com/aayush3416/talk-a-tive",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "expenses-tracker",
    title: "Expenses Tracker",
    description:
      "A personal finance tracker with interactive charts, category breakdowns, and transaction history for smarter budgeting.",
    href: "https://github.com/aayush3416/your_expenses_tracker",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Robot",
    description:
      "An AI-powered Tic-Tac-Toe game with an unbeatable robot opponent using the minimax algorithm. Features multiple difficulty levels.",
    href: "https://github.com/aayush3416/Tic-Tac-Toe",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "personal-blog",
    title: "My Personal Blog",
    description:
      "A full-featured blog platform with rich text editing, user comments, tagging, and a responsive reading experience.",
    href: "https://github.com/aayush3416/aayush-blog",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "musical-time-machine",
    title: "Musical Time Machine",
    description:
      "Travel back in time through music! Enter any date and get a Spotify playlist of the top hits from that era.",
    href: "https://github.com/aayush3416/musical-time-machine",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(max-width: 768px)': { dragFree: true },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList()));
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-header__text">
          <h5>My Recent Work</h5>
          <h2>Projects</h2>
          <p className="gallery-header__description">
            A showcase of my recent work — from full-stack web apps to creative experiments.
          </p>
        </div>
        <div className="gallery-nav-buttons">
          <button
            className="gallery-nav-btn"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="gallery-nav-btn"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="gallery-carousel" ref={emblaRef}>
        <div className="gallery-carousel__container">
          {projectsData.map((item) => (
            <div className="gallery-carousel__slide" key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-card"
              >
                <div className="gallery-card__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-card__image"
                  />
                  <div className="gallery-card__overlay" />
                </div>
                <div className="gallery-card__content">
                  <h3 className="gallery-card__title">{item.title}</h3>
                  <p className="gallery-card__description">{item.description}</p>
                  <span className="gallery-card__link">
                    View Project <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${currentSlide === index ? 'gallery-dot--active' : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
