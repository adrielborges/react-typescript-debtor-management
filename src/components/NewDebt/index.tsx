import React, { useCallback } from 'react';

import { Field, Formik } from 'formik';
import {
  ModalDiv,
  FormFormik,
  Label,
  Select,
  InputWrap,
  ButtonWrap,
  Title,
} from './styles';

import { useUsers } from '../../hooks/Users';
import { IUserDebt } from '../../pages/Dashboard';

type HandleSubmitArguments = {
  id: string;
  motivo: string;
  valor: string;
};

interface INewDebtProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleCreateDebt: (debt: Omit<IUserDebt, '_id' | 'criado'>) => void;
}

const NewDebt: React.FC<INewDebtProps> = ({
  isOpen,
  setIsOpen,
  handleCreateDebt,
}: INewDebtProps) => {
  const { users } = useUsers();

  const handleSubmit = useCallback(
    ({ id, motivo, valor }: HandleSubmitArguments) => {
      handleCreateDebt({
        idUsuario: Number(id),
        motivo,
        valor: Number(valor),
      });

      setIsOpen();
    },
    [handleCreateDebt, setIsOpen],
  );

  return (
    <ModalDiv isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>Nova dívida</Title>
      <Formik
        initialValues={{ id: '', motivo: '', valor: '' }}
        onSubmit={handleSubmit}
      >
        <FormFormik>
          <InputWrap>
            <Label>Devedor:</Label>
            <Select component="select" name="id" required>
              <option disabled value="Selecione">
                Selecione ...
              </option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Select>
          </InputWrap>

          <InputWrap>
            <Label>Motivo:</Label>
            <Field
              type="text"
              name="motivo"
              placeholder="Ex: Dívida cartão de crédito"
              required
            />
          </InputWrap>

          <InputWrap>
            <Label>Valor:</Label>
            <Field
              type="number"
              name="valor"
              placeholder="Ex: R$ 500,00"
              required
            />
          </InputWrap>

          <ButtonWrap>
            <button type="button" onClick={() => setIsOpen()}>
              Cancelar
            </button>

            <button type="submit">Adicionar</button>
          </ButtonWrap>
        </FormFormik>
      </Formik>
    </ModalDiv>
  );
};

export default NewDebt;
