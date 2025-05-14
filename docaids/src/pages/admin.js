import React from "react";
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import Cardss from "./Carrd";
import Nave from "./Nave";
// import './admin.css'

function Admin(){
    return(
        <div className="fl">
            <div className="ca"><Nave /></div>
         <div className="ca"><Cardss /></div>
         </div>
     );
 }
 export default Admin;