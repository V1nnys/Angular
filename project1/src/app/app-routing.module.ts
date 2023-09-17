import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: 'list', component: ListRenderComponent},
  {path: 'event', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way', component: TwoWayBindingComponent},

  {path: 'list/:id', component: ItemDetailComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
