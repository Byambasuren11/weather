const Air=(props)=>{
    const{air}=props;
    if(air>=300){
        return "Hazerdous";
    }
    else if(air<300 && air>=200){
        return ("Very Unhealthy ");
    }
    else if(air<200 && air>=150){
        return ("Unhealthy ");
    }
    else if(air<150 && air>=100){
        return ("Unhealthy for sensitive group");
    }
    else if(air<100 && air>=50){
        return ("Moderate ");
    }
    else {
        return ("Good");
    }
}
export default Air;