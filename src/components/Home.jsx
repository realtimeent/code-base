import React from 'react'
import { files } from '../data'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='container'>
        <div className='container-btn-container'>
          {files.map((item) => {
            return (
              <Link className={`btn`} key={item.id}>
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
