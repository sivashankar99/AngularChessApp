import { Component, Input, Output, EventEmitter} from '@angular/core';
// import {  } from 'events';
import { ToastrService } from '../common/toastr.service';
import { PieceMoveService } from '../piecemove.service';
import { IPiece } from './piece';

@Component({
  selector: 'ch-piece',
  template: `
  <div [id]='mypiece.posId' [class]='mypiece.class' (click)= 'handleClick()' (mouseleave) = 'reset()'>
    <img *ngIf="mypiece.imageUrl !=='' " [src]='mypiece.imageUrl' [id]="mypiece.pieceId">
  </div>
  `
  // styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  constructor (private pieceserver: PieceMoveService, private toasts: ToastrService) {}

@Input() mypiece: any;
@Input() turn: string;
@Output() clickEmitter = new EventEmitter();
elem: any;
errorMessage: any;
piece: IPiece;

reset(): EventListener {
  for (let i = 0; i < document.getElementsByClassName('WhiteGrid').length; i++) {
    document.getElementsByClassName('WhiteGrid').item(i).setAttribute('style', '');
    document.getElementsByClassName('BlackGrid').item(i).setAttribute('style', '');
  }
  return ;
}
handleClick() {
//   this.pieceserver.getPiece(this.mypiece.posId).subscribe(
//     piece => {this.piece = piece;
//   // this.toasts.warning(piece.team);
//   if (this.turn === piece.team ) {
//   this.clickEmitter.emit(this.mypiece.posId);
//   } else if (piece.team === '') {
//   // this.toasts.warning('team unknown');
//   this.clickEmitter.emit(this.mypiece.posId);
//   } else { this.toasts.warning('Not Your turn'); }
// }, error => this.errorMessage = <any>error );
this.clickEmitter.emit(this.mypiece.posId);
}

}
