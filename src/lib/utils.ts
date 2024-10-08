import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateMonthlyRepayment(
  mortgageAmount: number,
  mortgageTerm: number,
  mortgageRate: number
) {
  if (mortgageAmount <= 0 || mortgageTerm <= 0 || mortgageRate < 0) {
    throw new Error("Invalid input values");
  }

  if (mortgageRate === 0) {
    return mortgageAmount / (mortgageTerm * 12);
  }

  const monthlyInterestRate = mortgageRate / 100 / 12;
  const numberOfPayments = mortgageTerm * 12;
  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
  const monthlyPayment = mortgageAmount * (numerator / denominator);
  return monthlyPayment;
}

export function calculateTotalRepayment(
  mortgageAmount: number,
  mortgageTerm: number,
  mortgageRate: number
) {
  if (mortgageAmount <= 0 || mortgageTerm <= 0 || mortgageRate < 0) {
    throw new Error("Invalid input values");
  }

  if (mortgageRate === 0) {
    return mortgageAmount;
  }

  return (
    calculateMonthlyRepayment(mortgageAmount, mortgageTerm, mortgageRate) *
    12 *
    25
  );
}

export function calculateMonthlyInterestPayment(
  mortgageAmount: number,
  mortgageRate: number
): number {
  if (mortgageAmount <= 0 || mortgageRate < 0) {
    throw new Error("Invalid input values");
  }

  const monthlyInterestRate = mortgageRate / 12 / 100;
  const monthlyInterestPayment = mortgageAmount * monthlyInterestRate;
  return monthlyInterestPayment;
}

export function calculateTotalInterestPayment(
  mortgageAmount: number,
  mortgageTerm: number,
  mortgageRate: number
): number {
  if (mortgageAmount <= 0 || mortgageTerm <= 0 || mortgageRate < 0) {
    throw new Error("Invalid input values");
  }

  const monthlyInterestPayment = calculateMonthlyInterestPayment(
    mortgageAmount,
    mortgageRate
  );
  const totalInterestPayment = monthlyInterestPayment * mortgageTerm * 12;
  return totalInterestPayment;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
