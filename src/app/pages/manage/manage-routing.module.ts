import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

const routes: Routes = [
  { path: '', component: ManageComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlist-details', component: PlaylistDetailsComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
