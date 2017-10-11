import  { DirectoryComponent } from "./directory/directory.component";
import  { HomeComponent } from "./home/home.component";
import  { RouterModule , Routes} from "@angular/router";

const routes:Routes=[
  {path : '' , component: HomeComponent },
  {path : 'directory', component: DirectoryComponent}

];

export const Routing =[
  RouterModule.forRoot(routes)
]
