import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {path: 'list', component: ListRenderComponent},
  {path: 'event', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipes', component: PipesComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
