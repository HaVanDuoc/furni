import React, { Fragment } from "react";
import ReturningCustomer from "./components/ReturningCustomer";
import BannerCheckout from "./components/BannerCheckout";
import FormBillingDetails from "./components/FormBillingDetails";
import CouponCode from "./components/CouponCode";
import YourOrder from "./components/YourOrder";

const Checkout = () => {
    return (
        <Fragment>
            <BannerCheckout />

            <div class="untree_co-section">
                <div class="container">
                    <ReturningCustomer />

                    <div class="row">
                        <FormBillingDetails />

                        <div class="col-md-6">
                            <CouponCode />
                            <YourOrder />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Checkout;
