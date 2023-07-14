import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@visurel/iconify-angular';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { ScrollbarModule } from 'src/@vex/components/scrollbar/scrollbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MaterialModule } from './import-modules/material.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    IconModule,
    ContainerModule,
    ScrollbarModule,
    FlexLayoutModule,
    PageLayoutModule,
  ]
})
export class SharedModule { }
