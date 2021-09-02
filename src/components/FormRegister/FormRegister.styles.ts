import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 346px;
  background-color: #dee2e6;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: #3f51b5;
  margin: 15px auto;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  width: 176px;
  cursor: pointer;
`;
