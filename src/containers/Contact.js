import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Melvin Young </h2>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> umami disrupt chillwave raw denim McSweeney's hoodie Intelligentsia biodiesel PBR&B put a bird on it twee pop-up pickled letterpress hashtag pug Shoreditch Marfa salvia Helvetica food truck brunch Vice selfies meh synth mlkshk tousled dreamcatcher VHS tote bag fap direct trade  slow-carb fixie sartorial iPhone skateboard chambray craft beer try-hard freegan Pitchfork farm-to-table authentic DIY quinoa stumptown Tumblr street art seitan Austin next level Portland Echo Park Wes Anderson narwhal Bushwick 8-bit small batch sriracha ethical Etsy shabby chic pour-o  </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-phone-volume" aria-hidden="true"/>
                                            (615) 584-8730
                                    </ListItemContent>
                                </ListItem>
                               <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fas fa-envelope" aria-hidden="true"/>
                                                Melviny6@gmail.com
                                    </ListItemContent>
                                </ListItem>                  

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fas fa-skype" aria-hidden="true"/>
                                                Melviny6
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Contact;