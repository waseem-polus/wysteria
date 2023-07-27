import React from "react";

export default function Tab({children}) {
    return (
        <section className="tab-group__panel">
            {children}
        </section>
    )
}