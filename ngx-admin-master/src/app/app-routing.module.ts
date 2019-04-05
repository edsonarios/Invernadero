import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'Principal', loadChildren: 'app/principal/principal.module#PrincipalModule'},
  { path: 'Usuario', loadChildren: 'app/usuario/usuario.module#UsuarioModule'},
  { path: 'Administrador', loadChildren: 'app/administrador/administrador.module#AdministradorModule'},
  { path: 'Tester', loadChildren: 'app/tester/tester.module#TesterModule'},
  { path: '', redirectTo: 'Principal', pathMatch: 'full' },
  { path: '**', redirectTo: 'Principal' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
