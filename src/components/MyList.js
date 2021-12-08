import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, Link } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'
import myImage from '../assets/img/avi.JPG'

function MyList() {

    return (

        // user?(
            <List>
            <Avatar 
                src={myImage}
                style={{height:100 , width:100 , marginRight:"auto" , marginLeft:"auto" , marginBottom:"10px",marginTop:"30px"}}
                />
              <a href="/#about" className="headernav" style={{color:"#000", opacity:0.5 , display:"flex" , alignItems:"center" }}>
                <ListItem >
                      <ListItemText primary="About" />
                </ListItem>
              </a>
              
              <Link href="/#skills" className="headernav" style={{ color:"#000", opacity:0.5  , display:"flex" , alignItems:"center", textDecoration:"none"}}>
                <ListItem>
                      <ListItemText primary="Skills" />
                </ListItem>
              </Link>

              <Link href="/#projects" className="headernav" style={{ color:"#000", opacity:0.5  , display:"flex" , alignItems:"center", textDecoration:"none"}}>
                <ListItem>
                      <ListItemText primary="Projects" />
                </ListItem>
              </Link>
              <Link href="/#socials" className="headernav" style={{color:"#000", opacity:0.5  , display:"flex" , alignItems:"center", textDecoration:"none"}}>
              <ListItem>
                      <ListItemText primary="Socials" />
                </ListItem>
              </Link>
              <hr style={{color:"#636262" , width:"90%", opacity:0.2}}/>
            </List>
        
    )
}

export default MyList
