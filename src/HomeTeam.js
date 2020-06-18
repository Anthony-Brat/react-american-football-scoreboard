import React,  { useState } from "react";

const HomeTeam = () =>{
    const [homeScore, setHomeScore] = useState(0);
    return(
        <div className="topRow">   
    <div className="home">
    <h2 className="home__name">Lions</h2>
    <div className="home__score">{homeScore}</div>
    </div></div>
   

    )
}
 export default HomeTeam;
 