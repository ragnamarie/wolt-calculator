import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const StyledApp = styled.div`
  width: min(300px, calc(100% - 2rem));
  padding-block: 1rem;
  font-family: Futura, sans-serif;
  display: grid;
`;

const StyledHeader = styled.div`
  color: #009de0;
  text-align: center;
`;

const StyledMain = styled.div`
  font-weight: 700;
  background-color: #009de0;
  border-radius: 30px;
  padding: 30px;
`;

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>Delivery Fee Calculator</h1>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <footer>
        <p>
          <small>Wolt&copy;</small>
        </p>
      </footer>
    </StyledApp>
  );
}
