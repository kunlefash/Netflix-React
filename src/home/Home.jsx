import "./home.scss" 
import Navbar from "../components/navbar/Navbar";
import List from "../components/navbar/list/List"
import Featured from "../components/navbar/featured/Featured";
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
                    
        </div>
        
    )
}

export default Home 
