import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { BiTrash, BiEdit } from 'react-icons/bi';
import apiDebt from '../../services/apiDebt';
import apiUser from '../../services/apiUser';

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

interface IUser {
  id: number;
  name: string;
  // username: string;
  // email: string;
  // address: {
  //   street: string;
  //   suite: string;
  //   city: string;
  //   zipcode: string;
  //   geo: {
  //     lat: string;
  //     lng: string;
  //   };
  // };
}

interface IUserDebt {
  id: number; // userId
  motivo: string;
  valor: number;

  created_At: Date;
  updated_At: Date;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userDebts, setuserDebts] = useState<IUserDebt[]>([]);

  const handleUserList = useCallback(async () => {
    const response = await apiUser.get(`/users`);

    setUsers(response.data);
  }, []);

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

  const currentDate = useMemo(() => {
    const [date] = new Date().toLocaleString('pt-BR').split(' ');
    return date;
  }, []);

  useEffect(() => {
    handleUserList();
    // handleDebtsList();
  }, [handleUserList, handleDebtsList]);

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
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>
          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          <DebtsWrap>
            <div>
              <BiEdit />
              <BiTrash />
            </div>
            <h3>Motivo</h3>
            UM SALGADO
            <h3>Valor</h3>
            199.9
            <h3>Data da dívida</h3>
            {currentDate}
          </DebtsWrap>

          {userDebts.map(debt => (
            <div>
              {debt.motivo}
              {debt.valor}
              {debt.created_At}
            </div>
          ))}
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

          <ButtonNew type="button"> NOVO </ButtonNew>
        </ColumnRegister>
      </div>
    </Container>
  );
};

export default Dashboard;
