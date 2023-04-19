import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCards({title, image, id}) {
    const navigate = useNavigate()
  return (
    <div  className='projectCards' onClick={() => {navigate('/portfolios/' + id)}}>
    <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
    <h2> {title} </h2>
    </div>
  )
}

export default ProjectCards