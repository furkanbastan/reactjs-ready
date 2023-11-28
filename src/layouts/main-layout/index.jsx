import React from "react";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="main-layout">
            <Header />
            <Outlet />
        </div>
    );
}

export { MainLayout };
