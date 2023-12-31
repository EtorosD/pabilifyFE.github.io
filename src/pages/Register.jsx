import styled from "styled-components"
import {mobile} from "../reponsive"
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ), 
  url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80") center;

  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-wrap:wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color:royalblue;
  color:white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate(); 


  const handleClick = (e)=> {
    e.preventDefault()
    register(dispatch,{ username, email, password});
    navigate('/login'); 
  }
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="username"
            onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="email"
            onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)}/>
            <Agreement>
              By creating an account, I consent to processing
              of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick} disabled={isFetching} >CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

