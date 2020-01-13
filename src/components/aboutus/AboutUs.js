import React from 'react'; 

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
//images
import anna from '../../assets/team_photos/anna_t.png'; 
import daniel from '../../assets/team_photos/daniel_b.jpg'; 
import john from '../../assets/team_photos/john_w.jpg'; 
import kevin from '../../assets/team_photos/kevin_n.png'; 
import luke from '../../assets/team_photos/luke_t.png'; 
import matthew from '../../assets/team_photos/matthew_s.jpg'
import michael from '../../assets/team_photos/michael_h.jpg';
import muamer from '../../assets/team_photos/muamer_k.jpg'; 
import ruth from '../../assets/team_photos/ruth_p.jpg'; 
import scott from '../../assets/team_photos/scott_m.png'
import umeko from '../../assets/team_photos/umeko_w.jpg';

//styling
import './aboutus.scss'; 

/*
May create hover effect that desaturates photo and displays more information about team member
*/

const AboutUs = props => {
    return(
        <div className="aboutUs">
            <div className='aboutus-intro'>
                <h1 className="aboutus-title">Our Team</h1>
                
                <p className="aboutTeam">

                </p>
            </div>
            <div className="team">
                <div className="leadership-design">
                    <div className="container">
                        {/*leadership*/}
                        <h3 className="leadership-header">Leadership</h3>
                        <div className="tl">
                            
                            {/*Anna*/}
                            <div className="member">
                                <img src={anna} alt="Anna Townsend"/>
                                <div className="info">
                                    <p className="role">Team Lead</p>
                                    <p className="about"></p>
                                    <span className="social">
                                        <FontAwesomeIcon icon={faGithubSquare}/>
                                        <FontAwesomeIcon icon={faTwitterSquare}/>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    
                    {/*Design*/}
                    <div className="container">
                        
                        <div className="design">
                            <h3 className="design-header">Design</h3>
                            {/*Ruth*/}
                            <div className="member">
                                <img src={ruth} alt="Ruth Phillips"/>
                                <div className="info">
                                    <p className="role">UX/UI Designer</p>
                                    <p className="about"></p>
                                    <span className="social">
                                        <FontAwesomeIcon icon={faGithubSquare}/>
                                        <FontAwesomeIcon icon={faTwitterSquare}/>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ds-container">
                    {/*data science*/}
                    <h3 className="ds-header">Data Science</h3>  
                    <div className="ds">
                    
                        {/*Luke*/}
                        <div className="member">
                            <img src={luke} alt="Luke Townsend"/>
                            <div className="info">
                                <p className="role">Data Scientist</p>
                                <p className="about"></p>
                                <span className="social">
                                    <FontAwesomeIcon icon={faGithubSquare}/>
                                    <FontAwesomeIcon icon={faTwitterSquare}/>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </span>
                            </div>
                        </div>

                        {/*Matthew*/}
                        <div className="member">
                            <img src={matthew} alt="Matthew Sessions"/>
                            <div className="info">
                                <p className="role">Data Scientist</p>
                                <p className="about"></p>
                                <span className="social">
                                    <FontAwesomeIcon icon={faGithubSquare}/>
                                    <FontAwesomeIcon icon={faTwitterSquare}/>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </span>
                            </div>
                        </div>

                        {/*Scott*/}
                        <div className="member">
                            <img src={scott} alt="Scott Maxwell"/>
                            <div className="info">
                                <p className="role">Data Scientist</p>
                                <p className="about"></p>
                                <span className="social">
                                    <FontAwesomeIcon icon={faGithubSquare}/>
                                    <FontAwesomeIcon icon={faTwitterSquare}/>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/*web development*/}
                
                <div className="web">
                  <h3 className="web-header">Web Development</h3>  
                    {/*Daniel*/}
                    <div className="member">
                        <img src={daniel} alt="Daniel Briksza"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>

                    {/*John*/}
                    <div className="member">
                        <img src={john} alt="John Watt"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>

                    {/*Kevin*/}
                    <div className="member">
                        <img src={kevin} alt="Kevin Nyugen"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>

                    {/*Michael*/}
                    <div className="member">
                        <img src={michael} alt="Michael Harms"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>

                    {/*Muamer*/}
                    <div className="member">
                        <img src={muamer} alt="Muamer Kukic"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>

                    {/*Umeko*/}
                    <div className="member">
                        <img src={umeko} alt="Umeko Walker"/>
                        <div className="info">
                            <p className="role">Web Developer</p>
                            <p className="about"></p>
                            <span className="social">
                                <FontAwesomeIcon icon={faGithubSquare}/>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs; 