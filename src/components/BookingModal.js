import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookingModal({ show, handleClose, movie }) {
  if (!movie) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#1c1c1c', color: '#ff3f6c' }}>
        <Modal.Title>Booking: {movie.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}>
        <p>Movie: {movie.name}</p>
        <p>Rating: {movie.rating} ⭐</p>
        <p>Price: ${movie.price}</p>
        <p>Enjoy your show!</p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#1e1e1e' }}>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="success" style={{ backgroundColor: '#ff3f6c', border: 'none' }} onClick={handleClose}>Confirm Booking</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingModal;
