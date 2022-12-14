import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log(routeid);
  } 

}