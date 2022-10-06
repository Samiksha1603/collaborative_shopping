import {useCart} from 'react-use-cart'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {useNavigate} from "react-router-dom";
import { ProductDetail } from './ProductDetail';

const Cardsss = (props) => {
  
 

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

    return (
     
     <div className=" mt-5 d-grid gap-4 ps-5 ">
      <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
      <Card.Img   style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid />
      <Card.Body >
       
        <Card.Title className='mt-2'>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <>
        
       <Button href="#" style={{ width: '10rem' }} className='me-2'>Add to cart</Button> {' '}
     <Button onClick={() => openInNewTab('/productdetail')} href="#" style={{ width: '10rem' }} >Buy Now</Button> {' '}
      <Button  href="#" style={{ width: '10rem' }} >Suggest</Button>
    </>
     
      </Card.Body>
    </Card>
 
  
 
    
   
    </div>
 
    );
  }

  export {Cardsss};