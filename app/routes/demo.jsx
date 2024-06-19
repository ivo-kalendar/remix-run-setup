import { NavLink } from "@remix-run/react";
import React from "react";


export const meta = () => {
    return [{ title: "Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function DemoPage() {
    return (
        <div className="text-white bg-slate-900 font-sans p-4">
            <h1 className="text-3xl">Welcome to Remix</h1>
            <p>
                Navigate to <NavLink to="/">Home</NavLink>
            </p>
        </div>
    );
}
