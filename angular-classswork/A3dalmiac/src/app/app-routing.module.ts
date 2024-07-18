import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceDalmiacComponent } from './ace-dalmiac/ace-dalmiac.component';
import { KingDalmiacComponent } from './king-dalmiac/king-dalmiac.component';
import { QueenDalmiacComponent } from './queen-dalmiac/queen-dalmiac.component';
import { JackDalmiacComponent } from './jack-dalmiac/jack-dalmiac.component';

const routes: Routes = [
  { path: '', redirectTo: '/ace', pathMatch: 'full' },
  { path: 'ace', component: AceDalmiacComponent },
  { path: 'king', component: KingDalmiacComponent },
  { path: 'queen', component: QueenDalmiacComponent },
  { path: 'jack', component: JackDalmiacComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
