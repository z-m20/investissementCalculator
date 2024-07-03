import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { InvestissementResultComponent } from "./investissement-result/investissement-result.component";
import { InvestissementAnnualData, InvestissementInputs } from './service/investissement.model';
import { InvestissementService } from './service/investissement.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, UserInputsComponent, InvestissementResultComponent]
})
export class AppComponent {

  constructor(private investissementService: InvestissementService) { }

  title = 'investissement Calculator';

  calculateInvestissement(investissementInputs: InvestissementInputs) {
    console.log("calculateInvestissement was called from AppComponent");
    this.investissementService.calculateInvestmentResults(investissementInputs);
  }
}
