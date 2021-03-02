import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';


@Component({
  selector: 'app-halaman1',
  templateUrl: './halaman1.component.html',
  styleUrls: ['./halaman1.component.css']
})
export class Halaman1Component implements OnInit {

  constructor(public globalvar : GlobalvarService) { 
    this.judul1 = globalvar.getDataJudul();
    this.isi1 = globalvar.getDataisi();
    this.tanggal1 = globalvar.getDatatanggal();
  }

  ngOnInit() {
  }

  judul1;
  isi1;
  tanggal1;

  judul = "";
  isi = "";
  tanggal = Date();

  InputData(){
    this.judul1 = this.judul;
    this.isi1 = this.isi;
    this.tanggal1 = this.tanggal;

    this.globalvar.setDataJudul(this.judul1);
    this.globalvar.setDataisi(this.isi1);
    this.globalvar.setDatatanggal(this.tanggal1);
    this.globalvar.setDatafavorite(false);
  }
}