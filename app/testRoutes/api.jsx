import { Outlet } from "@remix-run/react";
import DivNavbar from "../elements/div.navbar";
import LinkNavbar from "../elements/link.navbar";

export const meta = () => {
    return [{ title: "Remix App /api" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Api() {
    return (
        <>
        <DivNavbar>
            <h1 className="text-3xl">Welcome to Remix /api route</h1>
            <p>
                Navigate to <LinkNavbar to="/">Home</LinkNavbar>
            </p>
        </DivNavbar>
        <Outlet />
        </>
    );
}
