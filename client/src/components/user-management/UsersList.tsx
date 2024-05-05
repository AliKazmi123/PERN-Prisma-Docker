import React from "react";
import { Card } from "../card/Card";
import { type User } from "@/types";
type UserListProps = {
  users: User[];
  handleDeleteUser: (id: number) => void;
};

export const UsersList = (props: UserListProps) => {
  const { users, handleDeleteUser } = props;
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
        >
          <Card card={user} />
          <button
            onClick={() => handleDeleteUser(user.id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
};
