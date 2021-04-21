import React from "react";
import AddIcon from '@material-ui/icons/Add';


import "./Sidebar.css";
function Sidebar(){
    return(
    <div className="sidebar">
        <h3>Can I convert the hike from 27.5 to 29  <AddIcon className="icon"/></h3><hr/>
        <h3>Can I mount a chainguide to my bike  <AddIcon className="icon"/></h3><hr/>
        <h3>How does the Chainstay length work  <AddIcon className="icon"/></h3><hr/>
    </div>
    )
}
export default Sidebar