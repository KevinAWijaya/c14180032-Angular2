import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private Datajudul : String = "inijudul";
  private Dataisi : String = "iniisi";
  private Datatanggal : String = "initanggal";
  private Datafavorite : boolean = true;

  constructor() { }

  public getDataJudul (){
    return this.Datajudul;
  }
  public getDataisi (){
    return this.Dataisi;
  }
  public getDatatanggal (){
    return this.Datatanggal;
  }
  public getDatafavorite (){
    return this.Datafavorite;
  }

  public setDataJudul(x : String){
    this.Datajudul = x;
  }
  public setDataisi(x : String){
    this.Dataisi = x;
  }
  public setDatatanggal(x : String){
    this.Datatanggal = x;
  }
  public setDatafavorite(x : boolean){
    this.Datafavorite = x;
  }

}