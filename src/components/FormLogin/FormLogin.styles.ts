import styled from "styled-components";
import register from "../../images/register.svg";

export const PageContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// export const ImageContainer = styled.div`
//   background-image: url(${register});
//   height: 100vh;
//   width: 100vw;
// `;

export const FormContainer = styled.div`
  width: 234px;
  background-color: whitesmoke;
  text-align: center;
  font-family: sans-serif;
  padding: 40px;
  border-radius: 8px;

  h1 {
    font-size: 22px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    width: 346px;
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
