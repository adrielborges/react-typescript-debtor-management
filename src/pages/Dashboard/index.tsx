import React, { useCallback, useState } from 'react';

import { BiTrash, BiEdit } from 'react-icons/bi';
import apiDebt from '../../services/apiDebt';

import { useUsers } from '../../hooks/Users';

import {
  Container,
  ColumnUsers,
  UserWrap,
  ColumnDebts,
  DebtsWrap,
  ColumnRegister,
  RegisterWrap,
  WrapButton,
  ButtonNew,
} from './styles';
import NewDebt from '../../components/NewDebt';

interface IUserDebt {
  id: number; // userId
  motivo: string;
  valor: number;

  created_At: Date;
  updated_At: Date;
}

const Dashboard: React.FC = () => {
  const [userDebts, setuserDebts] = useState<IUserDebt[]>([]);
  const [isOpenNewDebt, setIsOpenNewDebt] = useState(false);

  const { users } = useUsers();

  const handleDebtsList = useCallback(async () => {
    const response = await apiDebt.get(
      `/divida/?uuid=${process.env.REACT_APP_KEY_UUID}`,
    );
  }, []);

  const handleGetDebt = useCallback(async (id: number) => {
    const response = await apiDebt.get(
      `/divida/${id}?uuid=${process.env.REACT_APP_KEY_UUID}`,
    );

    setuserDebts(response.data);
  }, []);

  async function handleAddProduct(debt: IUserDebt): Promise<void> {
    try {
      const response = await apiDebt.post(
        `/divida/?uuid=${process.env.REACT_APP_KEY_UUID}`,
        {
          debt,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateDebt = useCallback(async () => {
    const response = await apiDebt.post(
      `/divida/?uuid=${process.env.REACT_APP_KEY_UUID}`,
      {
        idUsuario: 1,
        motivo: 'Parcela 3 carro',
        valor: 199.99,
      },
    );
  }, []);
  const handleUpdateDebt = useCallback(async (id: number) => {
    const response = await apiDebt.put(
      `/divida/${id}?uuid=${process.env.REACT_APP_KEY_UUID}`,
      {
        idUsuario: id,
        motivo: 'Parcela 3 carro',
        valor: 199.99,
      },
    );
  }, []);
  const handleDeleteDebt = useCallback(async (id: number) => {
    const response = await apiDebt.put(
      `/divida/${id}?uuid=${process.env.REACT_APP_KEY_UUID}`,
    );
  }, []);

  return (
    <Container>
      <ColumnUsers>
        {users.length
          ? users.map(user => <UserWrap key={user.id}>{user.name}</UserWrap>)
          : 'Verifique sua Conexão com a internet!'}
      </ColumnUsers>

      <div>
        <h2>Dívidas</h2>
        <br />

        <ColumnDebts>
          {userDebts.length ? ( // mudar para  !userDebts.lenght ###############
            'Clique em um usuário para ver suas respectivas dívidas'
          ) : (
            <DebtsWrap>
              <div>
                <BiEdit />
                <BiTrash />
              </div>
              <h3>Motivo</h3>
              <p> asdasddasdsad</p>
              <h3>Valor</h3>
              <span> 1999</span>
              <h3>Data da dívida</h3>
              <span>criado</span>
            </DebtsWrap>
          )}
        </ColumnDebts>

        <ColumnRegister>
          {/* <RegisterWrap>
          <div>
          <h3>Cliente</h3>
          <input type="select" />
          <h3>Motivo</h3>
            <input type="text" />
            <h3>Valor</h3>
            <input type="text" />
          </div>

          <WrapButton>
          <button type="button">Excluir</button>
            <button type="button">Salvar</button>
            </WrapButton>
        </RegisterWrap> */}

          <ButtonNew type="button" onClick={() => setIsOpenNewDebt(true)}>
            NOVO
          </ButtonNew>
        </ColumnRegister>
      </div>

      <NewDebt
        isOpen={isOpenNewDebt}
        setIsOpen={() => {
          setIsOpenNewDebt(!isOpenNewDebt);
        }}
        handleCreateDebt={handleCreateDebt}
      />
    </Container>
  );
};

export default Dashboard;
