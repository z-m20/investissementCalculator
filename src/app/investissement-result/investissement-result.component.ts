import { Component, Input } from '@angular/core';
import { InvestissementAnnualData } from '../service/investissement.model';
import { CurrencyPipe } from '@angular/common';
import { InvestissementService } from '../service/investissement.service';

@Component({
  selector: 'app-investissement-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investissement-result.component.html',
  styleUrl: './investissement-result.component.scss'
})
export class InvestissementResultComponent {



  constructor(private investissementService: InvestissementService) { }
  annualData: InvestissementAnnualData[] | undefined = this.investissementService.annualData ;


}
