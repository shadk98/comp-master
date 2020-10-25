import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PatnersComponent } from './patners/patners.component';
import { TabsComponent } from './tabs/tabs.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { ApplyInfoComponent } from './apply-info/apply-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { IncomeInfoComponent } from './income-info/income-info.component';
import { SecurityPassComponent } from './security-pass/security-pass.component'

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PatnersComponent, TabsComponent, PersonInfoComponent, ApplyInfoComponent, EducationInfoComponent, AdditionalInfoComponent, IncomeInfoComponent, SecurityPassComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  
})
export class CollectionsModule { }
