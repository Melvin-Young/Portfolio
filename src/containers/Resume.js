import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from '../components/Education'
import Experience from '../components/Experience';
import Skills from '../components/Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                            src="https://iconalone.com/sites/default/files/styles/220x220/public/Dreadlocks.svg_0.png?itok=TRwhgS2i"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Melvin Young</h2>
                        <h4 style={{color: 'grey'}}>Mid-Level Software Development Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>
                            Shoreditch brunch next level distillery Etsy cliche vegan Marfa Carles kale chips bicycle rights post-ironic raw denim butcher leggings mustache church-key Tonx locavore sustainable mumblecore narwhal kitsch shabby chic put a bird on it PBR&B +1 fanny pack art party chia selvage farm-to-table single-origin coffee pork belly Pitchfork ugh pour-over pop-up quinoa banh mi Echo Park typewriter you probably haven't heard of them ethical hashtag DIY disrupt sriracha skateboard hoodie Thundercats scenester food truck wayfarers Bushwick mlkshk Pinterest aesthetic try-hard Truffaut McSweeney's VHS Cosby sweater pug actually XOXO retro keffiyeh readymade letterpress biodiesel salvia gentrify yr Banksytousled direct trade  vinyl irony umami flannel meh before they sold out artisan literally sartorial pickled Intelligentsia organic Vice High Life crucifix freegan Blue Bottle master cleanse chambray beard paleo stumptown cray fixie Brooklyn semiotics bitters street art Portland keytar Kickstarter authentic iPhone whatever wolf Schlitz messenger bag Williamsburg four loko PBR polaroid American Apparel 8-bit banjo Godard flexitarian dreamcatcher Austin bespoke occupy Neutra chillwave cornhole viral Wes Anderson mixtape cardigan forage Odd Future cred asymmetrical blog swag squid photo booth craft beer fashion axe synth fingerstache hella seitan roof party jean shorts kogi plaid Helvetica fap Tumblr drinking vinegar slow-carb lo-fi 3 wolf moon small batch lomo meggings tofu trust fund YOLO gastropub normcore selfies ennui gluten-free deep v heirloom tattooed tote bag twee 90's
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>298 Gassaway Road, Woodbury TN 37190</p>
                        <h5>Phone</h5>
                        <p>(615) 584-8730</p>
                        <h5>Email</h5>
                        <p>Melviny6@gmail.com</p>
                        <h5>Web</h5>
                        <p>DreadHeadDev.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2009}
                            endYear={2014}
                            schoolName={'University of Tennessee at Martin'}
                            schoolDescription={'Graduate with Honors from the College of Competer Science with a major in Computer Science and Minor in Management Information Systems'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                    
                    <h2>Experience</h2>
                        <Experience
                            startYear={2015}
                            endYear={2018}
                            jobName={'Software Development Engineer'}
                            jobDescription={"keffiyeh mlkshk bitters aesthetic tote bag wayfarers wolf Wes Anderson banh mi Echo Park cornhole ugh trust fund chambray Thundercats Williamsburg 90's asymmetrical locavore squid Austin cray meh iPhone before they sold out readymade vegan brunch actually heirloom vinyl ethical tattooed DIY authentic hoodie selfies Bushwick craft beer cliche selvage freegan skateboard flexitarian you probably haven't heard of them photo booth letterpress gentrify kogi raw denim drinking vinegar kitsch quinoa Shoreditch synth food truck single-origin coffee 3 wolf moon occupy gluten-free deep v lo-fi paleo bespoke jean shorts distillery flannel Intelligentsia yr XOXO viral Blue Bottle Pinterest Etsy gastropub street art PBR Carles lomo blog sriracha messenger bag Godard Banksy try-hard Kickstarter leggings umami chillwave fap fashion axe Cosby sweater meggings VHS crucifix normcore church-key artisan organic +1 typewriter PBR&B ennui mixtape keytar pickled art party Schlitz YOLO next level fanny pack small batch salvia tousled Brooklyn fingerstache swag dreamcatcher Tumblr pork belly High Life bicycle rights sustainable forage shabby chic direct trade  twee stumptown McSweeney's roof party Helvetica four loko Odd Future seitan slow-carb banjo semiotics biodiesel butcher polaroid Truffaut literally hella sartorial disrupt pour-over hashtag Marfa post-ironic scenester tofu beard American Apparel mustache kale chips put a bird on it mumblecore 8-bit retro cred chia master cleanse whatever Pitchfork Vice Portland Tonx cardigan narwhal Neutra fixie plaid farm-to-table pop-up irony pug"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>
                    <Skills 
                        skill={'JavaScript/TypeScript'}
                        progress={100}
                    />
                    <Skills 
                        skill={'NodeJS'}
                        progress={75}
                    />
                    <Skills 
                        skill={'React'}
                        progress={20}
                    />
                    <Skills 
                        skill={'PostGres'}
                        progress={50}
                    />                    
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;