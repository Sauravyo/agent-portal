import { Component, OnInit } from '@angular/core';
import { AgentModel } from './models/agent.model';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  public agentsList: AgentModel[] = [];
  constructor() { 
    var agent1 = new AgentModel();
    agent1.Name = "Santosh Gyali";
    agent1.Phone = "660-238-1234";
    var agent2 = new AgentModel();
    agent2.Name = "Radhika Praj";
    agent2.Phone = "660-238-1235";

    this.agentsList.push(agent1);
    this.agentsList.push(agent2);
  }

  ngOnInit(): void {
  }

  CreateAgent(){
    //open crete-edit-component
    console.log("ok function is working")
    console.log(this.agentsList)
  }

}
