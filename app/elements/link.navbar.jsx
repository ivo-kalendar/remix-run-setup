import { NavLink } from "@remix-run/react";

export default function LinkNavbar({ to = "/", children }) {
    return (
        <NavLink
            className="
                text-blue-500 
                hover:text-blue-400 
                hover:underline 
                underline-offset-2
            "
            to={to}
        >
            {children}
        </NavLink>
    );
}
