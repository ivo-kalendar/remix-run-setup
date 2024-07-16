import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
    return (
        <div className="relative grid h-ful">
            <input
                type="text"
                placeholder="Search"
                className="
                    pl-8 
                    rounded-lg 
                    shadow-sm 
                    hover:shadow-md
                  border-slate-300
                    p-2
                "
            />
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <IoIosSearch className="text-gray-400" />
            </div>
        </div>
    )
}