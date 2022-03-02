import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import {
    Breadcrumb,
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Input, List,
    Menu, Segment,
    Sticky
} from "semantic-ui-react";

class Utilitybar extends Component {
    utility = {
        boxShadow: "none",
        border: "none",
        backgroundColor: "black"
    };

    render() {
        return (
            <Menu borderless style={this.utility}>
                <Container item>
                    <Menu.Item fitted position="right">
                        <Icon className="white background" name="facebook f" circular inverted/>
                    </Menu.Item>
                    <Menu.Item fitted>
                        <Icon className="white background" name="instagram" circular inverted/>
                    </Menu.Item>
                    <Menu.Item fitted>
                        <Icon className="white background" name="youtube" circular inverted/>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

class Navbar extends Component {
    navbar = {
        boxShadow: "none",
        border: "none"
    };

    render() {
        return (
            <Menu borderless style={this.navbar}>
                <Container>
                    <Image size="medium" item
                           src="https://www.toyotahawaii.com/on/demandware.static/Sites-ToyotaHawaii-Site/-/default/dw65ae3f47/images/logo.svg"/>
                    <Dropdown item text="Vehicles">
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Dropdown text="Cars + Vans">
                                    <Dropdown.Menu>
                                        <Dropdown.Item>2022 Camry</Dropdown.Item>
                                        <Dropdown.Item>2022 Corolla</Dropdown.Item>
                                        <Dropdown.Item>2022 Corolla Hatchback</Dropdown.Item>
                                        <Dropdown.Item>2022 Avalon</Dropdown.Item>
                                        <Dropdown.Item>2022 GR 86</Dropdown.Item>
                                        <Dropdown.Item>2022 GR Supra</Dropdown.Item>
                                        <Dropdown.Item>2022 Sienna</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text="Crossovers + SUVS">
                                    <Dropdown.Menu>
                                        <Dropdown.Item>2022 CHR</Dropdown.Item>
                                        <Dropdown.Item>2022 Rav4</Dropdown.Item>
                                        <Dropdown.Item>2022 4Runner</Dropdown.Item>
                                        <Dropdown.Item>2022 Highlander</Dropdown.Item>
                                        <Dropdown.Item>2022 Sequoia</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text="Trucks">
                                    <Dropdown.Menu>
                                        <Dropdown.Item>2022 Tacoma</Dropdown.Item>
                                        <Dropdown.Item>2022 Tundra</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text="Electrified">
                                    <Dropdown.Menu>
                                        <Dropdown.Item className="item">2022 Prius</Dropdown.Item>
                                        <Dropdown.Item className="item">2022 Prius Prime</Dropdown.Item>
                                        <Dropdown.Item className="item">2022 Camry Hybrid</Dropdown.Item>
                                        <Dropdown.Item className="item">2022 Corolla Hybrid</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Dropdown text="Upcoming Vehicles">
                                    <Dropdown.Menu>
                                        <Dropdown.Item>2022 Tundra Hybrid</Dropdown.Item>
                                        <Dropdown.Item>2022 BZ4X</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        Find a Dealer
                    </Menu.Item>
                    <Dropdown item text="Shopping Tools">
                        <Dropdown.Menu>
                            <Dropdown.Item>Toyota Hawaii Care</Dropdown.Item>
                            <Dropdown.Item>Finance</Dropdown.Item>
                            <Dropdown.Item>Extended Hybrid Warranty</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        Offers
                    </Menu.Item>
                    <Dropdown item text="Community">
                        <Dropdown.Menu>
                            <Dropdown.Item>Holoholo with Mark Noguchi</Dropdown.Item>
                            <Dropdown.Item>UH Athletics</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        );
    }
}

class Stickynavbar extends Component {
    contextRef = createRef();

    render() {
        return (
            <div ref={this.contextRef}>
                {/*<Sticky context={this.contextRef}>*/}
                <Container>
                    <Breadcrumb className="text red">
                        <Breadcrumb.Section>Vehicles</Breadcrumb.Section>
                        <Breadcrumb.Divider/>
                        <Breadcrumb.Section active>Cars + Vans</Breadcrumb.Section>
                    </Breadcrumb>
                </Container>
                <br/>
                <Grid container centered columns="equal">
                    <Grid.Row>
                        <Grid.Column><h1>2022 GR Supra</h1></Grid.Column>
                        <Grid.Column width={7}><h1 className="text red">$51,360.00 Starting MSRP<span
                            className={"disc"}>1</span></h1></Grid.Column>
                        <Grid.Column><Button color="red" size="big">Shop GR Supra</Button></Grid.Column>
                    </Grid.Row>
                </Grid>
                {/*</Sticky>*/}
            </div>
        );
    }
}

class Middlemenu extends Component {
    render() {
        return (
            <Container className="ui container">
                <br/>
                <Image className="ui fluid image"
                       src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dwc50a6fd8/images/model/GRSupra/hero/20_Supra_Hero_1498x331.jpg"
                       alt="Toyota Supra"/>
                <br/>
                <Grid fluid columns="equal">
                    <Grid.Row>
                        <Grid.Column className="front-supra-size">
                            <div className="ui container front-supra">
                                <h2>Find Your Supra</h2>
                                <h3>Pick your model, customize colors, options, and add accessories</h3>
                                <Button size="big" className="ui white button">Shop 2022 GR Supra</Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className="ui image" size="huge"
                                   src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dw426c9fe5/images/model/GRSupra/360/absolute-zero/20_GRSupra_3.0_AbsoluteZero_1.png"
                                   alt="Grey Supra"/>
                            <div>
                                <h4 className="ui center aligned header">CLICK & DRAG TO SEE 360° VIEW</h4>
                                <div className="ui center aligned equal width grid">
                                    <List horizontal className="car-colors">
                                        <List.Item className="square-white"/>
                                        <List.Item className="square-grey"/>
                                        <List.Item className="square-dark-grey"/>
                                        <List.Item className="square-red"/>
                                        <List.Item className="square-yellow"/>
                                        <List.Item className="square-off-grey"/>
                                        <List.Item className="square-black"/>
                                    </List>
                                </div>
                                <Header as="h2" textAlign="center">ABSOLUTE ZERO</Header>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br/>
                <br/>
                <br/>
                <div className="ui grid super-supra">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column className="text white column based" verticalAlign="bottom"
                                         style={{ marginBottom: "-1%" }}>
                                <h1>Designed To Move</h1>
                                <h3>Equally impressive on the track or on the streets, the 2022 GR Supra is driven by a
                                    single-minded focus on the feeling you experience behind the wheel. With its
                                    signature,
                                    turbocharged 3.0-liter 6-cylinder engine producing 382 horsepower3 and an impressive
                                    368 lb.-ft.
                                    of torque, GR Supra is ready to unleash pure driving pleasure at every turn.</h3>
                                <Button verticalAlign="middle" color="red" size="large">Search Inventory</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="ui grid inside-supra">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column className="text white column based" verticalAlign="bottom"
                                         style={{ marginBottom: "-1%" }}>
                                <h1>
                                    Where sport meets comfort
                                </h1>
                                <h3>
                                    Designed with the driver in mind, the 2021 GR Supra’s interior is the ideal blend of
                                    form, function and beauty incorporating traditional GT elements with ultra-modern
                                    functionality. And, with standard leather trim and deeply bolstered sport seats
                                    you’ll be comfortable and refreshed on every drive.
                                </h3>
                                <Button verticalAlign="middle" color="red" size="large">View Specs</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <br/>
                <br/>
                <Grid container verticalAlign={"middle"} centered columns={"equal"}>
                    <Grid.Row>
                        <Image
                            src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dwd4087563/v2/model/GRSupra/feature/22_Supra_Technology_700x418.jpg"
                            alt="infotainment"/>
                        <Grid.Column width={5}>
                            <h1>
                                Technology
                            </h1>
                            <h3>
                                Stay connected with advanced technology including wireless Apple CarPlay®<span
                                className={"disc"}>4</span>
                                compatibility, a
                                full-color Head-Up Display (HUD) and Qi-compatible wireless smartphone charging<span
                                className={"disc"}>5</span>.
                            </h3>
                            <Button size="large" color="red">Shop</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid container centered columns={"equal"}>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <h1>
                                Smart Safety
                            </h1>
                            <h3>
                                2021 GR Supra comes equipped with a number of intelligent safety features including Lane
                                Departure Warning with Steering Assist<span className={"disc"}>5</span>, a Pre-Collision
                                System<span className={"disc"}>6</span> with Pedestrian
                                Detection<span className={"disc"}>7</span>, Automatic High Beams<span className={"disc"}>8</span> and Speed Limit
                                Information<span className={"disc"}>9</span>.
                            </h3>
                            <Button size="large" color="red">Search Inventory</Button>
                        </Grid.Column>
                        <Image
                            src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dw85003694/v2/model/GRSupra/feature/22_Supra_SmartSafety_700x418.jpg"
                            alt="infotainment"/>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

class Exterior extends Component {
    render() {
        return (
            <Container className={"exterior background"}>
                <h1 className={"text white"}>Exterior</h1>
            </Container>
        );
    }
}

class Interior extends Component {
    render() {
        return (
            <Container className={"interior background"}>
                <h1 className={"text white"}>Interior</h1>
            </Container>
        );
    }
}

class SupraSpec extends Component {
    render() {
        return (
            <Container>
                <Header as={"h1"} size={"huge"}>Models</Header>
                <Grid container columns={"equal"} >
                    <Grid.Row columns={2}>
                        <Grid.Column width={3}>
                            <Segment.Group>
                                <Segment>
                                    <Image size="large" alt="red-supra"
                                           src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dwa3d2edf5/images/model/GRSupra/models/20_GRSupra_3.0.png"/>
                                </Segment>
                                <Segment>
                                    <h3 className="sub header">3.0</h3>
                                </Segment>
                                <Segment>
                                    <span className="ui large red header">$51,360 MSRP<span className="disc">1</span></span>
                                </Segment>
                                <Segment>
                                    <List bulleted>
                                        <List.Item>3.0-Liter Inline 6-Cylinder Engine</List.Item>
                                        <List.Item>19-In. Forged-Aluminum Twin-Spoke Wheels</List.Item>
                                        <List.Item>8.8-In. Touch-Screen Display</List.Item>
                                        <List.Item>Smart Key System11 with Smart Entry and Start</List.Item>
                                        <List.Item>Leather-Wrapped Steering Wheel</List.Item>
                                    </List>
                                </Segment>
                                <Segment>
                                    <List>
                                        <List.Item className={"text red"}>Compare</List.Item>
                                        <List.Item className={"text red"}>Shop</List.Item>
                                    </List>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Segment.Group>
                                <Segment>
                                    <Image size="large" alt="red-supra"
                                           src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dw9b012987/images/model/GRSupra/models/20_GRSupra_3.0Premium.png"/>
                                </Segment>
                                <Segment>
                                    <h3 className="sub header">3.0 Premium</h3>
                                </Segment>
                                <Segment>
                                    <span className="ui large red header">$54,510 MSRP<span className="disc">1</span></span>
                                </Segment>
                                <Segment>
                                    <List bulleted>
                                        <List.Item>3.0-Liter Inline 6-Cylinder Engine</List.Item>
                                        <List.Item>14-Way Power-Adjustable Leather-Trimmed Sport Seats</List.Item>
                                        <List.Item>Wireless Apple CarPlay®4</List.Item>
                                        <List.Item>Full-Color Head-Up Display (HUD)</List.Item>
                                        <List.Item>Qi-Compatible Wireless Charging</List.Item>
                                    </List>
                                </Segment>
                                <Segment>
                                    <List>
                                        <List.Item className={"text red"}>Compare</List.Item>
                                        <List.Item className={"text red"}>Shop</List.Item>
                                    </List>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

class Footer extends Component {
    render() {
        return(
            <div style={{backgroundColor: "red"}}>
                <Grid container columns="equal" style={{backgroundColor: "black"}}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image size="small" src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dw6fdba732/images/footer/2021_TH_Horizontal_2C_CMYK_White.svg"/>
                            <hr/>
                            <List>
                                <List.Item className={"text white"}>
                                    We're here for you.
                                    You've come to expect quality from our products; communication with us is no different.
                                    Please contact us or send us an email with your questions, comments or requests
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <List horizontal>
                                <List.Item>
                                    <Icon name="facebook f" circular inverted/>
                                </List.Item>
                                <List.Item>
                                    <Icon name="instagram" circular inverted/>
                                </List.Item>
                                <List.Item>
                                    <Icon name="youtube" circular inverted/>
                                </List.Item>
                            </List>
                            <hr/>
                            <List>
                                <List.Item className={"text white"}>
                                    We're here for you.
                                    You've come to expect quality from our products; communication with us is no different.
                                    Please contact us or send us an email with your questions, comments or requests
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <br/>
                            <br/>
                            <hr/>
                            <List className={"text white"}>
                                <List.Item>
                                    Find a Dealer
                                </List.Item>
                                <List.Item>
                                    Offers
                                </List.Item>
                                <List.Item>
                                    New Vehicle Warranty
                                </List.Item>
                                <List.Item>
                                    Toyota Hawaii Care
                                </List.Item>
                                <List.Item>
                                    Email Sign-Up
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <br/>
                            <br/>
                            <hr/>
                            <List className={"text white"}>
                                <List.Item>
                                    Accessibility
                                </List.Item>
                                <List.Item>
                                    Privacy Policy
                                </List.Item>
                                <List.Item>
                                    Terms of Use
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Utilitybar/>
                <Navbar/>
                <Stickynavbar/>
                <Middlemenu/>
                <br/>
                <Exterior/>
                <br/>
                <Interior/>
                <br/>
                <SupraSpec/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));