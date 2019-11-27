import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { DvdService } from './../services/dvd.service';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: RouterModule) { }

  ngOnInit() {
     let index:number = +this.route.snapshot.paramMap.get('index');
     this.dvd$ = this.dvdService.get(index);
  }

  goBack(){
    this.router.navigate(['/dvds']);
  }

}
