import HeaderForm from "./forms/HeaderForm";

export default function UsersSidebar() {
    return (
        <div 
            className="
                bg-slate-200 
                border 
                border-slate-300 
                grid 
                gap-3 
                text-center 
                items-center
            "
        >
            <HeaderForm />

            <h1>Your Name</h1>
            <h1>Your Friend</h1>
            <h1>Your Friend</h1>
            <h1>Your Friend</h1>
        </div>
    );
}
