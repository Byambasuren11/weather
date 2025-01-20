import Home from "./icons/Home";
import Location from "./icons/Location";
import Heart from "./icons/Heart";
import Person from "./icons/Person";

const Footer = (props) => {
  return (
    <div className="flex justify-around gap-14">
      <Home/>
      <Location/>
      <Heart/>
      <Person/>
    </div>
  );
};
export default Footer;