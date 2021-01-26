import styled from 'styled-components';
import { Form, Field } from 'formik';
import Modal from '../Modal';

export const ModalDiv = styled(Modal)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  color: #6c7293;
`;
export const FormFormik = styled(Form)`
  min-height: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  margin-bottom: 10px;

  p {
    font-size: 14px;
    color: #656d78;
  }

  input {
    width: 100%;
    height: 45px;
    border: 2px solid #eaeaec;
    border-radius: 5px;
    padding: 3px;
    background: #ffffff;
    color: #656d78;
  }
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #6c7293;
`;

export const Select = styled(Field)`
  width: 100%;
  height: 45px;
  border: 2px solid #eaeaec;
  border-radius: 5px;
  background: #ffffff;
  color: #656d78;
  outline: none;
`;

export const ButtonWrap = styled.div`
  align-self: flex-end;

  button {
    padding: 10px 24px;
    background: #f95959;
    color: #f0f0f0;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    & + button {
      margin: 5px;
      background: #41c197;
    }
  }
`;
