import { redirect, useLoaderData } from "@remix-run/react";
import User from "../../db/User";

export const loader = async ({ context }) => {
    console.log('api loader', context)
    const users = await new User().getAll()
    await new Promise(resolve => setTimeout(resolve, 1000));
    return redirect("/demo")
    return users
}

export default function Api() {
    const users = useLoaderData()
    console.log('api.$.jsx: ', users)
    return (
        <div>
            <h1>API Users</h1>
            {/* {!!users && users.map(user => <p key={user._id}>{user.name}</p>)} */}
        </div>
    )
}