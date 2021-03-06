//this component is used to render information for each team member in AboutUs.js

import React from 'react'; 

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithubSquare, faTwitterSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 

//stylesheet
import './aboutus.scss'

const Member = props => {
    
    const goToLink = url => window.location.replace(url)

    return(
        <div className='member'>
          <h3 className="aboutus-title">The Masterminds Behind Citrics</h3>

            <div className='member-display'>
                <div className="member-photo">
                    <img src={props.member.image} alt={props.member.name}/>
                </div>
                
                <div className="member-info">
                    <div className="name-role">
                        <p className="member-name">{props.member.name}</p>
                        <p className="member-role">{props.member.role}</p>
                    </div>
                    <div className="member-social">
                        
                        <FontAwesomeIcon style={{cursor: "pointer"}} icon={faGithubSquare} size="2x" color="#3999fc" onClick={() => goToLink(`https://www.github.com/${props.member.social.github}`)} />
                        <FontAwesomeIcon style={{cursor: "pointer"}} icon={faLinkedin} size="2x" color="#3999fc" onClick={() => goToLink(`https://www.Linkedin.com/in/${props.member.social.linkedin}`)}/>
                        <FontAwesomeIcon style={{cursor: "pointer"}} icon={faTwitterSquare} size="2x" color="#3999fc" onClick={() => goToLink(`https://www.twitter.com/${props.member.social.twitter}`)}/>
                    </div>

                    <p className="member-about">
                        {props.member.about}
                    </p>

                    <a href={props.member.portfolio}>
                        <div className="member-portfolio">
                        {(props.member.name.charAt(props.member.name.length - 1) === 's') ? `View ${props.member.name}' Portfolio` : `View ${props.member.name}'s Portfolio`}
                        
                        </div>
                    </a>
                </div>


            </div>
            
        </div>
    )
}

export default Member