import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

function DialogProjects({imgSrc,src,description,github}) {

    const [open, setOpen] = React.useState(false);
    const [size,setSize] = React.useState("xl");

    const handleClickOpen = () => {
      setOpen(true);
      setSize("xl");
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const changeSize = () => {
        if(size=="xl")
        setSize("md");
        else
        setSize("xl");
      };

    return (
        <div>
            <div className="projectCard" variant="outlined" onClick={handleClickOpen}>
              <img src={imgSrc} style={{width:"100%",height:"100%",borderRadius:7}}/>
              {/* <iframe  src={src} className="iframeFrame" style={{width:"100%",height:"100%",borderRadius:7}}/> */}
            </div>
            <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={size}
        maxWidth={size}
      >

        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
            🇭<div className="" style={{marginLeft:"auto",marginRight:"auto",width:"100%",display:"flex",flexDirection:"column",marginTop:0,border:"0px solid lightgrey",borderRadius:0}}> 
                        <div style={{marginTop:-25,padding:5,width:"100%",backgroundColor:"#f0f0f0",fontSize:"150%",borderBottom:"1px solid lightgrey",height:30,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center"}}>
                            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                                <h1 onClick={handleClose} style={{zIndex:50,marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                                <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                                <h1 onClick={changeSize} style={{marginTop:10,cursor:"pointer"}}><strong style={{color:"#27C841"}}> .</strong></h1>
                            </div>
                            {/* <div style={{fontSize:"60%",color:"grey",paddingLeft:10,margin:1,borderRadius:5,backgroundColor:"#e3e3e3",marginleft:"auto",marginRight:"auto",width:"50%",display:"block"}}>
                                www.avivashishta.com
                            </div> */}
                        </div>
                        <div style={{display:"flex",flexDirection: 'column',borderRadius:0}}>
                            <div className="iframeDiv">
                                <iframe allowFullScreen src={src} className="iframeFrame"/>
                            </div>
                            <div className="instaTag" style={{padding:20 , fontSize:"80%"}}>
                                <div style={{display:"flex",flexDirection:"row",justifyContent:"start",alignItems: "center"}}>
                                <h1>Description</h1>
                                <span style={{float:"right",marginLeft:"auto",display:"block"}} className="headernav">
                                <a href={src}><OpenInNewIcon style={{marginRight:10}}/></a>
                                {
                                github ? <a href={github}><CodeIcon/></a>
                                : <></>
                                }
                                </span>
                                </div>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>
                                  {description}                                
                                </h3>
                            </div>
                        </div>
                </div>
      </Dialog>
        </div>
    )
}

export default DialogProjects
