import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { PieceData } from './pieces/piece-data';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BoardComponent } from './board/board.component';
import { PieceComponent } from './pieces/piece.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
   BoardComponent,
   PieceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(PieceData),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
