import styled, { createGlobalStyle } from "styled-components";
import Roboto from "./fonts/Roboto-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
html {

}
body {
color: white; 
    margin: 0; 
}

@font-face {
		font-family: Roboto;
		src: url(${Roboto});
}

:root{
    --blue: #03e9f4;
    --green: #18f807;
    --black: #202124;
  }
`

export const LoginStyle = styled.div`
background: rgba(32, 33, 36, 0.9);
  /* animation: neon 2s ease infinite; */
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1{
    padding: 10px;
  }

  form {
    padding: 10px; 
    font-size: medium;
    display: grid; 
    justify-items: center; 
    gap: 30px;
  }

  label {
    margin: 30px; 
  }

  input {
    animation: neon 2s ease infinite;
    background-color: var(--black);
    border: 3px solid var(--green);
    border-radius: 25px;
        height: 30px;
    width: 30vh;
    padding: 10px;
        box-shadow: 0 0 5px 0, 0 0 10px 2px;
    text-transform: uppercase;
    outline: none;

  }

  button {
animation: neon 2s ease infinite;
    color: var(--blue);
    background-color: var(--black);
    border: 3px solid var(--black);
    border-radius: 25px;
    padding: 10px;
    margin-top: 10px;
  }

@keyframes neon {
    0% {
      color: var(--blue);
      border-color: var(--blue);
    }
    50% {
      color: var(--green);
      border-color: var(--green);
    }
    100% {
      color: var(--blue);
      border-color: var(--blue);
    }
  } 
  
`;

export const AsideStyle = styled.div`
background-color: rgba(105, 106, 109, 0.9);


ul{
    display: flex;
    width: 150px;
    padding: 0;
    margin: 0;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
    border-right: 1px solid;
    margin-top: 20px;
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Roboto;
}

img{
    width: 20px;
}

a{
    text-decoration: none; 
    list-style: none;
    color: black;
}
`
export const ChallengeStyle = styled.div`
    display: flex;
    width: 800px;
    flex-direction: column;
    align-items: center;
`

export const NavBarStyle = styled.div`
background-color: rgba(32, 33, 36, 0.9);
width: 100%; 
height: 100%; 
font-family: Roboto;
position: fixed; 
nav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    width: 100%;
}
.logo{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.list{
    display: flex;
    padding: 0px;
    list-style: none;
    gap: 20px;
}


`
export const LogOutBtn = styled.div`
border: none;
background-color: rgba(32, 33, 36, 0.9);
img {
    
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 15px; 
  }
    `

export const HomeStyle = styled.div`

.body {
    display: flex;
}
`