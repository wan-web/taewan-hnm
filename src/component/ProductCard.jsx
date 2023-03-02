import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate('/product/' + item.id);
  }
  return (
    <div onClick={showDetail} className='card'>
      <img src={item?.img} alt="main" />
      <div>{item?.choice ? "Consciou choice" : null}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new ? "신제품" : null}</div>
    </div>
  )
}

export default ProductCard