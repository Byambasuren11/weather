import Home from "./icons/Home";
import Location from "./icons/location";
import Heart from "./icons/Heart";
import Person from "./icons/Person";

const Footer = () => {
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