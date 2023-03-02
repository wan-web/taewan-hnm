import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let { id } = useParams();
  const [ product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/wan-web/taewan-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect( () => {
    getProductDetail()
  }, [])
  return (
    <div className="container detail">
      <div className='left'>
        <img src={product?.img} alt="" />
      </div>
      <div className='right'>
        <div>{product?.title}</div>
        <div>₩{product?.price}</div>
        <div>{product?.choice && "Conscious choice"}</div>
        <div>
          <select name="" id="">
            <option value="">사이즈 선택</option>
            <option value={product?.size[0]}>{product?.size[0]}</option>
            <option value={product?.size[1]}>{product?.size[1]}</option>
            <option value={product?.size[2]}>{product?.size[2]}</option>
          </select>
        </div>
        <div><button>추가</button></div>
      </div>
    </div>
  )
}

export default ProductDetail