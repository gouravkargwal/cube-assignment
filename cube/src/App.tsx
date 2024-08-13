import "./App.css";

import { Customer } from "./types/Customer";
import CustomerDetails from "./components/CustomerDetails";
import CustomerList from "./components/CustomerList";
import { useState } from "react";

const mockCustomers: Customer[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Customer ${index + 1}`,
  title: `Title ${index + 1}`,
  address: `1234 Street, City, Country ${index + 1}`,
  photos: [],
}));

const App = () => {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );

  const selectedCustomer =
    customers.find((customer) => customer.id === selectedCustomerId) || null;

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
