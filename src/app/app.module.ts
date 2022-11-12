import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ContainerComponent } from './common/container/container.component';
import { HeaderButtonComponent } from './common/buttons/header-button/header-button.component';
import { FlexComponent } from './common/flex/flex.component';
import { NoLineHeightComponent } from './common/no-line-height/no-line-height.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContainerComponent,
    HeaderButtonComponent,
    FlexComponent,
    NoLineHeightComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
