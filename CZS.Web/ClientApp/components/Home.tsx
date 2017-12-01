import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import * as SS1 from '../images/CZS_Screenshot_2.png';
import * as SS2 from '../images/CZS_Screenshot_1.png';
import * as SS3 from '../images/CZS_Screenshot_3.png';
import * as SS4 from '../images/CZS_Screenshot_4.png';
import * as SS5 from '../images/CZS_Screenshot_5.png';

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div>

                <h1 className="center">Welcome to Cyberpunk Zombie Survival!</h1>
                <h3 className="center">A NeverWinter Nights Server</h3>
                <h5 className="center">
                    Direct Connect: czs.eastus.cloudapp.azure.com:5121
                </h5>


                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} stopOnHover={true}>
                    <div>
                        <img src={SS1} alt="Screenshot 1"/>
                    </div>
                    <div>
                        <img src={SS2} alt="Screenshot 2"/>
                    </div>
                    <div>
                        <img src={SS3} alt="Screenshot 3"/>
                    </div>
                    <div>
                        <img src={SS4} alt="Screenshot 4"/>
                    </div>
                    <div>
                        <img src={SS5} alt="Screenshot 5"/>
                    </div>

                </Carousel>

            </div>
        );



    }
}
