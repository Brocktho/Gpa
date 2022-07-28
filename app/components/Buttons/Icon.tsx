import React from "react";
import type { ForwardRefExoticComponent } from "react";
const IconButton = ({ Icon }: { Icon: ForwardRefExoticComponent<any> }) => {
  return (
    <div className="border-1 h-full w-full rounded-full border-slate-700 dark:border-slate-50">
      <Icon />
    </div>
  );
};

export default IconButton;
