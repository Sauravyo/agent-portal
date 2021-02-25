import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent/agent.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CreateEditAgentComponent } from './agent/create-edit-agent/create-edit-agent.component';



@NgModule({
  declarations: [AgentComponent, CreateEditAgentComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AgentComponent
  ]
})
export class WidgetCommonModule { }
