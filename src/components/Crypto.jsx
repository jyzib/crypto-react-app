import React from 'react'
import  {useParams}  from 'react-router-dom'
import { useGetCryptosDetailsQuery } from '../services/Crypto'
import HTMLReactParser from 'html-react-parser'
const Crypto = () => {
  let parser;
const {coinId} = useParams()
const {data,isFetching} = useGetCryptosDetailsQuery(coinId)
if(isFetching){
return 'loading'
}else{
   parser = `<h4>${data.data.coin.description}</h4>`
console.log(parser)
console.log(data)
  console.log(data.data.coin.links)
}
  return (
    <div>
      Crypto  = {coinId}
      <span>{HTMLReactParser(parser)}</span>
      <ul>
      {data?.data?.coin?.links.map((e)=>{
     return (<li>{e.type} -- <a href={e.url}>{e.name}</a></li>)
      })}
   </ul>
    </div>
  )
}

export default Crypto
