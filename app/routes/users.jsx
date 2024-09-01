import { useLoaderData } from "@remix-run/react";
import User from "../../db/User";
import UsersSidebar from "../components/UserSideBar";
import UsersBoard from "../components/UsersBoard";

const param = "search-users"

export const loader = async ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get(param)
    console.log('---- loader on server ', " Query: ", query)
    
    const users = await new User().getAll()
    return users
}

export default function users() {
    const users = useLoaderData()
    console.log('---- both Server and Client ')
    return (
        <div className="
            grid 
            md:grid-cols-[1fr_2fr]
        ">
            <UsersSidebar/>
            <UsersBoard>
                {users && users.length && users.map((user) => {
                    return <p key={user._id}>{user.name}</p>
                })}
            </UsersBoard>
        </div>
    );
}