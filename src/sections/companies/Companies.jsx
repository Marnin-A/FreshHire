import './Companies.css'
import HubSport from "../../assets/HubSpot.png"
import Tesla from "../../assets/Tesla.png"
import Microsoft from "../../assets/Microsoft.png"
import Udemy from "../../assets/Udemy.png"
import Google from "../../assets/Google.png"
import Figma from "../../assets/Figma.png"

const Companies = () => {
  return (
    <div className="companies">
        <div className="companies__container">
            <h2>Trusted by 1000+ best hiring companies world wide</h2>
            <div className="companies__logos">
                <img src={Google} alt="google" />
                <img src={HubSport} alt="hubspot" />
                <img src={Figma} alt="figma" />
                <img src={Udemy} alt="udemy" />
                <img src={Tesla} alt="tesla" />
                <img src={Microsoft} alt="microsoft" />
            </div>
        </div>
    </div>
  )
}

export default Companies