import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} > 
                            React Project 1
                        </CardTitle>
                        <CardText>gluten-free freegan dreamcatcher sriracha Pitchfork iPhone cray occupy twee organic selfies kale chips street art bitters paleo biodiesel Wes Anderson chia Carles flexitarian normcore fashion axe stumptown Pinterest slow-carb Truffaut VHS deep v letterpress whatever kogi keytar hashtag 3 wolf moon quinoa gentrify salvia you probably haven't heard of them jean shorts wayfarers retro pour-over PBR&B forage umami bespoke narwhal tote bag literally locavore chillwave plaid asymmetrical butcher fixie drinking vinegar pug mlkshk before they sold out art party roof party viral authentic pork belly kitsch hella vegan vinyl Tumblr cornhole wolf scenester 8-bit master cleanse Schlitz </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> LiveDemo </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} > 
                            React Project 1
                        </CardTitle>
                        <CardText> gluten-free freegan dreamcatcher sriracha Pitchfork iPhone cray occupy twee organic selfies kale chips street art bitters paleo biodiesel Wes Anderson chia Carles flexitarian normcore fashion axe stumptown Pinterest slow-carb Truffaut VHS deep v letterpress whatever kogi keytar hashtag 3 wolf moon quinoa gentrify salvia you probably haven't heard of them jean shorts wayfarers retro pour-over PBR&B forage umami bespoke narwhal tote bag literally locavore chillwave plaid asymmetrical butcher fixie drinking vinegar pug mlkshk before they sold out art party roof party viral authentic pork belly kitsch hella vegan vinyl Tumblr cornhole wolf scenester 8-bit master cleanse Schlitz </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> LiveDemo </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} > 
                            React Project 1
                        </CardTitle>
                        <CardText> gluten-free freegan dreamcatcher sriracha Pitchfork iPhone cray occupy twee organic selfies kale chips street art bitters paleo biodiesel Wes Anderson chia Carles flexitarian normcore fashion axe stumptown Pinterest slow-carb Truffaut VHS deep v letterpress whatever kogi keytar hashtag 3 wolf moon quinoa gentrify salvia you probably haven't heard of them jean shorts wayfarers retro pour-over PBR&B forage umami bespoke narwhal tote bag literally locavore chillwave plaid asymmetrical butcher fixie drinking vinegar pug mlkshk before they sold out art party roof party viral authentic pork belly kitsch hella vegan vinyl Tumblr cornhole wolf scenester 8-bit master cleanse Schlitz </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> LiveDemo </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        }  else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Vue</h1></div>
            )
        }  else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab> React </Tab>
                    <Tab> Angular </Tab>
                    <Tab> Vue </Tab>
                    <Tab> MongoDB </Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Portfolio;