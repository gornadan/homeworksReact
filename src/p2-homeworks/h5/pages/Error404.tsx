import React from "react";

function Error404() {
    return (
        <div className="wrapper">
            <div className="wrap_box">
                <div className="error">404</div>
                <div className="error_2">Page not found!</div>
                <div className="error_3">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the first place?<p>Let's go <a href="#">home.</a> </p></div>
            </div>
        </div>
    );
}

export default Error404;
