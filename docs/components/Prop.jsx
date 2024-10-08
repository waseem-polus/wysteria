import {
    Chip,
    ChipAction,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@wysteria/design";
import { Info } from "lucide-react";
import React from "react";
import hint from "../helpers/hint";

const Prop = ({ children, hint: hintKey = null, ...props }) => {
    return (
        <Chip
            className="flex flex-grow justify-between text-sm"
            variant="outline"
            {...props}
        >
            <code className="select-text">{children}</code>
            {hint !== "" && (
                <Popover>
                    <PopoverTrigger>
                        <ChipAction>
                            <Info size={16} />
                        </ChipAction>
                    </PopoverTrigger>
                    <PopoverContent
                        sideOffset={10}
                        side="bottom"
                        className="max-w-[48ch] text-sm"
                    >
                        {hint(hintKey ?? children)}
                    </PopoverContent>
                </Popover>
            )}
        </Chip>
    );
};

export default Prop;
