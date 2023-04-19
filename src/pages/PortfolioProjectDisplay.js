import React from 'react'
import { useParams } from "react-router-dom"
import {PortfolioCards} from "../helpers/PortfolioCardsList"
import { GitHub} from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/PortfolioProjectDisplay.css"


function PorfolioProjectDisplay() {
    const {id} = useParams();
    const portfolios = PortfolioCards[id]
    return (
    <div className='portfolios'>
        <h2>{portfolios.title}</h2>
        <img src={portfolios.image} alt='porfolios images' />
        <p>
            <b><i>Description:</i></b> {portfolios.description}
        </p>
        <div>
        
        <a href={portfolios.github}><GitHub  /></a>
        <a href={portfolios.deployment}><LanguageIcon/></a>
        <br></br>
        
        </div>
        
    </div>
    );
}

export default PorfolioProjectDisplay