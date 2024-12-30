
import * as React from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardMovies=({el})=>{
    const [showMore, setShowMore] = useState(false);
    return(
      <Card style={{ width: '18rem' }}>
      <Link to={`/MovieDescription/${el.id}`}>
         <Card.Img style={{width :"286px", height :"406px"}} variant="top" src={el.posterURL}  />
      </Link>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {showMore ? el.description : el.description.slice(0,80)}
          <button className={showMore ? 'ahmer' : 'akther'} style={{    border: "none",backgroundColor: "white"}} onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "...Show more"}</button>  
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
   
      </Card.Body>
    </Card>
    )
}
export default CardMovies