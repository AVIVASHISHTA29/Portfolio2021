import React from 'react';
import iphoneImg from '../assets/img/iphoneAnonimo.png';
import macLw from '../assets/img/macLw.png';
import textBubble from '../assets/img/textbubble.gif';

function IntroComponent() {
    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(false)

    return (
        
        <div className="IntroComponent">
            <div className="IntroComponentWrapper" style={{padding:20 , width:"50%"}}>
                <div style={{fontSize:"150%"}}><h1 className="headingIntro">Web Developer <strong style={{color:"var(--blue)"}}>.</strong></h1></div>
                    <img src={textBubble} className="textBubble"/>
                    {/* {imageIntro2 ? <h1 onClick={onClickImageIntro2} className="headingIntro">App & Game Dev</h1> : <h3 onClick={onClickImageIntro2} className="subHeadingIntroComponent">App & Game Dev</h3> }
                    {imageIntro3 ? <h1 onClick={onClickImageIntro3} className="headingIntro">Investing</h1> : <h3 onClick={onClickImageIntro3} className="subHeadingIntroComponent">Investing</h3> }
                    {imageIntro4 ? <h1 onClick={onClickImageIntro4} className="headingIntro">Social Media & Content Creation</h1> : <h3 onClick={onClickImageIntro4} className="subHeadingIntroComponent">Social Media & Content Creation</h3> } */}
                    {/* <h3 onClick={onClickImageIntro2} ></h3>
                    <h3 onClick={onClickImageIntro3} className="subHeadingIntroComponent"></h3>
                    <h3 onClick={onClickImageIntro4}className="subHeadingIntroComponent"></h3> */}
                    
                    {/* <img className="textBubble" src={textBubble} alt="Text Image" width="100%"/> */}
                    {/* <DraggableList items={'web-dev app-dev social-media content'.split(' ')}/> */}
                    <div className="hiddenText">
                        <p  style={{color:"#000",opacity:0.5 }}>Hey There! I am Avi Vashishta - A Self Taught Web Developer. Welcome to my Professional Portfolio.</p>
                        <div style={{display:"flex"}}>
                            <a href="/" onClick={(e) => {
                const menu = document.getElementById('socials');
                e.preventDefault();
                menu &&
                 menu.scrollIntoView({behavior: 'smooth', block: 'start'});
                // if (window.location.href!='http://localhost:3000/') {
                //   location.href = '/#about';
                // }
              }}><button className="btn">Connect Now</button></a>
                            <a href="/" onClick={(e) => {
                const menu = document.getElementById('projects');
                e.preventDefault();
                menu &&
                 menu.scrollIntoView({behavior: 'smooth', block: 'start'});
                // if (window.location.href!='http://localhost:3000/') {
                //   location.href = '/#about';
                // }
              }}><button className="btn2">My Projects</button></a>
                        </div>
                     </div>
                     { showResults ?
                    <div className="idCard" style={{display:"flex",flexDirection:"column",marginTop:30,border:"2px solid lightgrey",borderRadius:10}}> 
                        <div style={{padding:5,width:"100%",backgroundColor:"#ededed",fontSize:"150%",borderBottom:"1px solid lightgrey",height:25,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center",justifyContent:"start"}}>
                            <h1 onClick={onClick} style={{marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                        </div>
                        <div style={{display:"flex", alignItems: 'center',padding:20}}>
                            <img src="https://i.ibb.co/Bswp8RS/avi.jpg" className="dp"/>
                            <div className="idText" style={{padding:20 , fontSize:"80%"}}>
                                <h1>Avi Vashishta</h1>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>CS Student @ IIITD</h3>
                            </div>
                        </div>
                    </div> : <br/>
                    }
            </div>
           
            <div className="imageIntro" id="imageIntro1">
                <img className="iphoneImg" src={iphoneImg} alt="Anonimo Iphone" width="50%"/>
                <span style={{fontSize:"150%"}}className="specialtext"><p style={{left:"-120px",position:"relative",marginTop:-45,textAlign:"right",color:"orange"}} className="cartoonText cartoonTextIntro">More of such interesting projects ~</p></span>
                <img className="macLw" src={macLw} alt="Mac Image" width="100%"/>
            </div>
            
        </div>
    )
}

export default IntroComponent
