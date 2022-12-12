import React from "react";

function Footer() {
    return (
        <div>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()}
                -Matthew Busscher. All rights reserved.
            </p>
        </div>
    )
}
export default Footer;