import React, { useContext } from 'react';
import styled from 'styled-components';
import { AvailabilityContext } from '../AvailabilityContext';

// Define styled components outside the component
const AvailableBtn = styled.div`
  background-color: ${props => (props.isAvailable ? '#DCFAEB' : '#dfbdbd')};
  width: 36px;
  border: none;
  border-radius: 80px;
  height: 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 5px;

  &::before {
    position: absolute;
    content: "";
    background-color: ${props => (props.isAvailable ? '#41B079' : '#E40443')};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: ${props => (props.isAvailable ? '0 0 0 17px' : '1px')};
  }
`;

const AvailabilityBtn = styled.div`
  display: flex;
  align-items: center;
`;

const AvailabilityText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const AvailabilityButton = () => {
  const { isAvailable = true, setIsAvailable } = useContext(AvailabilityContext);

  const onClickChangeAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <AvailabilityBtn>
      <AvailabilityText>Availability</AvailabilityText>
      <AvailableBtn onClick={onClickChangeAvailability} isAvailable={isAvailable} />
    </AvailabilityBtn>
  );
};

export default AvailabilityButton;
