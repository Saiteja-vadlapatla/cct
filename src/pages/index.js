import * as React from "react";
import { AppBar, Toolbar, Button, IconButton, Typography } from "@material-ui/core";
import CoreIcon from "../images/CoreIcon";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const appBar = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%"
}

const coreLogoStyle = {
  width: "100px"
}

const toolbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const menus = {
  display: "flex",
  alignItems: "center"
}

// markup
const IndexPage = () => {
  const contactsRef = React.useRef(null);

  function scrollToContacts(){
    // contactsRef.current?.scrollIntoView({behavior: "smooth"});
    if(contactsRef.current) {
      contactsRef.current.scrollIntoView({behavior: "smooth"});
    }
    return;
  };

  return (
    <div style={pageStyles}>
      <title>Core Carbide Tools</title>
      <body>
        <AppBar position="static" style={appBar}>
          <Toolbar style={toolbar}>
            <Button variant="text">
              <img style={coreLogoStyle} src="favicon.png" alt="Core Carbide Tools" />
            </Button>
            <Typography variant="h5" style={{ marginLeft: "250px" }}>Core Carbide Tools</Typography>
            <div style={menus}>
              <Button color="inherit">Products</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Gallery</Button>
              <Button onClick={scrollToContacts} color="inherit">Contact</Button>

            </div>
          </Toolbar>
        </AppBar>
        <div>
          <div style={{margin: "26% 33%", position: "absolute"}}>
            <Typography variant="h4"><strong>Perfection, to the core.</strong></Typography>
          </div>
          <img style={{ width: "100%", opacity: "50%" }} src="https://i.ibb.co/BnzWzZg/DSC-0089-2.jpg" alt="DSC-0089-2" border="0" />
        </div>
        <div style={{display: "flex", flexDirection:"column", marginTop: "110px"}} ref={contactsRef}>
          <Typography variant="h6"><strong>Contact:</strong></Typography>
          <span><strong>Email:&nbsp;</strong>corecarbidetools.vv@gmail.com</span>
          <span><strong>Phone:&nbsp;</strong>+91 9490117883</span>
        </div>
      </body>

    </div>
  )
}

export default IndexPage
