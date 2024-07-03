import React from "react";

const CouponCode = () => {
    return (
        <div className="row mb-5">
            <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                <div className="p-3 p-lg-5 border bg-white">
                    <label htmlFor="c_code" className="text-black mb-3">
                        Enter your coupon code if you have one
                    </label>
                    <div className="input-group w-75 couponcode-wrap">
                        <input
                            type="text"
                            className="form-control me-2"
                            id="c_code"
                            placeholder="Coupon Code"
                            aria-label="Coupon Code"
                            aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-black btn-sm"
                                type="button"
                                id="button-addon2"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponCode;
