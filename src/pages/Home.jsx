import React, { useState } from 'react'
import Header from '../components/header/Header'
import ProductDisplay from '../components/productDisplay/ProductDisplay'

const Home = () => {

  const [category, setcategory] = useState('All')
  return (
    <div>
      
      <Header category = {category} setcategory = {setcategory}/>
      <ProductDisplay category = {category}/>
      
    </div>
  )
}

export default Home