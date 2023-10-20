import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()

  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))

  }
  return (
    <div style={{marginTop:'100px'}}>
     <Row className='m-5'>
      {
        wishlistArray.length>0? wishlistArray.map((product,index)=>(
          <Col key={index} className='mb-5'sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem',height:'29rem' }} className='shadow border'>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            <p>{product?.description.slice(0,60)}...</p>
            <h5>₹ {product?.price}</h5>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn bg-dark border-0'><i className="fa-solid fa-trash fa-2x"></i></Button>
            <Button onClick={()=>handleWishlistCart(product)} className='btn bg-dark border-0'><i className="fa-solid fa-cart-plus fa-2x"></i></Button>
          </div>
  
        </Card.Body>
      </Card>
      </Col>
        )):<div style={{height:'60vh',width:'100%'}} className='w-100 d-flex justify-content-center flex-column align-items-center'>
          <img style={{width:'300px',height:'300px'}} src="https://live-mmb-public.s3.ap-south-1.amazonaws.com/assets/img/empty-cart.png" alt="" />
          <h4 className='fw-bold'>Your Wishlist is Empty !</h4>
          <Link to={'/'} className='btn btn-primary mt-3' style={{textDecoration:'none'}} >Home</Link>
        </div>

      }


     </Row>


    </div>
  )
}

export default Wishlist