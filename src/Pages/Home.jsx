import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistSlice';

function Home() {

   const data = useFetch("https://dummyjson.com/products")
   console.log(data);

   const dispatch = useDispatch()
  return (
    <div className='w-100'>
      <Row className='ms-5 ' style={{marginTop:'100px'}}>
      { data?.length>0?data?.map((product,index)=>
        (<Col key={index} className='mb-5'sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem',height:'29rem' }} className='shadow border'>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            <p>{product?.description.slice(0,60)}...</p>
            <h5>₹ {product?.price}</h5>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(addToWishList(product))} className='btn bg-dark border-0'><i className="fa-regular fa-heart fa-2x"></i></Button>
            <Button className='btn bg-dark border-0'><i className="fa-solid fa-cart-plus fa-2x"></i></Button>
          </div>
  
        </Card.Body>
      </Card>
      </Col>)): <p>Nothing to dislay</p>}
      
  
      </Row>
    </div>
  )
};

export default Home