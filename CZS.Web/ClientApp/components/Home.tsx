import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import * as SS1 from '../images/compressed/CZS_Screenshot_1-min.png';
import * as SS2 from '../images/compressed/CZS_Screenshot_2-min.png';
import * as SS3 from '../images/compressed/CZS_Screenshot_3-min.png';
import * as SS4 from '../images/compressed/CZS_Screenshot_4-min.png';
import * as SS5 from '../images/compressed/CZS_Screenshot_5-min.png';
import * as SS6 from '../images/compressed/CZS_Screenshot_6-min.png';
import * as SS7 from '../images/compressed/CZS_Screenshot_7-min.png';
import * as SS8 from '../images/compressed/CZS_Screenshot_8-min.png';
import * as SS9 from '../images/compressed/CZS_Screenshot_9-min.png';
import * as SS10 from '../images/compressed/CZS_Screenshot_10-min.png';

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>

                <h1 className="center">Welcome to Cyberpunk Zombie Survival!</h1>
                <h3 className="center">A NeverWinter Nights Server</h3>
                <h5 className="center">
                    Direct Connect: czs.eastus.cloudapp.azure.com:5121 <Link to="/downloads"><i>(Download Files)</i></Link>
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
