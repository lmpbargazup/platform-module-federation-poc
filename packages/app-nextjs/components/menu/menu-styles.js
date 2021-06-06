import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  background: #f5f6f7;
  flex-direction: column;
  min-width: 72px;
  min-height: calc(100vh - 72px);
`;

export const MenuOptionsContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 16px 0px 24px 0px;
  flex-direction: column;
`;

export const MenuOption = styled.div`
  display: flex;
  height: 60px;
  background: rgba(255, 109, 0, 0.1);
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  cursor: pointer;
`;
