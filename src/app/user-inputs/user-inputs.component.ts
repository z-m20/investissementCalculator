import { Component, EventEmitter, Output } from '@angular/core';
import { InvestissementInputs } from '../service/investissement.model';
import { FormsModule } from '@angular/forms';
import { OutgoingMessage } from 'http';
import { InvestissementService } from '../service/investissement.service';


@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.scss'
})
export class UserInputsComponent {

  constructor(private investissementService: InvestissementService) { }
  investissementInputs: InvestissementInputs = {
    initialInvestissement: 0,
    duration: 0,
    interestRate: 0,
    annualInvestissement: 0
  }

  onSubmit() {
    this.investissementService.calculateInvestmentResults(this.investissementInputs);
  }
}
