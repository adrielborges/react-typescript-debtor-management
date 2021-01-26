/* eslint-disable react/jsx-indent */
import React, { useCallback, useState, useEffect } from 'react';

import { BiTrash, BiEdit } from 'react-icons/bi';
import apiDebt from '../../services/apiDebt';

import { useUsers } from '../../hooks/Users';

import {
  Container,
  ContainerUsers,
  Navigation,
  UserWrap,
  Content,
  Title,
  ColumnDebts,
  DebtsWrap,
  WrapButtonActions,
  ButtonActions,
  ButtonNew,
} from './styles';
import NewDebt from '../../components/NewDebt';
import EditDebt from '../../components/EditDebt';
import formatDate from '../../utils/date';

export interface IUserDebt {
  _id: string;
  idUsuario: number; // userId
  motivo: string;
  valor: number;

  criado: string;
}

const Dashboard: React.FC = () => {
  const [debts, setDebts] = useState<IUserDebt[]>([]);
  const [isOpenNewDebt, setIsOpenNewDebt] = useState(false); // modal
  const [isOpenEditDebt, setIsOpenEditDebt] = useState(false); // modal
  const [selectedDebt, setSelectedDebt] = useState<IUserDebt>({} as IUserDebt);
  const [selectedUserId, setSelectedUserId] = useState(Number);
  const [render, setRender] = useState(true);

  const filteredDebtsbyUser =
    selectedUserId === 0
      ? debts
      : debts.filter(debt => debt.idUsuario === selectedUserId);

  const { users } = useUsers();

  const handleAllDebtsList = useCallback(async () => {
    const {
      data: { result },
    } = await apiDebt.get(`/divida/?uuid=${process.env.REACT_APP_KEY_UUID}`);
    setDebts(result);
  }, []);

  useEffect(() => {
    if (render) {
      handleAllDebtsList();
      setRender(false);
    }
  }, [handleAllDebtsList, render]);

  async function handleCreateDebt({
    idUsuario,
    motivo,
    valor,
  }: Omit<IUserDebt, '_id' | 'criado'>): Promise<void> {
    try {
      await apiDebt.post(`/divida/?uuid=${process.env.REACT_APP_KEY_UUID}`, {
        idUsuario,
        motivo,
        valor,
      });
      setRender(true);
      // colocar um toast de sucesso
    } catch (error) {
      console.log(error);
      // colocar um toast de erro
    }
  }
  const handleUpdateDebt = useCallback(
    async ({ _id, idUsuario, motivo, valor }: Omit<IUserDebt, 'criado'>) => {
      await apiDebt.put(
        `/divida/${_id}?uuid=${process.env.REACT_APP_KEY_UUID}`,
        {
          idUsuario,
          motivo,
          valor,
        },
      );
      setRender(true);
    },
    [],
  );

  const handleDeleteDebt = useCallback(async (id: string) => {
    await apiDebt.delete(
      `/divida/${id}?uuid=${process.env.REACT_APP_KEY_UUID}`,
    );
    setRender(true);
  }, []);

  return (
    <Container>
      <ContainerUsers>
        <Navigation>
          {users.length
            ? users.map(user => (
                <UserWrap
                  key={user.id}
                  selected={selectedUserId === user.id}
                  onClick={() =>
                    setSelectedUserId(selectedUserId === user.id ? 0 : user.id)
                  }
                >
                  {user.name}
                </UserWrap>
              ))
            : 'Verifique sua Conexão com a internet!'}
        </Navigation>
      </ContainerUsers>

      <Content>
        <Title>
          <div>
            <h2>Dívidas</h2>
          </div>
        </Title>

        <ColumnDebts>
          {filteredDebtsbyUser.map(debt => (
            <DebtsWrap key={debt._id}>
              <WrapButtonActions>
                <ButtonActions
                  type="button"
                  onClick={() => {
                    setIsOpenEditDebt(true);
                    setSelectedDebt(debt);
                  }}
                >
                  <BiEdit size={16} color="#758af8" />
                </ButtonActions>

                <ButtonActions
                  type="button"
                  onClick={() => handleDeleteDebt(debt._id)}
                >
                  <BiTrash size={16} color="#758af8" />
                </ButtonActions>
              </WrapButtonActions>
              <h3>Motivo</h3>
              <p>{debt.motivo}</p>
              <h3>Valor</h3>
              <span>
                R$
                {debt.valor}
              </span>
              <h3>Data da dívida</h3>
              <span>{formatDate(debt.criado)}</span>
            </DebtsWrap>
          ))}
        </ColumnDebts>

        <ButtonNew type="button" onClick={() => setIsOpenNewDebt(true)}>
          Nova dívida
        </ButtonNew>
      </Content>

      <NewDebt
        isOpen={isOpenNewDebt}
        setIsOpen={() => {
          setIsOpenNewDebt(!isOpenNewDebt);
        }}
        handleCreateDebt={handleCreateDebt}
      />

      <EditDebt
        isOpen={isOpenEditDebt}
        setIsOpen={() => {
          setIsOpenEditDebt(!isOpenEditDebt);
        }}
        handleUpdateDebt={handleUpdateDebt}
        debt={selectedDebt}
      />
    </Container>
  );
};

export default Dashboard;
