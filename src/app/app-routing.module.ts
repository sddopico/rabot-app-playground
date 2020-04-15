import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "secret", component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
