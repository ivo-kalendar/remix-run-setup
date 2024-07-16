import {
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import DivNavbar from "../elements/div.navbar";
import LinkNavbar from "../elements/link.navbar";
import DivCenter from "../elements/div.center";

export default function NotFound() {
    const error = useRouteError();
    return (
        <>
            <DivNavbar>
                <h1 className="text-3xl">
                    {isRouteErrorResponse(error)
                        ? `${error.status} ${error.statusText}`
                        : error instanceof Error
                        ? error.message
                        : "Unknown Error"}
                </h1>
                <p>
                    Navigate{" "}
                    <LinkNavbar to="/">Home</LinkNavbar>
                </p>
            </DivNavbar>
            
            <DivCenter>
                This is not the web page are you looking for.
            </DivCenter>
        </>
    );
}
