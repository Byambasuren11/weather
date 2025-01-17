import Home from "./icons/Home";
import Location from "./icons/location";
import Heart from "./icons/Heart";
import Person from "./icons/Person";

const onClick=()=>{
  
}
const Footer = (props) => {
  return (
    <div className="flex justify-around gap-14">
      <Home/>
      <Location/>
      <Heart onClick={onClick}/>
      <Person/>
    </div>
  );
};
export default Footer;