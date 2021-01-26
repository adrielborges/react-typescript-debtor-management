import styled from 'styled-components';

interface IUserWrap {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ContainerUsers = styled.aside`
  height: 100vh;
  position: sticky;
  padding: 10px;
  top: 0;
  overflow-y: auto;
  background: #eeeff4;

  @media (max-width: 450px) {
    overflow-y: hidden;
    height: auto;
    z-index: 9999;
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 450px) {
    display: flex;
    column-gap: 20px;
  }
`;

export const UserWrap = styled.a<IUserWrap>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 50px;

  padding: 15px 10px;

  border: #ececec solid 1px;
  border-radius: 4px;

  cursor: pointer;

  background: ${({ selected }) => (selected ? '#758af8' : '#ffffff')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#656d78')};

  transition: all 0.3s ease-out;

  & + a {
    margin-top: 10px;
  }

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 450px) {
    flex-shrink: 0;
    & + a {
      margin-top: 0px;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  margin-left: 10px;
  @media (max-width: 450px) {
    margin: 54px 0 0 0;
  }
`;

export const Title = styled.header`
  display: flex;
  align-items: center;

  height: 54px;
  width: 100%;
  padding: 8px 16px;
  margin: 10px 0;

  background: #ffffff;

  h2 {
    background: #f6f7fd;
    color: #5d78ff;
    padding: 8px 14px;
    font-size: 14px;
  }

  @media (max-width: 450px) {
    position: fixed;
    top: 70px;
    z-index: 8000;
    margin-top: 0;
  }
`;

export const ColumnDebts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

export const DebtsWrap = styled.section`
  position: relative;
  border: #ececec solid 1px;
  border-radius: 5px;
  width: 240px;

  padding: 20px;

  background: #ffffff;

  h3 {
    font-size: 16px;
    color: #6c7293;
  }

  h3:nth-of-type(2),
  h3:nth-of-type(3) {
    margin-top: 10px;
  }

  p {
    width: 170px;
    color: #656d78;
  }

  span {
    color: #656d78;
  }

  p,
  span {
    font-size: 14px;
    color: #a7abc3;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const WrapButtonActions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10px;
  right: 10px;
`;
export const ButtonActions = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #eef1fe;

  cursor: pointer;

  & + button {
    margin-top: 5px;
  }
`;

export const ButtonNew = styled.button`
  position: fixed;

  bottom: 10px;
  right: 10px;

  padding: 12px 24px;
  border: none;
  border-radius: 5px;

  font-size: 14px;
  font-weight: bold;

  background: #3445e5;
  color: #f0f0f0;

  cursor: pointer;
`;
