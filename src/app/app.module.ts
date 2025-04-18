import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CssGridTreeComponent } from './css-grid-tree/css-grid-tree.component';
import { CdkHierarchyComponent } from './cdk-hierarchy/cdk-hierarchy.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
  ],
  declarations: [AppComponent, CssGridTreeComponent, CdkHierarchyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
