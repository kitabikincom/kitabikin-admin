import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// RESOLVER
import { SidebarResolver } from '@resolvers/private';

const routes: Routes = [
  {
    path: '',
    resolve: {
      hero: SidebarResolver,
    },
    data: {
      sidebarCode: 'invitation',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./invitation-page/invitation-page.module').then((m) => m.InvitationPageModule),
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then((m) => m.EventModule),
      },
      {
        path: 'event-package',
        loadChildren: () => import('./event-package/event-package.module').then((m) => m.EventPackageModule),
      },
      {
        path: 'theme-category',
        loadChildren: () =>
          import('./theme-category/theme-category.module').then((m) => m.ThemeCategoryModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'theme-feature',
        loadChildren: () => import('./theme-feature/theme-feature.module').then((m) => m.ThemeFeatureModule),
      },
      {
        path: 'invitation',
        loadChildren: () => import('./invitation/invitation.module').then((m) => m.InvitationModule),
      },
      {
        path: 'testimonial',
        loadChildren: () => import('./testimonial/testimonial.module').then((m) => m.TestimonialModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationRoutingModule {}
