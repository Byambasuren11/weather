import Home from "./icons/Home";
import Location from "./icons/Location";
import Heart from "./icons/Heart";
import Person from "./icons/Person";
//import Skeleton from "react-loading-skeleton";
import Loader from "./Skelton-Loader";

const onClick=()=>{
 console.log("hoho")
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