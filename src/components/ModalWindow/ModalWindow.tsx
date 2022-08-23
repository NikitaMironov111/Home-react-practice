import React, { ChangeEvent, FormEvent } from 'react';
import { IUser } from '../Users/IUser';
import { initialUser } from '../Users/initialUser';

interface ModalWindowProps {
  openModal: any;
  user: object;
  setUser: any;
  users: any;
  setUsers: any;
}
const ModalWindow = ({
  openModal,
  user,
  setUser,
  users,
  setUsers,
}: ModalWindowProps) => {
  console.log(users);
  const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = (event: FormEvent) => {
    event.preventDefault();
    setUsers([...users, user]);
    console.log(users);
    setUser(initialUser);
    openModal(false);
  };
  return (
    <div className="modal_window">
      <div className="input_container">
        <h2>ADD NEW USER</h2>
        <div className="input_group">
          <form onSubmit={(event) => addUser(event)}>
            {Object.keys(user).map((field) => {
              let userField = field;
              if (field === 'id') return;
              else if (field == 'email') {
                userField = 'E-Mail';
              } else if (field == 'first_name') {
                userField = 'First Name';
              } else if (field == 'last_name') {
                userField = 'Last Name';
              } else {
                userField = 'Avatart URL';
              }
              return (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label">
                    {userField}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={field}
                    required
                    value={
                      user[
                        field as keyof Omit<
                          IUser,
                          'id' | 'email' | 'first_name' | 'last_name' | 'avatar'
                        >
                      ]
                    }
                    onChange={(event) => onChangeUserData(event)}
                  />
                </div>
              );
            })}
            <button className="btn btn-success mx-5 mb-2">Add User</button>
            <button
              className="btn btn-danger mx-5"
              onClick={() => openModal(false)}
            >
              Close window
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
