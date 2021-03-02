import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {

  constructor(public globalvar : GlobalvarService) { }

  ngOnInit() {
    this.RefreshData()
    this.RefreshData2()
  }

  data : String = ""
  item;
  like = this.globalvar.getDatafavorite()

  RefreshData(){
    if(this.like == true){
      this.item = [
        {judul : this.globalvar.getDataJudul(), isi : this.globalvar.getDataisi(), tanggal : this.globalvar.getDatatanggal()}
      ]
    }
  }

  RefreshData2(){
    if(this.like == true){
      this.item = [
        this.data = this.data + "Judul : "
      ]
    }
  }

}





// htmlCode =
//     'To moja <b>pierwsza</b> aplikacja w <br> Angularze. <script>alert("Ale super!")</script>';

//   myURL = 'javascript:alert("Hej, co słychać?")';

//   sanitizedURL: SafeUrl;

//   constructor(private stanitizer: DomSanitizer) {
//     this.sanitizedURL = this.stanitizer.bypassSecurityTrustUrl(this.myURL);
//   }
