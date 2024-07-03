import React from "react";
import { useNavigate } from "react-router-dom";

const YourOrder = () => {
    const products = [
        { name: "Top Up T-Shirt", quantity: 1, price: "$250.00" },
        { name: "Polo Shirt", quantity: 1, price: "$100.00" },
    ];

    const subtotal = "$350.00";
    const orderTotal = "$350.00";
    const navigate = useNavigate();

    return (
        <div className="row mb-5">
            <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Your Order</h2>
                <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>
                                        {product.name}{" "}
                                        <strong className="mx-2">x</strong>{" "}
                                        {product.quantity}
                                    </td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="text-black font-weight-bold">
                                    <strong>Cart Subtotal</strong>
                                </td>
                                <td className="text-black">{subtotal}</td>
                            </tr>
                            <tr>
                                <td className="text-black font-weight-bold">
                                    <strong>Order Total</strong>
                                </td>
                                <td className="text-black font-weight-bold">
                                    <strong>{orderTotal}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Payment methods */}
                    {[
                        { id: "collapsebank", title: "Direct Bank Transfer" },
                        { id: "collapsecheque", title: "Cheque Payment" },
                        { id: "collapsepaypal", title: "Paypal" },
                    ].map((method) => (
                        <div key={method.id} className="border p-3 mb-3">
                            <h3 className="h6 mb-0">
                                <a
                                    className="d-block"
                                    data-bs-toggle="collapse"
                                    href={`#${method.id}`}
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls={method.id}
                                >
                                    {method.title}
                                </a>
                            </h3>

                            <div className="collapse" id={method.id}>
                                <div className="py-2">
                                    <p className="mb-0">
                                        Make your payment directly into our bank
                                        account. Please use your Order ID as the
                                        payment reference. Your order won’t be
                                        shipped until the funds have cleared in
                                        our account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Place Order button */}
                    <div className="form-group">
                        <button
                            className="btn btn-black btn-lg py-3 btn-block"
                            onClick={() => {
                                navigate("/thankyou");
                            }}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;
