import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';


const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
