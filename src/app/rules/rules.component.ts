import { Component } from '@angular/core';

@Component({
  template: `<h1>Hi</h1>`
})
export class RulesComponent {
  cols = 'abcdefgh'.split('');
  rows = '12345678'.split('');
  col: string;
  row: string;
  changedloc: string;
  private enemyteam: string;
   constructor(pieceloc: string) {
    this.col = pieceloc[0];
    this.row = pieceloc[1];
    this.changedloc = pieceloc;
    }
   public set enemyTeam(team: string) {
    if (team === 'White') {
      this.enemyteam = 'Black';
    } else if ( team === 'Black' ) {
      this.enemyteam = 'White';
    } else {
      throw console.error('Error in team assignment');
    }
  }
  public get enemyTeam(): string {
  return this.enemyteam;
  }

  generate_for_rook(): string[] {
    const posmoves = []; // 'b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1' , 'a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'];
    let i: number;
    let newide: string;
    for (i = this.rows.indexOf(this.row); i <= 7; i++) {
        newide = this.col.concat(i.toString()); // target
        if (newide === this.changedloc) {} else if (document.getElementById(newide).childNodes.length === 2) {
          posmoves.push(newide);
          break;
        } else {
          posmoves.push(newide);
        }
        }
        for (i = this.rows.indexOf(this.row) - 1; i >= 0; i--) {
        newide = this.col.concat(i.toString()); // target

        if (document.getElementById(newide).childNodes.length === 2) {
          posmoves.push(newide);
          break;
        } else {
          posmoves.push(newide);
        }
        }
        for (i = this.cols.indexOf(this.col); i <= 7; i++) {

        newide = this.cols[i].concat(this.row.toString());
        if (newide === this.changedloc) {} else if (document.getElementById(newide).childNodes.length === 2) {
          posmoves.push(newide);
          break;
        } else {
          posmoves.push(newide);
        }
      }
      for (i = this.cols.indexOf(this.col) - 1; i >= 0; i--) {

       newide = this.cols[i].concat(this.row.toString());
        if (newide === this.changedloc) {
        } else if (document.getElementById(newide).childNodes.length === 2) {
          posmoves.push(newide);
          break;
        } else {
          posmoves.push(newide);
        }
      }
      return posmoves;
  }
  generate_for_bishop(): string[] {
    const posmoves = [];
    const vc = this.cols.indexOf(this.col) ;
    const vr = this.rows.indexOf(this.row) ;
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
  generate_for_knight(): string[] {
    // tslint:disable-next-line:prefer-const
    let posmoves = [];
    const c = this.cols.indexOf(this.col) ;
    const r = this.rows.indexOf(this.row) ;
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
  generate_for_pawn(givenpieceteam): string[] {
    let posmoves = [];
    if (givenpieceteam === 'White') {
      posmoves = [this.col.concat(this.rows[this.rows.indexOf(this.row) + 1] )];
    } else if ( givenpieceteam === 'Black' ) {
      posmoves = [this.col.concat(this.rows[this.rows.indexOf(this.row) - 1] )];
    } else {
      throw console.error('Error in team assignment');
    }
    return posmoves;
  }
  generate_for_king( givenpieceteam): string[] {
    // tslint:disable-next-line:prefer-const
    let posmoves = [];
    const c = this.cols.indexOf(this.col) ;
    const r = this.rows.indexOf(this.row) ;
    if ((c + 1) <= 7) { posmoves.push(this.cols[c + 1].concat(this.row)); }
    if ((c - 1) >= 0) { posmoves.push(this.cols[c - 1].concat(this.row)); }
    if ((r + 1) <= 7) {
    posmoves.push(this.col.concat(this.rows[r + 1] ));
      if ((c + 1) <= 7) { posmoves.push(this.cols[c + 1].concat(this.rows[r + 1])); }
      if ((c - 1) >= 0) { posmoves.push(this.cols[c - 1].concat(this.rows[r + 1])); }
    }
    if ((r - 1) >= 0) {
      posmoves.push(this.col.concat(this.rows[r - 1] ));
        if ((c + 1) <= 7) { posmoves.push(this.cols[c + 1].concat(this.rows[r - 1])); }
        if ((c - 1) >= 0) { posmoves.push(this.cols[c - 1].concat(this.rows[r - 1])); }
      }

    this.isUnderCheck(givenpieceteam);
    return posmoves;
  }
  isUnderCheck(team): boolean {
    return false;
  }
}
