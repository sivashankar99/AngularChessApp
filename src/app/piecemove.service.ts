import { Injectable } from '@angular/core';
import { IPiece } from './pieces/piece';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
// import { RequestOptions, Response } from '@angular/http';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PieceMoveService {
private pieceUrl = 'api/pieces'; // 'src/api/pieces';
//  private pieceUrl = 'src/api/boardstatus/default.json';
//  private pieceUrl2 = 'src/api/boardstatus/default2.json';
pieces: IPiece[];
// piece = this.initializePiece();
showImage = false;
  constructor(private http: HttpClient) {
  }
  getPieces(): Observable<IPiece[]> {

    return this.http.get<IPiece[]>(this.pieceUrl).pipe(
        tap(  () => console.log('Move Piece Service called')),
           // data => console.log('ALL :' + JSON.stringify(data))),
        catchError(this.handleError)
    );
    }
    getPiece(id: string): Observable<IPiece | undefined> {
        return this.getPieces().pipe(
          map((pieces: IPiece[]) => pieces.find(p => p.posId === id))
           , tap(data => console.log('Data at piece ' + id + ':' + JSON.stringify(data)))
        );
      }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
       return throwError(errorMessage);
    }
    private extractData(res: JSON ) {
      // tslint:disable-next-line:prefer-const
      let body = JSON.stringify(res);
      return body || { } ;
    }
    // postToForm(movement): Observable<IPiece | undefined> {
    //   const body = JSON.stringify(movement);
    //   //   this.getPiece(movement).subscribe(
    //   //   piece => this.piece = piece));
    //   const headers = new HttpHeaders({'Content-type': 'application/json'});
    //   const options = ({headers: headers});
    //   console.log(body);
    //   return this.http.post('http://localhost:3100/postpiece', body, options).pipe(
    //     map(response => response['fields'])
    //   , catchError(this.handleError));
    // }
    // }postToForm(id: string): Observable<IPiece> {
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //   return this.http.post<IPiece>(this.pieceUrl, this.initializePiece(), { headers: headers })
    //     .pipe(
    //       tap(data => console.log('createpiece: ' + JSON.stringify(data))),
    //       catchError(this.handleError)
    //     );
    // }
    // this funtion changes the data in the board
    // it updates the board after  a valid move has been made
    updateBoard(toid: number , toclass: string , toposid: string, topieceid, toteam , totype ,  toposmoves , toimageurl):
    Observable<IPiece> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<IPiece>(this.pieceUrl, this.updatePiece(toid, toclass, toposid , topieceid,
        toteam, totype , toposmoves , toimageurl), { headers: headers })
        .pipe(
          tap(() => console.log('Updated the piece ' )),
          catchError(this.handleError)
        );
    }
    // this function changes properties of a piece and returns the piece
    private updatePiece(newId: number, newclass: string , newposId: string , newpieceId: string ,
      newteam: string, newtype: string, newposmoves , newimageurl): IPiece {
      // Return an initialized object
      return {
      id: newId,
      class: newclass,
      posId: newposId,
      pieceId: newpieceId,
      team: newteam,
      type: newtype,
      posmoves: newposmoves,
      imageUrl: newimageurl
      };
    }
    private initializePiece(): IPiece {
      // Return an initialized object
      return {
      id: 0,
      class: 'droptarget1',
      posId: 'a1',
      pieceId: 'wr1',
      team: 'White',
      type: 'Rook',
      posmoves: [],
      imageUrl: '../assets/whiterook.png'
      };
    }
}
