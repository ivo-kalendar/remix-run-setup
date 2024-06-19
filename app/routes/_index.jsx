import { NavLink } from "@remix-run/react";

export const meta = () => {
    return [{ title: "Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    return (
        <div className="font-sans p-4 text-white bg-slate-900">
            <h1 className="text-3xl">Welcome to Remix</h1>
            <p>
                Navigate to <NavLink to="/demo">Demo</NavLink>
            </p>
        </div>
    );
}
