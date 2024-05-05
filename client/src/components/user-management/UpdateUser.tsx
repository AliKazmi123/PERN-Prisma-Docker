import React from "react";

import { type UserInput } from "@/types";
type UpdateUserProps = {
  handleUpdateUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  updateUser: UserInput;
  setUpdateUser: (user: UserInput) => void;
};

export const UpdateUser = (props: UpdateUserProps) => {
  const { updateUser, handleUpdateUser, setUpdateUser } = props;
  return (
    <form
      onSubmit={handleUpdateUser}
      className="p-4 bg-green-100 rounded shadow"
    >
      <input
        placeholder="User ID"
        value={updateUser.id}
        onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <input
        placeholder="New Name"
        value={updateUser.name}
        onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <input
        placeholder="New Email"
        value={updateUser.email}
        onChange={(e) =>
          setUpdateUser({ ...updateUser, email: e.target.value })
        }
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Update User
      </button>
    </form>
  );
};
