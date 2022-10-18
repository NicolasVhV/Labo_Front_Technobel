import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { Four0fourComponent } from './four0four/four0four.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { ListeCoopComponent } from './liste-coop/liste-coop.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

    { path: "compo", children: [
        { path: "events", component: EventComponent },
        { path: "listeCoop", component: ListeCoopComponent },
        { path: "inscription", component: InscriptionComponent },
        { path: "seConnecter", component: SeConnecterComponent},
    { path: "contact", component: ContactComponent }
  ]},




  { path: "**", component: Four0fourComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
