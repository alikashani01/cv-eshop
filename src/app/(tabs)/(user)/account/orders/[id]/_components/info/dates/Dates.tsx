"use client";
import { useContext } from "react";
import { Context } from "../../../_Context";
import DeliverAt from "./DeliverAt";
import OrderedAt from "./OrderedAt";

const Dates = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex flex-col lg:flex-row *:flex-1 gap-4">
            <DeliverAt deliverAt={createdAt} />
            <OrderedAt createdAt={createdAt} />
        </div>
    );
};

export default Dates;
