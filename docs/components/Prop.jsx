import { Chip } from "@wysteria/design";
import React from "react";

const Prop = ({ children }) => {
    return (
        <Chip className="text-sm" color="primary">
            <code>{children}</code>
        </Chip>
    );
};

export default Prop;
