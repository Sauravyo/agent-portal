import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent/agent.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CreateEditAgentComponent } from './agent/create-edit-agent/create-edit-agent.component';
import { AgentService } from './agent/services/agent.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AgentComponent, 
    CreateEditAgentComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    //AgentComponent
  ],
  providers: [
    AgentService,
  ]
})
export class WidgetCommonModule { }
