import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  background-color: palevioletred;
  color: white;
  min-height: 50px;
  height: auto;
  min-width: 120px;
  width: auto;
  text-align: center;
  border-radius: 33px;
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = ({ text, handleClick }) => {
  return (
    <ButtonContainer>
      <StyledBtn onClick={handleClick}>{text}</StyledBtn>
    </ButtonContainer>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
