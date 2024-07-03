export interface InvestissementInputs {
 initialInvestissement: number,
 duration: number,
 interestRate: number,
 annualInvestissement: number,
}

export interface InvestissementAnnualData {
 year: number,
 interestRate: number,
 valueEndOfYear: number,
 annualInvestment: number,
 totalInterest: number,
 totalAmountInvested: number,
}