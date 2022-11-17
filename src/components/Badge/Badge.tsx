import { ReactNode } from "react";
import { BadgeLabel } from "../../types";
import { Color } from "../../types";
export interface IProps {
  children: ReactNode;
  color: Color;
  badgeLabel: BadgeLabel;
}

export const Badge = ({ children, color, badgeLabel }: IProps) => {
  return (
    <p className={`badge text-bg-${color}`}>
      {badgeLabel}
      {children}
    </p>
  );
};
