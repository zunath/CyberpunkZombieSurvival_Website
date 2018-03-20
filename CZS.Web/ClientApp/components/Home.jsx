import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import SS1 from '../images/compressed/CZS_Screenshot_1-min.png';
import SS2 from '../images/compressed/CZS_Screenshot_2-min.png';
import SS3 from '../images/compressed/CZS_Screenshot_3-min.png';
import SS4 from '../images/compressed/CZS_Screenshot_4-min.png';
import SS5 from '../images/compressed/CZS_Screenshot_5-min.png';
import SS6 from '../images/compressed/CZS_Screenshot_6-min.png';
import SS7 from '../images/compressed/CZS_Screenshot_7-min.png';
import SS8 from '../images/compressed/CZS_Screenshot_8-min.png';
import SS9 from '../images/compressed/CZS_Screenshot_9-min.png';
import SS10 from '../images/compressed/CZS_Screenshot_10-min.png';

export default class Home extends React.Component {
    render() {
        return (
            <div>

                <h1 className="center">Welcome to Cyberpunk Zombie Survival!</h1>
                <h3 className="center">A Neverwinter Nights: Enhanced Edition Server</h3>
                <h4 className="center">
                    Direct Connect: czs.eastus.cloudapp.azure.com:5121 <Link to="/downloads"><i>(Download Files)</i></Link>
                </h4>

                <h5 className="center">
                <i><a href="http://store.steampowered.com/app/704450/Neverwinter_Nights_Enhanced_Edition/" target="_blank">Buy NWN today on Steam</a></i> or <i><a href="https://www.beamdog.com/products/neverwinter-nights-enhanced-edition#signup-form" target="_blank">directly from Beamdog! </a></i>
                </h5>

                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true} dynamicHeight={true}>
                    <div>
                        <img src={SS7} alt="Screenshot 1" className="img-fluid" />
                    </div>
                    <div>
                        <img src={SS8} alt="Screenshot 2" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS9} alt="Screenshot 3" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS5} alt="Screenshot 5" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS6} alt="Screenshot 6" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS1} alt="Screenshot 7" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS2} alt="Screenshot 8" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS3} alt="Screenshot 9" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={SS4} alt="Screenshot 10" className="img-fluid"/>
                    </div>

                </Carousel>

            </div>
        );



    }
}
