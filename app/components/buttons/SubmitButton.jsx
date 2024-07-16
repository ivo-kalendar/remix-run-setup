export default function SubmitButton({ children = "Submit" }) {
    return (
        <button
            type="submit"
            className="
                text-blue-500 
                hover:text-blue-400 
                rounded-lg 
                shadow-sm 
                hover:shadow-md
                active:shadow-sm
                active:text-blue-200
                p-2 
                border
                border-slate-300
            "
        >
            {children}
        </button>
    );
}
