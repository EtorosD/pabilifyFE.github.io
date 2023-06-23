import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {mobile} from "../reponsive"
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem =styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const EmailLink = styled.a`
    margin-right: 10px;
`;

const CallLink = styled.a`
    margin-right: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PABILIFY</Logo>
            <Desc>
                PABILIFY is merchandise store from movie heroes like Guardian of the Galaxy Volume 3,
                Doctor Strange: Multiverse of Madness and Ant-Man and the Wasp Quantumania
            </Desc>
            <SocialContainer>

                <a href="https://www.facebook.com">
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                </a>

                <a href="https://www.instagram.com/">
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                </a>

                <a href="https://www.linkedin.com/">
                <SocialIcon color="0000FF">
                    <LinkedInIcon/>
                </SocialIcon>
                </a>

            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>

                <ListItem>
                <Link to="/">
                    Home
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/cart">
                    Cart
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/products/toys">
                    Toys
                </Link>  
                </ListItem>
                <ListItem>
                <Link to="/products/clothings">
                    Clothing
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/products/mugs">
                    Mugs
                </Link>
                </ListItem>
            </List>
        </Center>

        <Right>

            <Title>Contact</Title>

                <ContactItem>
                <LocationOnIcon style={{marginRight:"10px"}}/> 1304 C.M. Recto Avenue Manila City
                </ContactItem>
                
                <ContactItem>
                <CallLink href="tel:+639956694967">
                <LocalPhoneIcon style={{marginRight:"10px"}}/>+639956694967
                </CallLink>

                </ContactItem>

                <ContactItem>
                <EmailLink href="mailto:contactpabilify@gmail.com">
                <MailOutlineIcon style={{ marginRight: "10px" }} />
                        contactpabilify@gmail.com
                </EmailLink>
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right>
    </Container>
  )
}

export default Footer