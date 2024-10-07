import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateMonthlyPayment(
  mortgageAmount: number,
  mortgageTerm: number,
  mortgageRate: number
) {
  const monthlyInterestRate = mortgageRate / 100 / 12;
  const numberOfPayments = mortgageTerm * 12;
  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
  const monthlyPayment = mortgageAmount * (numerator / denominator);
  return monthlyPayment;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
