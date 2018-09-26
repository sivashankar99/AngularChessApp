// we created an Interface to identify a piece and do operations on it
export interface IPiece {
    id: number; // not going to change
    class: string; // for assigning color of background
    posId: string; // position of the given piece in chess terminology
    pieceId: string; // each piece is assigned a unique Id
    team: string; // which team this piece belongs to
    type: string; // What type of piece is this eg . rook , pawn etc.,
    posmoves: string[]; // what are all the possible moves this piece has
    imageUrl: string; // corresponding image URL
}
