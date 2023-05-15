import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ButtonModule } from '@sentinels/pv-components-lib/button';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "giftcards",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent
    }
]

@NgModule({
    imports: [ButtonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [HomeComponent, CheckoutComponent]
})
export class AppRoutingModule {}