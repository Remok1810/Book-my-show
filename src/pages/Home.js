import React, { useState, useRef, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import BookingModal from '../components/BookingModal';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const topMovies = [
    { id: 1, name: 'Avengers: Endgame', rating: 4.8, price: 10, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 2, name: 'Inception', rating: 4.7, price: 12, image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' },
    { id: 3, name: 'Interstellar', rating: 4.9, price: 15, image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' },
    { id: 4, name: 'Joker', rating: 4.6, price: 11, image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg' },
    { id: 5, name: 'Titanic', rating: 4.5, price: 9, image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' },
    { id: 6, name: 'Spider-Man: No Way Home', rating: 4.7, price: 13, image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg' },
    { id: 7, name: 'The Dark Knight', rating: 4.9, price: 14, image:'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg' },
    { id: 8, name: 'Frozen II', rating: 4.4, price: 10, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'  },
  ];

  const remainderMovies = [
    { id: 9, name: 'Thor: Ragnarok', rating: 4.6, price: 11, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 10, name: 'Black Panther', rating: 4.7, price: 12, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 11, name: 'Doctor Strange', rating: 4.5, price: 11, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 12, name: 'Guardians of the Galaxy', rating: 4.6, price: 13, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 13, name: 'Avatar', rating: 4.8, price: 14, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 14, name: 'Deadpool', rating: 4.5, price: 12, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 15, name: 'Shang-Chi', rating: 4.6, price: 13, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 16, name: 'Captain Marvel', rating: 4.5, price: 11, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 17, name: 'Wonder Woman', rating: 4.6, price: 12, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
    { id: 18, name: 'The Lion King', rating: 4.7, price: 10, image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' },
    { id: 19, name: 'Minions', rating: 4.4, price: 9, image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'},
    { id: 20, name: 'Jurassic World', rating: 4.5, price: 12, image:'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg' },
  ];

  // Rotate top featured banner every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % topMovies.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [topMovies.length]);

  // Scroll calculation for top movies horizontal scroll
  useEffect(() => {
    const updateScrollAmount = () => {
      if (!scrollRef.current) return;
      const containerWidth = scrollRef.current.offsetWidth;
      const item = scrollRef.current.querySelector('.movie-item');
      if (item) {
        const style = window.getComputedStyle(item);
        const totalWidth = item.offsetWidth + parseInt(style.marginRight);
        const visibleItems = Math.max(1, Math.floor(containerWidth / totalWidth));
        setScrollAmount(totalWidth * visibleItems);
      }
    };
    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  const handleBook = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <Container className="my-4">

      {/* Featured Banner Rectangle Slideshow */}
      {topMovies[featuredIndex] && (
        <div className="featured-banner-rectangle mb-4">
          <img
            src={topMovies[featuredIndex].image}
            alt={topMovies[featuredIndex].name}
            className="featured-image"
          />
          <div className="banner-info-rectangle">
            <h2>{topMovies[featuredIndex].name}</h2>
          </div>
        </div>
      )}

      {/* Horizontal scroll for top movies */}
      <h2 className="one">Top Movies</h2>
      <div className="scroll-container position-relative">
        <Button className="scroll-btn left" onClick={scrollLeft}>&lt;</Button>
        <div className="movie-scroll d-flex" ref={scrollRef}>
          {topMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <MovieCard movie={movie} onBook={handleBook} />
            </div>
          ))}
        </div>
        <Button className="scroll-btn right" onClick={scrollRight}>&gt;</Button>
      </div>

      {/* All other movies */}
      <h2 className="mt-4">All Movies</h2>
      <Row>
        {remainderMovies.map(movie => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} onBook={handleBook} />
          </Col>
        ))}
      </Row>

      <BookingModal show={showModal} handleClose={handleClose} movie={selectedMovie} />
    </Container>
  );
}

export default Home;
