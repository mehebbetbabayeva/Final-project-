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
import { useState } from 'react';

interface FormData {
  message: string;
  name: string;
  email: string;
  subject: string;
}
const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({ message:'',name: '', email: '',subject:'' });
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ message: '', name: '', email: '', subject: '' });
  };
 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  };
  const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  };

  return (
    
    <>
      <PageTitle text="Contact Us"/>
      <div className="contact-us">
        <div className="container">
          <div className="contact-us-content">
            <form action=""  onSubmit={handleSubmit}>
              <h1>Get in Touch</h1>
              <textarea   placeholder="Enter Message" name="message" value={formData.message} onChange={handleTextChange}></textarea>
              <div className="input-grp">
                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange}/>
                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange}/>
              </div>
              <input type="text" placeholder="Enter your subject"  name="subject" value={formData.subject} onChange={handleChange}/>
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