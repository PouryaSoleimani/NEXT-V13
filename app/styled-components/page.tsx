'use client';
import React from 'react';
import styled from 'styled-components';

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

const SecondButton = styled(Button)`
  box-shadow: none;
  transition: all 300ms linear;
  &:hover {
    box-shadow: 2px 2px 1px #2c2c2c;
  }
`;

function StyledComponentsPage() {
  return (
    <div className="flex items-center gap-4 p-10">
      <Button variant="success">SUCCESS</Button>
      <Button variant="outline">OUTLINE</Button>
      <Button variant="danger">DANGER</Button>
      <Button variant="warning">WARNING</Button>
      <Button variant="info">INFO</Button>
      <Button variant="black">BLACK</Button>
      <Button variant="white">WHITE</Button>
      <SecondButton variant="black">WHITE</SecondButton>
    </div>
  );
}

export default StyledComponentsPage;
