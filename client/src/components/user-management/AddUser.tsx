import React from "react";

import { type NewUser } from "@/types";
type UpdateUserProps = {
  handleAddUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  newUser: NewUser;
  setNewUser: (user: NewUser) => void;
};

export const AddUser = (props: UpdateUserProps) => {
  const { newUser, handleAddUser, setNewUser } = props;
  return (
    

        <form onSubmit={handleAddUser} className="p-4 bg-blue-100 rounded shadow">
          <input
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
  );
};
