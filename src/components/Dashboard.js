import React, { useState} from 'react'
import backGroundPic from './5858.jpg'
import Search from './Search'
import Available from './Available'
import Detail from './Detail'

const Dashboard = () => {
  
  const [OpenModal, setOpenModal] = useState(false)
  const [From, setFrom] = useState('')
  const [Last, setLast] = useState('')

  return (
    <div className='w-full h-full gb-no-repeat bg-cover'
    style={{backgroundImage: `url(${backGroundPic})`}}>
        <div className='flex items-center justify-center  h-screen flex-col justify-evenly' >
        <Search start={setFrom} last={setLast} switch1={(e) => {
          e.preventDefault();
          setOpenModal(true)
        }} />
        <Available/>
        </div>
        {OpenModal && <Detail start={From} Last={Last} switch={() => setOpenModal(false)} />} 
    </div>
  )
}

export default Dashboard

