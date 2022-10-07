import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // person: Person = new Person;
  person: Person = new Person("", "", 0, "", "", "", "", 0)

  userId:any = this.route.snapshot.paramMap.get("userId");

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPerson()
  }

  addPerson(){
    console.log(this.person)
    this.personService.addUser(this.person).subscribe((data: any)=>{
      this.router.navigate(['dashboard'])
    })
  }

  getPerson(){
    this.personService.getUser(this.userId).subscribe((data: any)=> {
      console.log(data)
      this.person = data.userData
    })
  }

  updatePerson(){
    this.personService.updateUser(this.userId, this.person).subscribe((data: any)=> {
      this.person = data.data
      this.router.navigate(['dashboard'])
    })
  }

}
