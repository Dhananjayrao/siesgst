import React from "react"
import "./Header.css"

function Header (){
return (
<div className={"Header"}>
<img src="https://yt3.ggpht.com/a/AGF-l7-R97RMeaNI1o0-vGveZV-YJiOG6iSbvNq_6g=s900-mo-c-c0xffffffff-rj-k-no" className="image"></img>    
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>HOME</button>
</div>
<div className={"dropdown"}>
  <button className={"dropbtn"}>Academics</button>
  <div className={"dropdown-content"}>
  <a href="#">Humanities and applied Sciences</a>
  <a href="#">Computer Engineering</a>
  <a href="#">Mechanical Enginneering</a>
  <a href="#">Electronics and telecommunications</a>
  <a href="#">Printing and packaging technology</a>
  </div>
</div>
<div className={"dropdown"}>
  <button className={"dropbtn"}>About us</button>
  <div className={"dropdown-content"}>
  <a href="#">Overview</a>
  <a href="#">Managing committee</a>
  <a href="#">vision and mission</a>
  <a href="#">The principal</a>
  <a href="#">Core values</a>
  <a href="#">Organisation and governance</a>
  </div>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>ADMISSIONS</button>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>CAREERS</button>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>AMENITIES</button>
<div className={"dropdown-content"}>
  <a href="#">Library</a>
  <a href="#">eyeyantra</a>
  <a href="#">computer center</a>
  <a href="#">intranet</a>
  <a href="#">auditorium and halls</a>
  <a href="#">aakash project labs</a>
  </div>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>LIFE@GST</button>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>ALUMNI</button>
</div>
<div className={"dropdown"}>
<button href="http://localhost:3000/" className={"dropbtn"}>CIIED</button>
</div>
</div>
)
}
export default Header;