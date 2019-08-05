import React from "react"
import "./Footer.css"
function Footer(){
    return(
    <div className={"Footer"}>
    <div className={"text1"}>
        <h1>contact us</h1>
        <p><span><b>Address-</b></span>Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Dr D Y Patil Vidyanagar, Sector 5, Nerul, Navi Mumbai, Maharashtra 400706</p>
    </div>
    <div className={"contact"} >
        <a href="#"><img src="https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png" className={"icon"}></img></a>
        <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" className={"icon"}></img></a>
        <a href="#"><img src="https://cdn0.iconfinder.com/data/icons/material-circle-apps/512/icon-email-material-design-512.png" className={"icon"}></img></a>
        <a href="#"><img src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B.png" className={"icon"}></img></a>
    </div>
    </div>
    )
}
export default Footer;