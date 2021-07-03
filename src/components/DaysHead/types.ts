import { ReactType } from "react";

export interface IDaysHeadProps {
  ArrowRight?: ReactType;
  ArrowLeft?: ReactType;
  monthName: string;
  datePickerStatus: string;
  increaseMonth?: () => void;
  changeMonth?: (month: number) => void;
  decreaseMonth?: () => void;
  hour?: number;
  minute?: number;
  timePickerView: boolean;
}
