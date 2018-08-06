import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{width: "100%", margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="https://iconalone.com/sites/default/files/styles/220x220/public/Dreadlocks.svg_0.png?itok=TRwhgS2i"
                            alt="avatar"
                            className="avatar-image"
                        />
                        <div className='banner-text'>
                            <h1> Full Stack Web Developer </h1>
                            <hr/>
                            <p className='banner-text'> TypeScript | NodeJS | React | Redux | PostGreSQL| Docker | AWS | C++ </p>
                            <div className='social-links'>
                               
                                {/* {LinkedIn} */}
                                <a href="www.google.com/" targer="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* {GitHub} */}
                                <a href="www.google.com/" targer="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>

                                {/* {Youtube} */}
                                <a href="www.google.com/" targer="_blank">
                                    <i className="fab fa-youtube" aria-hidden="true" />
                                </a>                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Home;