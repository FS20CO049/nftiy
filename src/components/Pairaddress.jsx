import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './sidebar.css'
import Searchbar from './Searchbar';

const Pairaddress = () => {
    const [card, setCards] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setCards(result))
    }, []);
    

    const cards = card.map(tokens => (
        <div className='col-sm-3 tokens ' key={tokens.id}>
            <Card className='card1'
            // style={{ width: '18rem' }}
            >
                <Card.Body>
                    <Card.Title>{tokens.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{tokens.details}</Card.Subtitle>
                    <Card.Text>
                        {tokens.price}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    ));
  return (
   
      <>
       <div className='cards'>
        <Searchbar />
     
        <h3>Pair Search Results</h3>
        <div className="row">
            {cards}
        </div>
        </div>
        </>
    
  )
}

export default Pairaddress
