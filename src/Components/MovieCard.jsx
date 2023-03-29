import React from "react";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function Cards({title,description,image,value,id}) {
  
  return (
      <Link to={`/trailer/${id}`}>
      <Card style={{ marginTop: '100px',width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Rating name="read-only" value={value} readOnly />
      </Card.Body>
    </Card>
    </Link>
    
  );
}

export default Cards;