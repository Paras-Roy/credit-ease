import "./home.scss"
import Banner from './banner/Banner'
import Form from './form/Form'

const Home = () => {
    return ( 
        <div className="home">
            <Banner/>
            <Form/>
        </div>
     );
}
 
export default Home;