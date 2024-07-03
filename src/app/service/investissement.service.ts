import { Injectable } from '@angular/core';
import { InvestissementAnnualData, InvestissementInputs } from './investissement.model';

@Injectable({
  providedIn: 'root'
})
export class InvestissementService {

  constructor() { }

  annualData: InvestissementAnnualData[] = [];

  calculateInvestmentResults(investissementInputs: InvestissementInputs) {
    let investmentValue = investissementInputs.initialInvestissement;

    for (let i = 0; i < investissementInputs.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investissementInputs.interestRate / 100);
      investmentValue += interestEarnedInYear + investissementInputs.annualInvestissement;

      const totalInterest =
        investmentValue - investissementInputs.annualInvestissement * year - investissementInputs.initialInvestissement;

      this.annualData.push({
        year: year,
        interestRate: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investissementInputs.annualInvestissement,
        totalInterest: totalInterest,
        totalAmountInvested: investissementInputs.initialInvestissement + investissementInputs.annualInvestissement * year,
      });
    }
  }
}


