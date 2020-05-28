import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
