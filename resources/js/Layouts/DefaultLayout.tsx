import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=" container">{props.children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
