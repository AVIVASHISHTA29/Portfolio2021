import React from 'react'
import instaLoop from '../assets/img/instaLoop.gif'
import instaQR from '../assets/img/instaQR.jpg'
function AboutMe() {
    const [showInsta, setShowInsta] = React.useState(true)
    const onClick2 = () => setShowInsta(false)

    return (
        <div id="about" style={{display:"flex",alignItems:"center"}}>
            <img className="instaLoop" src={instaLoop} alt="Iphone Loop" width="30%"/>
            <div className="aboutMe">
                <h1>About Me <strong style={{color:"#f5576c"}}>.</strong></h1>
                <p className="para" style={{width:"70%", marginLeft:"auto",marginRight:"auto"}}>A 19 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an App Developer.
                <br/>
                <br/>
                Is an Amateur Investor and keeps a keen interest in Social Media. Was one of the first teen-brand ambassadors for <a href="www.fampay.in" style={{opacity:1,color:"#000",textDecoration:"underline"}}>fampay.in</a></p>
                <br/>
                <br/>
                <p className="cartoonText" style={{fontSize:"150%",color:"#f5576c",textAlign:"left"}}> ~ Hey, That's me!</p>
            
                {
                    showInsta ?
                
                <div className="idCard idCard2" style={{marginLeft:"auto",marginRight:"auto",width:"70%",display:"flex",flexDirection:"column",marginTop:30,border:"2px solid lightgrey",borderRadius:10}}> 
                        <div style={{padding:5,width:"100%",backgroundColor:"#ededed",fontSize:"150%",borderBottom:"1px solid lightgrey",height:25,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center",justifyContent:"start"}}>
                            <h1 onClick={onClick2} style={{zIndex:50,marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                        </div>
                        <a href="https://instagram.com/avi_vashishta29">
                        <div style={{display:"flex", alignItems: 'center',padding:20}}>
                            <img src={instaQR} className="dp2"/>
                            <div className="instaTag" style={{padding:20 , fontSize:"80%"}}>
                                <h1>@avi_vashishta29</h1>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>Scan my instagram QR Code!</h3>
                            </div>
                        </div>
                        </a>
                </div>
                
                : 
                
                <br/> 

                }

            </div>
        </div>
    )
}

export default AboutMe
