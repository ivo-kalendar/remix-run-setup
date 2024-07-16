import { useLoaderData } from "@remix-run/react";
import User from "../../db/User";
import UsersPanel from "../components/UsersPanel";

export const loader = async ({ context }) => {
    console.log('---- loader on server')
    const users = await new User().getAll()
    return users
}

export default function users() {
    const users = useLoaderData()
    console.log('---- both Server and Client ')
    return (
        <>
            <UsersPanel />
        </>
    );
}
