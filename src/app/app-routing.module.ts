import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    // loadChildren: () => import('src/app/routes/main/main.module').then((m) => m.MainModule),
    data: { title: '메인페이지' },
  },
  {
    path: 'convert',
    // loadChildren: () => import('src/app/routes/convert/convert.module').then((m) => m.ConvertModule),
    data: { title: '변환페이지' },
  },
  {
    path: 'history',
    // loadChildren: () => import('src/app/routes/history/history.module').then((m) => m.HistoryModule),
    data: { title: '변환내역' },
  },
  {
    path: 'shipment',
    // loadChildren: () => import('src/app/routes/shipment/shipment.module').then((m) => m.ShipmentModule),
    data: { title: '선적현황' },
  },
  {
    path: 'basis/freetime',
    // loadChildren: () => import('src/app/routes/bs-freetime/bs-freetime.module').then((m) => m.BsFreetimeModule),
    data: { title: 'freetime' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
