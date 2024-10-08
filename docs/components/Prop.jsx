import {
    Chip,
    ChipAction,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
} from "@wysteria/design";
import { Info } from "lucide-react";
import React from "react";

const Prop = ({ children, hint = "", ...props }) => {
    return (
        <Chip
            className="flex flex-grow justify-between text-sm"
            variant="outline"
            {...props}
        >
            <code>{children}</code>
            {hint !== "" && (
                <Popover>
                    <PopoverTrigger>
                        <ChipAction>
                            <Info size={16} />
                        </ChipAction>
                    </PopoverTrigger>
                    <PopoverContent sideOffset={8} side="top">
                        {hint}
                        <PopoverArrow />
                    </PopoverContent>
                </Popover>
            )}
        </Chip>
    );
};

export default Prop;
