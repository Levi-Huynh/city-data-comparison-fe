import React, {useState, useContext, useEffect} from 'react'; 

/***media***/
import heart_icon from './icons/heart.svg';
import filled_heart from './icons/filled_heart.svg'


import {CityContext} from '../../contexts/CityContext'; 
import FavCard from './FavCard';
import Axios from 'axios';

const FavoriteButton = props => {

    const {selected} = useContext(CityContext)
    const [hover, setHover] = useState(false)
    const [saving, setSaving] = useState(false)
    const id = sessionStorage.getItem('userId')
    
    const saveFavorites = () => {
        Axios
            .post(`https://citrics-staging.herokuapp.com/api/favs/${id}`, selected)
            .then(response => {
                
                console.log(response)
                setSaving(false)
            })
            .catch(error => console.log(error))
    }

    return(
        <div className="favContainer">
           {(hover ) ? <FavCard/> : <div></div> } 
            <div className="heartButtonContainer" 
                style={{
                    'background' : '#F2F9FD',
                    'padding' : '2% 3% 0% 0%'
                }}>
            
                <div className="heart-button" 
                    onMouseLeave={ () => setHover(false) } 
                    onClick={ () => {
                        setSaving(true)
                        saveFavorites()
                    }}
                    onMouseEnter={() =>{ 
                        setHover(true)}} style={{
                        'display': 'flex',
                        'cursor' : 'pointer',
                        'alignItems' : 'center',
                        'justifyContent' : 'spaceAround',
                        'background' : 'white',
                        'width': '10%',
                        'justifyContent': 'space-around', 
                        'borderRadius': '10px',
                        'fontWeight': '500',
                        'marginLeft' : 'auto'
                    
                    }}>
                        <img src={(hover) ? filled_heart : heart_icon} alt='add to favorites'/>
                        <p>Favorites</p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteButton; 