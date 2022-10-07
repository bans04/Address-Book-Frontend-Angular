import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public personDetails: any = [];
  // public personDetails: Observable<Person>;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons(){
    this.personService.getUsers().subscribe((data: any)=>{
      console.log(data)
      this.personDetails = data.userData;
      
    })
  }

  removePerson(userId: number){
    this.personService.removeUser(userId).subscribe((data: any)=>{
      console.log(data.data)
      this.ngOnInit()
      this.router.navigate(['dashboard'])
    })
  }

  updatePerson(userId: number){
    this.router.navigate(['update', userId])
  }

}
