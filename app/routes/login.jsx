import DivNavbar from "../elements/div.navbar";
import LinkNavbar from "../elements/link.navbar";
import DivCenter from "../elements/div.center";

export const meta = () => {
    return [
        { title: "Login" },
        {
            name: "description",
            content: "Login to Remix!",
        },
    ];
};

export default function login() {
    return (
        <>
            <DivNavbar>
                <h1 className="text-3xl">Login</h1>
                <div className="flex gap-1 text-lg">
                    or
                    <LinkNavbar to="/register">Register</LinkNavbar>
                </div>
            </DivNavbar>
            <DivCenter>
                <h1>Login!</h1>
            </DivCenter>
        </>
    )
}
