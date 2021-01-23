import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 15px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ColumnUsers = styled.nav`
  width: 100%;

  @media (max-width: 450px) {
    display: flex;
    overflow-x: auto;
    flex-direction: row;
  }
`;

export const UserWrap = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 180px;
  height: 50px;

  margin: 0 15px 15px 0;

  border: #000 solid 1px;
`;

export const ColumnDebts = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
export const DebtsWrap = styled.div`
  position: relative;
  border: #ccc solid 1px;
  min-width: 240px;

  margin: 5px 0 10px 10px;
  padding: 5px;

  @media (max-width: 450px) {
    margin: 5px;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 5px;
    right: 5px;

    svg {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`;

export const ColumnRegister = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-width: 240px;

  border: #000 solid 1px;
`;

export const WrapButton = styled.div`
  margin: 10px 0px;

  button {
    & + button {
      margin-left: 10px;
    }
  }
`;

export const ButtonNew = styled.button`
  position: fixed;

  bottom: 10px;
  right: 10px;

  width: 60px;
`;
