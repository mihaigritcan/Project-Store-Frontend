import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth/auth.guard";
import {AdminGuard} from "./auth/admin.guard";

const routes: Routes = [
  {
    path: "auth", component: AuthComponent,
  },
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "dashboard", component: DashboardComponent,
  },
  {
    path: "", redirectTo: "auth", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
