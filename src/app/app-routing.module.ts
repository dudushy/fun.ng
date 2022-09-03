import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { HelloComponent } from './hello/hello.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'hello', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
