import DivNavbar from "../elements/div.navbar";
import LinkNavbar from "../elements/link.navbar";
import DivCenter from "../elements/div.center";

export const meta = () => {
    return [
        { title: "Register" },
        {
            name: "description",
            content: "Register to Remix!",
        },
    ];
};

export default function register() {
    return (
        <>
            <DivNavbar>
                <h1 className="text-3xl">Register </h1>
                <div className="flex gap-1 text-lg">
                    or
                    <LinkNavbar to="/login">Login</LinkNavbar>
                </div>
            </DivNavbar>
            <DivCenter>
                <h1>Register!</h1>
            </DivCenter>
        </>
    )
}
