import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
function Footer() {

    return (
        < >
        <div id="socials" style={{display:"flex",borderTop:"1px solid #ededed",paddingLeft:20,width:"100%",alignItems:"center"}}>
           <div >
                <h1 style={{textAlign:"left",width:"auto"}}>Avi Vashishta <strong style={{color:"red"}}>.</strong></h1>
                <span style={{fontSize:"150%"}} className="specialtext">< p style={{textAlign:"center",color:"red"}} className="cartoonText cartoonText2">Until Next Time :p</p></span>
           </div>
           <p className="lastText" style={{textAlign:"center",marginLeft:"auto",width:"auto",fontWeight:"bolder",opacity:0.5}}>
            Designed and Developed by Me © 2021
            </p>
        </div>
        <div className="socialLinks" style={{display:"flex",alignItems:"center",justifyContent:"end",marginLeft:'auto',paddingBottom:30}}>
            <a className="headernav" href="https://instagram.com/avi_vashishta29" style={{marginTop:-20}}> <FontAwesomeIcon icon={faInstagram} size="2x"/></a>
            <a className="headernav" href="https://www.linkedin.com/in/avi-vashishta-28b3308a/"  style={{marginTop:-20}}> <FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a className="headernav" href="https://www.facebook.com/avi.vashishta.5/"  style={{marginTop:-20}}> <FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a className="headernav" href="mailto: avivashishta@gmail.com" style={{marginTop:-20}}> <FontAwesomeIcon icon={faGoogle} size="2x"/></a>
        </div>
        <span style={{display:"none",fontSize:"150%"}} className="specialtext2">< span style={{textAlign:"left",color:"red"}} className="cartoonText">Until Next Time :p</span></span>

        </>
    )
}

export default Footer
