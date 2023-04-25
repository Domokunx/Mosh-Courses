import React from "react";

interface Props {
  expenseDataSet: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];

  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenseDataSet, onDelete }: Props) => {
  if (expenseDataSet.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenseDataSet.map((data) => (
          <tr key={data.id}>
            <td>{data.description}</td>
            <td>${data.amount.toFixed(2)}</td>
            <td>{data.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(data.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenseDataSet.reduce((acc, data) => data.amount + acc, 0).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
