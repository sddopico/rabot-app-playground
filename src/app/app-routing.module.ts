import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DatePickerComponent } from "./date-picker/date-picker.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "secret", component: DatePickerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
