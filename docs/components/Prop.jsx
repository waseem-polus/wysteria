import { Chip } from "@wysteria/design";
import React from "react";

const Prop = ({ children, ...props }) => {
    return (
        <Chip
            className="justify-center text-sm"
            variant="outline"
            color="primary"
            {...props}
        >
            <code>{children}</code>
        </Chip>
    );
};

export default Prop;
