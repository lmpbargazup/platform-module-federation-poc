import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 72px);
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex: 1;
  max-height: 72px;
`;

export const NavbarIconContainer = styled.div`
  min-width: 72px;
  background-color: #ff6d00;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AppComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;
`;
