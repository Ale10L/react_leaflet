import { styled } from "styled-components";

export const SideMenuContainerStyled = styled.div`
  height: 100vh;
  min-width: 500px;
  position: fixed;
  background-color: white;
  top: 20px;
  left: 0;
  z-index: 9999;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

export const FormStyled = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

export const ButtonAddStyled = styled.button`
  width: 50px;
  cursor: pointer;
`;

export const ListContainerStyled = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  overflow: auto;
`;
export const StreetsStyled = styled.p`
  font-weight: 600;
  color: white;
`;

export const RadioContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RadioStyled = styled.div`
  width: 100px;
  display: flex;
  gap: 5px;
  color: black;
`;

export const InputContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonListStyled = styled.button`
  cursor: pointer;
  width: 40px;
  height: 25px;
`;

export const InputZoneContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  font-weight: 600;
`;

export const InputZone = styled.input``;
export const TextAreaZone = styled.textarea``;

export const UpdateButtonStyled = styled.button`
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: red;
  :hover {
    color: green;
  }
`;
