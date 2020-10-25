import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component'
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PatnersComponent } from './patners/patners.component';

import { PersonInfoComponent } from './person-info/person-info.component';
import { ApplyInfoComponent } from './apply-info/apply-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { IncomeInfoComponent } from './income-info/income-info.component';
import { SecurityPassComponent } from './security-pass/security-pass.component'


const routes: Routes = [
  {path: '', 
  component: CollectionsHomeComponent,
  /* children: [
    {path:'', component: BiographyComponent},
    {path:'companies', component: CompaniesComponent},
    {path:'partners', component: PatnersComponent}
  ] */

  children: [
    {path:'', component: PersonInfoComponent},
    {path:'applydetails', component: ApplyInfoComponent},
    {path:'educationdetails', component: EducationInfoComponent},
    {path:'additionaldetails', component: AdditionalInfoComponent},
    {path:'incomedetails', component: IncomeInfoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
