import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {CollectionPointsComponent} from "@pages/collection-points/collection-points.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "collection-points",
    component: CollectionPointsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
