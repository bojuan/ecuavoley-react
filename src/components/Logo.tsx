import Ecuavoleylogo from "../assets/EcuavoleyLogo.svg";
import { useGlobalContext } from "../context/MyGlobalContext";

const Logo = () => {
    const {
        
        section
      } = useGlobalContext();
  return (
    <div className={`logo ${section === 'game' ? 'logo--game':''}`}>
      <img alt="ecuavoley" src={Ecuavoleylogo} />
    </div>
  );
};

export default Logo;
