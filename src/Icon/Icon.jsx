import React from "react"
import { icons } from 'lucide-react';

export const Icon = ({ name, color, size=24, strokeWidth=1.5 }) => {
  const LucideIcon = icons[name];

  return LucideIcon != null ? <LucideIcon color={color} size={size} strokeWidth={strokeWidth} /> : <></>
};
