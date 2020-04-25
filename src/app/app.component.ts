import { Component, OnInit } from '@angular/core';
import { GitserviceService } from './gitservice.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'machineTest';
  userList: any;
  username: string = "vijay"
  totalRecord: Number = 0;
  userDetails: any;
  public isCollapsed = false;
  public expandedIndex = -1  
  btnName: string = "Details"
  config: any;
  sortType: string = 'asc';
  constructor(
    private service: GitserviceService,
    private ngxService: NgxUiLoaderService
   
  ) {}

  ngOnInit() {
   this.getUserList();
   this.config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.totalRecord
  };
  }
  getUserList() {
    this.ngxService.start();
    if (this.username !== '') {
      this.service.searchUser(this.username).subscribe((res: any )=> {
        console.log(res)
       
        this.userList = res.items;
        this.totalRecord = res.total_count;
      });
    } else {
      this.userList = [];
      this.totalRecord = 0;
    }
    this.ngxService.stop();
  }

  getUserDetail(userId, index) {
    this.ngxService.start();
    this.service.getUserDetailById(userId).subscribe((res: any )=> {
      console.log(res)
      this.ngxService.stop();
      this.expandedIndex = index === this.expandedIndex ? -1 : index;
      this.userDetails =  res;
      
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  changeSortBy(type) {
    console.log(type);
    this.sortType = type;
  }
  
}
