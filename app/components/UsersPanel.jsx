import UsersBoard from "./UsersBoard";
import UsersSidebar from "./UserSideBar";

export default function UsersPanel() {
    return (
        <div className="grid md:grid-cols-[1fr_2fr]">
            <UsersSidebar/>
            <UsersBoard/>
        </div>
    )
}