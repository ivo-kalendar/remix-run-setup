import DivCenter from "../elements/div.center";
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

// TODO logika da mu izvrsis avtentikacija (poseben falj)
// ako ima token redirect na nekakov si dashboard
// ako nema daj mu opcija da izbere dali saka da s logira ili regisrira

export default function Index() {
    return (
        <>
            <DivNavbar>
                <h1 className="text-3xl">Welcome to Remix</h1>
                <div className="flex gap-3 text-lg">
                    <LinkNavbar to="/login">Login</LinkNavbar>
                    or
                    <LinkNavbar to="/register">Register</LinkNavbar>
                </div>
            </DivNavbar>
            <DivCenter>
                <h1>Hello!</h1>
                <p>This is the Home route.</p>
            </DivCenter>
        </>
    );
}
