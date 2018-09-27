import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>Hi</h1>`
})
export class RulesComponent implements OnInit {
  cols = 'abcdefgh'.split('');
  rows = '12345678'.split('');
  constructor() { }

  generate_for_rook(row, col, changedloc): string[] {
    const posmoves = []; // 'b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1' , 'a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'];
    let i: number;
    let newide: string;
    for (i = this.rows.indexOf(row); i <= 7; i++) {
        newide = col.concat(i.toString()); // target
        if (newide === changedloc) {} else if (document.getElementById(newide).childNodes.length === 2) {
          document.getElementById(newide).style.background = 'red';
          posmoves.push(newide);
          break;
        } else {
          document.getElementById(newide).style.background = 'blue';
          posmoves.push(newide);
        }
        }
        for (i = this.rows.indexOf(row) - 1; i >= 0; i--) {
        newide = col.concat(i.toString()); // target

        if (document.getElementById(newide).childNodes.length === 2) {
          document.getElementById(newide).style.background = 'red';
          posmoves.push(newide);
          break;
        } else {
          document.getElementById(newide).style.background = 'blue';
          posmoves.push(newide);
        }
        }
        for (i = this.cols.indexOf(col); i <= 7; i++) {

        newide = this.cols[i].concat(row.toString());
        if (newide === changedloc) {} else if (document.getElementById(newide).childNodes.length === 2) {
          document.getElementById(newide).style.background = 'red';
          posmoves.push(newide);
          break;
        } else {
          document.getElementById(newide).style.background = 'blue';
          posmoves.push(newide);
        }
      }
      for (i = this.cols.indexOf(col) - 1; i >= 0; i--) {

       newide = this.cols[i].concat(row.toString());
        if (newide === changedloc) {
        } else if (document.getElementById(newide).childNodes.length === 2) {
          document.getElementById(newide).style.background = 'red';
          posmoves.push(newide);
          break;
        } else {
          document.getElementById(newide).style.background = 'blue';
          posmoves.push(newide);
        }
      }
      return posmoves;
  }
  generate_for_bishop(row, col): string[] {
    const posmoves = [];
    const vc = this.cols.indexOf(col) ;
    const vr = this.rows.indexOf(row) ;
    let c = vc;
    let r = vr;
    let newide: string;
    while (c >= 0 && r >= 0  && c <= 7 && r <= 7) {
      newide = (this.cols[c]).concat(this.rows[r]);
      posmoves.push(newide);
      c--;
      r--;
    }
    c = vc;
    r = vr;
    while (c >= 0 && r >= 0  && c <= 7 && r <= 7) {
      newide = (this.cols[c]).concat(this.rows[r]);
      posmoves.push(newide);
      c--;
      r++;
    }
    c = vc;
    r = vr;
    while (c >= 0 && r >= 0  && c <= 7 && r <= 7) {
      newide = (this.cols[c]).concat(this.rows[r]);
      posmoves.push(newide);
      c++;
      r--;
    }
    c = vc;
    r = vr;
    while (c >= 0 && r >= 0  && c <= 7 && r <= 7) {
      newide = (this.cols[c]).concat(this.rows[r]);
      posmoves.push(newide);
      c++;
      r++;
    }
    // let allmoves = '';
    // for (const posmove of posmoves) { allmoves = allmoves.concat(posmove, ','); }
    // this.toastrserv.info(allmoves);
    return posmoves; }
  generate_for_knight(row, col): string[] {
    // tslint:disable-next-line:prefer-const
    let posmoves = [];
    const c = this.cols.indexOf(col) ;
    const r = this.rows.indexOf(row) ;
    let newide: string;
    if (0 <= (c - 2) && (c - 2) <= 7) {
        if (0 <= (r - 1) && (r - 1)  <= 7) {
          newide = this.cols[c - 2].concat(this.rows[r - 1]);
          posmoves.push(newide); }
        if (0 <= (r + 1) && (r + 1) <= 7) {
          newide = this.cols[c - 2].concat(this.rows[r + 1]);
          posmoves.push(newide); }}
    if (0 <= (c - 1) && (c - 1) <= 7) {
      if (0 <= (r - 2) && (r - 2)  <= 7) {
        newide = this.cols[c - 1].concat(this.rows[r - 2]);
        posmoves.push(newide); }
      if (0 <= (r + 2) && (r + 2) <= 7) {
        newide = this.cols[c - 1].concat(this.rows[r + 2]);
        posmoves.push(newide); }}
    if (0 <= (c + 1) && (c + 1) <= 7) {
      if (0 <= (r - 2) && (r - 2)  <= 7) {
        newide = this.cols[c + 1].concat(this.rows[r - 2]);
        posmoves.push(newide); }
      if (0 <= (r + 2) && (r + 2) <= 7) {
        newide = this.cols[c + 1].concat(this.rows[r + 2]);
        posmoves.push(newide); }}
    if (0 <= (c + 2) && (c + 2) <= 7) {
      if (0 <= (r - 1) && (r - 1)  <= 7) {
        newide = this.cols[c + 2].concat(this.rows[r - 1]);
        posmoves.push(newide); }
      if (0 <= (r + 1) && (r + 1) <= 7) {
        newide = this.cols[c + 2].concat(this.rows[r + 1]);
        posmoves.push(newide); }}
    return posmoves;
  }
  ngOnInit() {
  }

}
