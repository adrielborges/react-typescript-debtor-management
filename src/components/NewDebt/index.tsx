import React, { useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';

import { Form, Label, Select } from './styles';

import { useUsers } from '../../hooks/Users';
import currentDate from '../../utils/date';

interface IUserDebt {
  id: number; // userId
  motivo: string;
  valor: number;

  created_At: string;
  updated_At: string;
}

interface INewDebtProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleCreateDebt: (debt: IUserDebt) => void;
}

const NewDebt: React.FC<INewDebtProps> = ({
  isOpen,
  setIsOpen,
  handleCreateDebt,
}: INewDebtProps) => {
  const { users } = useUsers();

  const [userIdSelected, setUserIdSelected] = useState('');
  const [reason, setReason] = useState('');
  const [price, setPrice] = useState<string>('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IUserDebt) => {
      handleCreateDebt({
        id: Number(userIdSelected),
        motivo: reason,
        valor: Number(price),

        created_At: currentDate(),
        updated_At: currentDate(),
      });

      setIsOpen();
    },
    [handleCreateDebt, setIsOpen, userIdSelected, price, reason],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova dívida</h1>
        <div>
          <Label>Devedor</Label>
          <Select
            name="name"
            onChange={event => setUserIdSelected(event.target.value)}
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
          <input
            type="text"
            value={reason}
            onChange={event => setReason(event.target.value)}
          />
        </div>
        <div>
          <Label>Valor</Label>
          <input
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
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
