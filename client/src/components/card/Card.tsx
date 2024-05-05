import React from "react";

type CardProps = {
  id: number;
  name: string;
  email: string;
};

export const Card = ({ card }: { card: CardProps }) => {
  const { id, name, email } = card;
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 mb-2 hover:bg-gray-100">
      <div className="text-sm text-gray-600">ID: {id}</div>
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <div className="text-md text-gray-700">{email}</div>
    </div>
  );
};
