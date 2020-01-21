import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ListArticlesComponent } from './pages/article/list-articles/list-articles.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SignupComponent },
  // Eager Import
  { path: 'articles', component: ListArticlesComponent },
  // Lazy Import - il n'y a pas d'import dans le haut du ficher et pas import dans le app module
  { path: 'video', loadChildren: () => import('./pages/video/video.module').then(m => m.VideoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
