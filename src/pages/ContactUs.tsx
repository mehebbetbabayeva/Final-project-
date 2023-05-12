import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import {AiOutlineHome} from "react-icons/ai";
import {BsPhone  , BsEnvelopeAt} from "react-icons/bs";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HouseIcon from '@mui/icons-material/House';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
const ContactUs = () => {
  return (
    <>
      <PageTitle text="Contact Us"/>
      <div className="contact-us">
        <div className="container">
          <div className="contact-us-content">
            <form action="">
              <h1>Get in Touch</h1>
              <textarea name="" id="" placeholder="Enter Message"></textarea>
              <div className="input-grp">
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email"/>
              </div>
              <input type="text" placeholder="Enter your subject"/>
              <Button text="SEND MESSAGE"/>
            </form>
            <div className="contact">
                 <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HouseIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Buttonwood, California." secondary="Rosemead, CA 91770" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="00 (440) 9865 562" secondary="Mon to Fri 9am to 6pm" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="support@colorlib.com" secondary="Send us your query anytime!" />
      </ListItem>
    </List>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs