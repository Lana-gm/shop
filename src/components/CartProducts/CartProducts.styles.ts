import styled from "styled-components";

export const ProductsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-family: sans-serif;

  li {
    width: 396px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 56px;
    margin-right: 20px;

    img {
      height: 332px;
    }
  }

  h1 {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: tomato;
  margin: 15px auto;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  width: 176px;
  cursor: pointer;
`;
