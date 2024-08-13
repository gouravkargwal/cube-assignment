import { Customer } from "../types/Customer";
import PhotoGrid from "./PhotoGrid";

type CustomerDetailsProps = {
  customer: Customer | null;
};

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  if (!customer) {
    return (
      <div className="customer-details">Select a customer to view details</div>
    );
  }

  return (
    <div className="customer-details">
      <div className="customer-details-info">
        <h2>{customer.name}</h2>
        <p>{customer.title}</p>
        <p>{customer.address}</p>
      </div>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
