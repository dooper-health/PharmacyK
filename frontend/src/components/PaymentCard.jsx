import React from "react";

const PaymentCard = () => {
    return (
    <>
    <div className=" p-[10px] w-[450px] h-[140px] bg-white font-Montserrat space-y-2 rounded-xl">
        <h1 className=" font-semibold">Payment Recived</h1>
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between text-gray-400 text-sm">
                <p>Sub Total</p>
                <p>Rs. 600</p>
            </div>
            <div className="flex justify-between text-gray-400 text-sm">
                <p>Discount</p>
                <p>Rs. 100</p>
            </div>
            <hr/>
            <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>Rs. 400</p>
            </div>
        </div>
    </div>


    
    </>
  );
};

export default PaymentCard ;