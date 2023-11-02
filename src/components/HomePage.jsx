import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/Crypto'
import Currencies from './Currencies'
import News from './News'
const HomePage = () => {
const {Title} = Typography
const {data,isFetching} = useGetCryptosQuery(10);
const globalstate = data?.data?.stats

if(isFetching) return(<> Loading</>)

const objectkey = Object.entries(globalstate)

const mll = millify(2000)
console.log(mll)

  return (
   <>
      <Title level={2} className='heading' >
           Yatharthriti
      </Title>
    <Row>
      {
        objectkey.map(([key,value],index)=>{
          return (<Col key={index} span={12} > <Statistic title={key} value={millify(value)} /></Col>)
          })
      }
    </Row>
   <div className="home-heading-container">
   <Title level={2} className='home-title' >Top ten cryptocurrency in the world</Title>
   <Title level={3} className='show-more' >
    <Link to={'/Currencies'} >Show More</Link>
   </Title>

   </div>
   <Currencies simplyfied />
   <News simplyfied />
   </>
   
   
  )
}

export default HomePage
