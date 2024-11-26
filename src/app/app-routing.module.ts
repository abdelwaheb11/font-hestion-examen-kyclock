import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { examenComponent } from './examen/examen.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "examen", component : examenComponent,canActivate:[AuthGuard], data : {roles:['ADMIN','USER']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
