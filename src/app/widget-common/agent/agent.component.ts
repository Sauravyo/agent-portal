import { Component, OnInit } from '@angular/core';
import { AgentModel } from './models/agent.model';
import { AgentService } from './services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  public agentsList: any[] = [];
  constructor(public agentService: AgentService) {
   
  }

  ngOnInit() {
    this.agentService.getAgentListData(200).subscribe(agntData => {
      this.agentsList = agntData;
    });
  }

  CreateAgent() {
    //open crete-edit-component
   var newAgent = new AgentModel();
   newAgent.FirstName = "Radhika";

   this.agentsList.push(newAgent);
   console.log(this.agentsList)
  }

}
