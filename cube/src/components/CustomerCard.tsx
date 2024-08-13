import { Customer } from "../types/Customer";

type CustomerCardProps = {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
};

const CustomerCard = ({ customer, isSelected, onClick }: CustomerCardProps) => {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
