import React, { useState }  from "react";

const AwayTeam = () =>{
    const [awayScore, setAwayScore] =useState(0);
    return(
        <div className="topRow">  
    <div className="away">
    <h2 className="away__name">Tigers</h2>
    <div className="away__score">{awayScore}</div>
    </div></div>
    
    )
}
 export default AwayTeam;