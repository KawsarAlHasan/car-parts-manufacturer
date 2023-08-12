import React from "react";
import { useReactToPrint } from "react-to-print";
import Invoice from "./Test2";

const PrintableComponent = ({ order }) => {
  const invoiceRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div>
      <Invoice order={order} ref={invoiceRef} />
      <button onClick={handlePrint}>Print Invoice</button>
    </div>
  );
};

export default PrintableComponent;
