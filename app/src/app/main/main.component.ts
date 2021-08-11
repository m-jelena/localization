import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private translateService: TranslateService) {  
    translateService.addLangs(['en', 'sr-latn', 'sr-cyrl']);  
    translateService.setDefaultLang('sr-cyrl');  
  }

  translate(): TranslateService {
    return this.translateService;
  }

  private switchLang(lang: string) {  
    this.translateService.use(lang);  
  }  

  translateLatn() {
    this.switchLang('sr-latn');
  }

  translateCyrl() {
    this.switchLang('sr-cyrl');
  }

  translateEn() {
    this.switchLang('en');
  }
 
}
