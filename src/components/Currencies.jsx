import React from 'react'
import millify from 'millify';
import {Card,Row,Col,Input} from 'antd'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/Crypto'
const Currencies = ({simplyfied}) => {
  const [search,setSearch] = useState('')
  console.log(simplyfied)
  const count = simplyfied ? 10:100
  const {data:curencydata,isFetching} = useGetCryptosQuery(count);
  const [curency , setCurency] = useState([])
  
  
  
  useEffect(()=>{
    const filterdata = curencydata?.data?.coins.filter((e)=>
    e.name.toLowerCase().includes(search.toLowerCase())
    )
    setCurency(filterdata)
  },[curencydata,search])
  if(isFetching) return 'loading....'
  return (
    <div>
      {simplyfied || ( <div className="search-crypto">
       <Input placeholder='Search crypto ' onChange={(e)=>setSearch(e.target.value)} />
      </div>)}
     {curency?.map((e)=>{
      const {iconUrl,name,rank,marketCap,change,uuid} = e
      return(
        <div className="div">
          <Link to={`/crypto/${uuid}`}>
          <img style={{width:'50px'}} src={iconUrl} alt="" />
          <p>{rank} {name}</p>
          <p>marketCap:{marketCap}</p>
          <p>change:{change}</p>
          </Link>
        </div>
      )
     })}
    </div>
  )
}

export default Currencies
