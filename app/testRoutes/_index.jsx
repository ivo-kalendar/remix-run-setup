import DivNavbar from "../elements/div.navbar";
import LinkNavbar from "../elements/link.navbar";

export const meta = () => {
    return [
        { title: "Remix App" },
        {
            name: "description",
            content: "Welcome to Remix!",
        },
    ];
};

export default function Index() {
    return (
        <DivNavbar>
            <h1 className="text-3xl">Welcome to Remix</h1>
            <p>
                Navigate to{" "}
                <LinkNavbar to="/demo">Demo</LinkNavbar>
            </p>
        </DivNavbar>
    );
}
