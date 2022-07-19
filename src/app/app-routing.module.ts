import { IndividualComponent } from './pages/individual/individual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [{
  path:":nickname",
  component: HomeComponent,
},
{
  path:"d/:id",
  component: TutorialComponent,
},
{
  path:"catalogo/:id",
  component: IndividualComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
