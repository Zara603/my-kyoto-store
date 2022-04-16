import React from 'react'
import {Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <h1>I am navigation</h1>
            <Outlet />
        </div>

    )
}