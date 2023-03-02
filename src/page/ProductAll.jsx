import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productsList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/wan-web/taewan-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect( () => {
    getProducts();
  }, [query])
  return (
    <div>
      <div className="container main">
        {
          productsList.map( menu => <ProductCard key={menu.id} item={menu} />)
        }
      </div>
    </div>
  )
}

export default ProductAll