'use client';
import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, useTheme } from 'styled-components';

const Button: any = styled.button`
  background-color: ${(props: any) =>
    props.variant == 'success'
      ? '#62f639'
      : props.variant === 'danger'
        ? '#d84040'
        : props.variant === 'warning'
          ? 'orange'
          : props.variant === 'info'
            ? 'cornflowerblue'
            : props.variant === 'black'
              ? 'black'
              : props.variant === 'white'
                ? 'white'
                : 'transparent'};
  width: auto;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  padding : 0 10px;
  font-size: 16px;
  color: ${(props: any) => (props.variant === 'outline' ? '#aaa' : props.variant === 'black' ? 'white' : 'black')};
  border: ${(props: any) => (props.variant === 'outline' ? '2px solid #aaa' : 'none')};
`;

const SecondButton = styled(Button).attrs({ type: 'submit', as: 'a' })`
  box-shadow: none;
  transition: all 300ms linear;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 2px 2px 1px #2c2c2c;
  }
`;

const GlobalStyles = createGlobalStyle`
button {
  background-color : darkred;
  width: 85px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor : pointer;
  transition : all 250ms linear;
&:hover { transform : translateY(-3px) }
}
`;

const Dark = {
  title: 'DARK',
  background: 'black',
  color: 'white'
}

const Light = {
  title: 'LIGHT',
  background: 'white',
  color: 'black'
}

const Section = styled.section`
  width : 90vw;
  height : 50vh;
  margin : 0.2rem 1rem ;
  border-radius : 0.8rem;
  padding : 1rem ;
  background-color : ${(props: any) => props.theme.background};
  color : ${(props: any) => props.theme.color};
  display : flex;
  align-items : center;
  justify-content : center;
  font-size : 24px;
  font-weight : 900;
`
// COMPONENT
function StyledComponentsPage() {
  // const THEME = useTheme()
  const [theme, setTheme] = useState(Dark)
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className="flex flex-col items-center gap-4 p-10">
          <div className='flex items-center gap-3'>
            <Button variant="success">SUCCESS</Button>
            <Button variant="outline">OUTLINE</Button>
            <Button variant="danger">DANGER</Button>0
            <Button variant="warning">WARNING</Button>
            <Button variant="info">INFO</Button>
            <Button variant="black">BLACK</Button>
            <Button variant="white">WHITE</Button>
            <SecondButton href="/" variant="black"> WHITE </SecondButton>
            <button>CLICK ME</button>
          </div>
          <div className='flex m-0 text-2xl font-black pl-8 items-center justify-between w-full px-5'>
            <h2>{theme.title}</h2>
            <Button variant={theme.title == 'DARK' ? 'black' : 'white'} onClick={() => setTheme(theme === Dark ? Light : Dark)} >{theme.title == "DARK" ? <Sun /> : <Moon />}</Button>
          </div>
          <Section>
            <h2>TITLE</h2>
          </Section>
        </div >
      </ThemeProvider>
    </>
  );
}

export default StyledComponentsPage;
