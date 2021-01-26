import React, { useCallback } from 'react';
import { Formik, Field } from 'formik';

import {
  ModalDiv,
  Title,
  FormFormik,
  InputWrap,
  Label,
  ButtonWrap,
} from './styles';

import { IUserDebt } from '../../pages/Dashboard';
import { useUsers } from '../../hooks/Users';

interface INewDebtProps {
  debt: IUserDebt & { userName?: string };
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateDebt: (debt: Omit<IUserDebt, 'criado'>) => void;
}

const EditDebt: React.FC<INewDebtProps> = ({
  debt,
  isOpen,
  setIsOpen,
  handleUpdateDebt,
}: INewDebtProps) => {
  const { users } = useUsers();
  debt.userName = users.find(user => user.id === debt.idUsuario)?.name;

  const handleSubmit = useCallback(
    ({ motivo, valor }: { motivo: string; valor: string }) => {
      handleUpdateDebt({
        _id: debt._id,
        idUsuario: debt.idUsuario,
        motivo,
        valor: Number(valor),
      });
      setIsOpen();
    },
    [debt._id, debt.idUsuario, handleUpdateDebt, setIsOpen],
  );

  return (
    <ModalDiv isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>Editar dívida</Title>
      <Formik
        initialValues={{ motivo: debt.motivo, valor: String(debt.valor) }}
        onSubmit={handleSubmit}
      >
        <FormFormik>
          <InputWrap>
            <Label>Devedor:</Label>
            <p>{debt.userName}</p>
          </InputWrap>

          <InputWrap>
            <Label>Motivo:</Label>
            <Field
              name="motivo"
              type="text"
              placeholder="Ex: Dívida cartão de crédito"
            />
          </InputWrap>

          <InputWrap>
            <Label>Valor:</Label>
            <Field name="valor" type="number" placeholder="Ex: R$ 500,00" />
          </InputWrap>

          <ButtonWrap>
            <button type="button" onClick={() => setIsOpen()}>
              Cancelar
            </button>

            <button type="submit"> Editar </button>
          </ButtonWrap>
        </FormFormik>
      </Formik>
    </ModalDiv>
  );
};

export default EditDebt;
