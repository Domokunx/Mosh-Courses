import { categories } from "./categories";

interface Props {
    onFilter: (filter: string) => void,
}

const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <div className="mb-5">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="form-select"
        defaultValue="All Categories"
      >
        <option value="">All Categories</option>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter