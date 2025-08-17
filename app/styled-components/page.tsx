'use client';
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

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
  width: 85px;
  height: 35px;
  border-radius: 8px;
  font-weight: 700;
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
&:hover { rotate : -3deg }
}
`;



const Dark = {
  div: 'black',
  title: '#fff',
  desc: '#b6b6b6'
}
const Light = {
  div: '#fff',
  title: 'black',
  desc: '#b6b6b6'
}

const Div = styled.div`
  background-color : ${(props: any) => props.theme.div};
  padding : 1rem;
  color : ${(props: any) => props.theme.title};
  border-radius : 15px;
`
// COMPONENT
function StyledComponentsPage() {
  const [theme, setTheme] = useState(Dark)
  return (
    <>
      <GlobalStyles />
      <div className="flex items-center gap-4 p-10">
        <Button variant="success">SUCCESS</Button>
        <Button variant="outline">OUTLINE</Button>
        <Button variant="danger">DANGER</Button>
        <Button variant="warning">WARNING</Button>
        <Button variant="info">INFO</Button>
        <Button variant="black">BLACK</Button>
        <Button variant="white">WHITE</Button>
        <SecondButton href="/" variant="black">
          WHITE
        </SecondButton>
        <button>CLICK ME</button>
        <label htmlFor="check">DARK MODE</label>
        <input type="checkbox" name="check" id="CHECK" onChange={() => setTheme(theme === Dark ? Light : Dark)} />
        <ThemeProvider theme={theme}>
          <Div>
            asdasdsad
          </Div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default StyledComponentsPage;
