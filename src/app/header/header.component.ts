import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  $(document).ready(function(){
    $('.fa-bars').click(function(){
      $('.fa-bars').toggleClass('active')
      $('.navbar-nav').toggleClass('active')
    })
  })
  }

}
