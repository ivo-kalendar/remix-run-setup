import { Form } from "@remix-run/react";
import NewButton from "../buttons/NewButton";
import SearchInput from "../SearchInput";

export default function HeaderForm() {
    return (
        <Form 
            className="
                border 
                border-slate-300 
                px-3 
                py-6 
                grid 
                md:grid-cols-[5fr_1fr]
                gap-3
            "
        >
            <SearchInput />
            <NewButton />
        </Form>
    )
}