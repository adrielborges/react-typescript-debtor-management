import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';

import { Container, Form, Label, Select } from './styles';
import apiUser from '../../services/apiUser';

interface IUser {
  id: number;
  name: string;
}

interface INewDebtProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const NewDebt: React.FC<INewDebtProps> = ({
  isOpen,
  setIsOpen,
}: INewDebtProps) => {
  const [userSelected, setUserSelected] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    handleUserList();
  }, []);

  async function handleUserList() {
    const response = await apiUser.get(`/users`);

    setUsers(response.data);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={() => console.log('enviou')}>
        <h1>Nova dívida</h1>
        <div>
          <Label>Devedor</Label>
          <Select
            name="name"
            onChange={event => setUserSelected(event.target.value)}
          >
            <option disabled selected>
              Selecione ...
            </option>
            {users.map(user => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label>Motivo</Label>
          <input type="text" />
        </div>
        <div>
          <Label>Valor</Label>
          <input type="number" />
        </div>
      </Form>

      <button type="submit"> Adicionar </button>

      <button type="button" onClick={() => setIsOpen()}>
        Cancelar
      </button>
    </Modal>
  );
};

export default NewDebt;
