import Carosel from "../components/carousel/Carosel"
import { Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
        
          <div className='headline home'>
                    <h1>International Cultural Summit of 2023</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper vitae orci eget egestas. Aliquam quam nulla, fermentum eget ex id, egestas laoreet diam. Suspendisse leo quam, porta at faucibus a, aliquet id nibh. Vestibulum ante ipsum primis in faucibus.</p>
                  
                    <Link to="*"> <button className="btn">Attend</button></Link>
                </div>
            <Carosel/>
       </div>
    )
}

export default Home