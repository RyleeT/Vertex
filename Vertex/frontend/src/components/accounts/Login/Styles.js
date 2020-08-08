import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: inherit;
  z-index: 0;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 340px;
`;

export const Card = styled.div`
  border-radius: 0.25rem;
  padding-top: 16px;
  padding-bottom: 8px;
`;

export const Button = styled.button`
  border-radius: 0.25rem;
  background-color: #ff6b4a;
  color: white;
  padding: 0.375rem 0.75rem;
  font-weight: 600;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-top: 0.5rem;
  :hover {
    color: white;
    background-color: #e95739;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;
