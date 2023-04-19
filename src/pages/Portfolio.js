import React from 'react'
import ProjectCards from '../components/Projects'
import {PortfolioCards} from "../helpers/PortfolioCardsList"
import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className='titleNavsPage'>My Projects</h2>
      <div  id='portfolioCards'>
        {PortfolioCards.map((portfolio, index) => {
          return <ProjectCards id={index} title={portfolio.title} image={portfolio.image} github={portfolio.github} deployment={portfolio.deployment}/>;
        })}
          <br></br>
        </div>
        <br></br>
    </div>
  )
}

export default Portfolio