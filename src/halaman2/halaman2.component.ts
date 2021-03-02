import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {

  constructor(public globalvar : GlobalvarService) {}

  ngOnInit() {
    this.refreshButtonLike();
  }

  tanggal = this.globalvar.getDatatanggal();
  judul = this.globalvar.getDataJudul();
  isi = this.globalvar.getDataisi();
  like = this.globalvar.getDatafavorite();
  statusliked = "like";

  refreshButtonLike(){
    if (this.like == false){
      this.statusliked = "like";
    }else{
      this.statusliked = "dislike";
    }
  }

  LikeButton(){
    if (this.like == false){
      this.like = true;
      this.globalvar.setDatafavorite(true)
    }else{
      this.like = false;
      this.globalvar.setDatafavorite(false)
    }

    this.refreshButtonLike()

  }

}