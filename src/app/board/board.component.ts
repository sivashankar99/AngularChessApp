import { Component, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import { PieceMoveService } from '../piecemove.service';
import { IPiece } from '../pieces/piece';
import { ToastrService } from '../common/toastr.service';
import { RulesComponent } from '../rules/rules.component';

@Component({
  selector: 'ch-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PieceMoveService]
})
export class BoardComponent implements OnInit {
  errorMessage: string;
  pieces: IPiece[];
  piece: IPiece;
  piece2: IPiece;
  showImage = true;
  elem: any ;
  newImage:  any;
  targetLoc = '';
  sourceLoc = '';
  cols = 'abcdefgh'.split('');
  rows = '12345678'.split('');
  turn = 'White';
  AllMoves: string[] = [ ];
  constructor(private piecemoveService: PieceMoveService,
    private toastrserv: ToastrService) {
  }
  setSource(newsource?: string): void { // function to set a source
    if (this.sourceLoc === '') {this.sourceLoc = newsource; }
    this.piecemoveService.getPiece(this.sourceLoc).subscribe(
    piece => this.piece = piece, error => this.errorMessage = <any>error );
  }
  setTarget(newTarget?: string ): void { // function to set target
    this.targetLoc = newTarget;
    this.auxMove();
    this.sourceLoc = '';
    this.targetLoc = '';
  }
  onClick(box): void {
    if (this.sourceLoc === '') {
    this.piecemoveService.getPiece(box).subscribe(
      piece => {this.piece = piece;
    // this.toastrserv.info(piece.team);
    if (this.turn === piece.team) {this.setSource(box);
    } else if (this.turn === '') {this.toastrserv.error('error in turn setting');
    } else {this.toastrserv.warning('Not Your turn'); }
    }, error => this.errorMessage = <any>error );
  } else if (this.sourceLoc !== '' && this.sourceLoc.length === 2) {
      this.setTarget(box);
      }
      this.highlight(box);
  }
  toID(mypos: string): number {
    const col = mypos[0];
    const row = mypos[1];
    let mult: number , base: number;
    switch (row) {
    case '8': mult = 0; break;
    case '7': mult = 1 ; break;
    case '6': mult = 2; break;
    case '5': mult = 3; break;
    case '4': mult = 4 ; break;
    case '3': mult = 5; break;
    case '2': mult = 6; break;
    case '1': mult = 7 ; break;
    default : mult = -1;
    }
    switch (col) {
    case 'a': base = 1 ; break;
    case 'b': base = 2; break;
    case 'c': base = 3; break;
    case 'd': base = 4 ; break;
    case 'e': base = 5; break;
    case 'f': base = 6; break;
    case 'g': base = 7 ; break;
    case 'h': base = 8; break;
    default: base = 0;
    }
    return mult * 8 + base;
  }
  updatePieceinServer(piece1posId, piece2posId) {
    const piece2Id = this.pieces[this.toID(piece2posId) - 1].id;
    const piece2class = this.pieces[this.toID(piece2posId) - 1].class;
    console.log(' ' , piece2Id , piece2class );
      this.piecemoveService.getPiece(piece1posId).subscribe(
        piece => {
        this.piece = piece;
        // const piece2posmoves  = this.updatePosMoves(piece2posId);
        this.piecemoveService.updateBoard(this.piece.id, this.piece.class, this.piece.posId,
          '' , '' , '' , [] , '').subscribe(
        () => console.log('successfully updated piece at ' , piece1posId),
        err => console.log('Error' , err)
        );
        this.piecemoveService.updateBoard(piece2Id, piece2class, piece2posId,
          this.piece.pieceId , this.piece.team , this.piece.type ,
          this.updatePosMoves(piece1posId , piece2posId) , this.piece.imageUrl).subscribe(
          // () => console.log('successfully updated piece at ' , piece2posId),
          // err => console.log('Error' , err)
          );
      }, error => this.errorMessage = <any>error );
  }
  updatePosMoves(ide?: string , changedloc?: string): string[] {
    if (ide === undefined) { ide = this.sourceLoc;
    console.log('can"t be here'); }
    if (changedloc === undefined) { changedloc = ide;
      console.log('can"t be there 2'); }
    console.log(this.toID(ide));
    // this.getMethisPiece(ide);
    const givenpiecetype = this.piece.type;
    const givenpieceteam = this.piece.team;
    console.log('given piece type is', givenpiecetype, '& team is ', givenpieceteam);
    const col = changedloc[0];
    const row = changedloc[1];
    // tslint:disable-next-line:prefer-const
    let posmoves: string[];
    const rules = new RulesComponent();
    switch (givenpiecetype) {
      case 'Rook':
      posmoves = rules.generate_for_rook(row, col, changedloc);
        break;
      case 'Knight':
        posmoves = rules.generate_for_knight(row, col);
      break;
      case 'Bishop':
      posmoves = rules.generate_for_bishop(row, col) ;
      break;
      case 'Queen':
      const posmoves1 = rules.generate_for_rook(row, col, changedloc);
      const posmoves2 = rules.generate_for_bishop(row, col);
      posmoves = posmoves1.concat(posmoves2);
      break;
      case 'King':
      break;
      case 'pawn':
      if (givenpieceteam === 'White') {
        posmoves = [col.concat(this.rows[this.rows.indexOf(row) + 1] )];
      } else if ( givenpieceteam === 'Black' ) {
        posmoves = [col.concat(this.rows[this.rows.indexOf(row) - 1] )];
      }
      break;
      }
      console.log('updated posmoves are: ', posmoves);
    // let givenElement = document.getElementById(box);
    if (posmoves === undefined ) {
      console.log('I got till here : this be bad yo!!');
      this.toastrserv.warning('I got till here : this be bad yo!!');
      this.toastrserv.error('Something is wrong');
      return ['a4', 'a5', 'a6' , 'b4', 'b5', 'b6']; }
    return posmoves;
  }


  auxMove(): void { // function to enable moving pieces by clicking
    // let sourceIndex :number ;
    console.log(document.getElementById(this.sourceLoc).id);
    console.log(this.piece.posmoves);
    this.move(this.sourceLoc,  this.piece.posmoves, this.piece.imageUrl, this.piece.id);
  }
  move(initialpos,  posMoves: string[], targetUrl, newId ): void {
    this.newImage = document.createElement('img');
    this.newImage.setAttribute('src', targetUrl);
    this.newImage.setAttribute('id' , newId);
    const finalpos = this.targetLoc ;
    const sourceElementChild = document.getElementById(initialpos).firstElementChild;
    const targetElement = document.getElementById(finalpos);
    // this.piecemoveService.updateBoard(finalpos).subscribe(data => console.log(data),  error => this.errorMessage = <any>error);
    console.log('Target is :' + finalpos + ' and has ' + targetElement.childNodes.length + ' children');
    if (posMoves.includes(finalpos) && sourceElementChild !== null && targetElement.childNodes.length === 1 ) {
    console.log('Moving piece to :' + finalpos);
    this.AllMoves.push(initialpos + ' to ' + finalpos );
    this.updatePieceinServer(initialpos, finalpos);
    const targetElementChild = sourceElementChild.cloneNode(true);
    // document.getElementById(finalpos).addEventListener( 'click', MouseEvent.prototype.preventDefault ,false);
    document.getElementById(finalpos).appendChild(targetElementChild);
    // targetElement.textContent = '';
    document.getElementById(initialpos).textContent = ' ';
    this.toggleTurn();
    this.toastrserv.success('Moved');
  } else if (posMoves.includes(finalpos) && sourceElementChild !== null && targetElement.childNodes.length !== 1) {
    let friend: boolean;
    let myteam: string , otherteam: string;
    // console.log(myteam);
    // const otherteam = this.getMethisPiece(finalpos) ;
    myteam = this.pieces[this.toID(initialpos) - 1].team ;
    otherteam = this.pieces[this.toID(finalpos) - 1].team ;
    // console.log('there is a piece already present at ' + finalpos + '.The given piece cannot be moved');
    friend = myteam === otherteam ;
    console.log(myteam , otherteam, friend);
    if (!friend) { this.AllMoves.push(initialpos + ' to ' + finalpos );
    this.updatePieceinServer(initialpos, finalpos);
    const targetElementChild = sourceElementChild.cloneNode(true);
    document.getElementById(finalpos).textContent = '';
    document.getElementById(finalpos).appendChild(targetElementChild);
    // targetElement.textContent = '';
    document.getElementById(initialpos).textContent = ' '; }
    console.log( this.pieces[this.toID(initialpos) - 1].team + otherteam + ' ' + myteam + this.toID(finalpos)  + ' ' + friend);
    this.toggleTurn();
    this.toastrserv.success('Captured');
  } else {
    console.log('The given piece cannot be moved to ' + finalpos + '. The possible Moves are ' + posMoves );
    this.toastrserv.warning('Can"t move there');
  }
  }
toggleTurn() {
  if (this.turn === 'White') {this.turn = 'Black';
} else if (this.turn === 'Black') { this.turn = 'White';
} else { console.error( 'Error in turn management'); }
}
highlight( pos: string): void {
  this.piecemoveService.getPiece(pos).subscribe(
        piece => {this.piece2 = piece;
  for (let i = 0; i < this.piece2.posmoves.length; i++) {
    // console.log(document.getElementById(pos[i]));
    this.elem = document.getElementById(this.piece2.posmoves[i]);
    this.elem.style.backgroundColor = 'lightgreen';
  }
}, error => this.errorMessage = <any>error );
}
  ngOnInit(): void {
   this.piecemoveService.getPieces().subscribe(
    pieces => this.pieces = pieces  ,
    error => this.errorMessage = <any>error
   );
  //  this.piecemoveService.getPiece(this.sourceLoc).subscribe(
  //   piece => this.piece = piece, error => this.errorMessage = <any>error );
  }
  // ngOnChanges( changes: SimpleChanges ): void {
  // // this.updatePosMoves(this.sourceLoc, this.targetLoc);
  // this.piecemoveService.getPieces().subscribe(
  //   pieces => this.pieces = pieces  ,
  //   error => this.errorMessage = <any>error
  //  );
  // }
}
