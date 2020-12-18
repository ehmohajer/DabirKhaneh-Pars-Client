import { NgModule } from '@angular/core';
import { HasRoleDirective } from 'src/app/core/_base/directives/hasRole.directive';

@NgModule({
  declarations: [HasRoleDirective],
  exports: [HasRoleDirective],
})
export class HasRoleModule { }
