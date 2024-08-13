import { Customer } from "../types/Customer";
import CustomerCard from "./CustomerCard";

type CustomerListProps = {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
};

const CustomerList = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}: CustomerListProps) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onSelectCustomer(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
