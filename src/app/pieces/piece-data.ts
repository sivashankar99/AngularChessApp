import { InMemoryDbService} from 'angular-in-memory-web-api';
import { IPiece } from './piece';

export class PieceData implements InMemoryDbService {
    createDb() {
        const pieces: IPiece [] = [
            {
                'id': 1,
                'class': 'WhiteGrid',
                'posId': 'a8',
                'pieceId': 'br1',
                'team': 'Black',
                'type': 'Rook',
                'posmoves': ['a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1', 'd8', 'b8', 'c8', 'e8', 'f8', 'g8', 'h8'],
                'imageUrl': '../../assets/blackrook.png'
            },
            {
                'id' : 2,
                'class': 'BlackGrid',
                'posId': 'b8',
                'pieceId': 'bn1',
                'team': 'Black',
                'type': 'Knight',
                'posmoves': ['a6', 'c6' , 'd7'],
                'imageUrl': '../../assets/blackknight.png'
            },
            {
                'id' : 3,
                'class': 'WhiteGrid',
                'posId': 'c8',
                'pieceId': 'bl1',
                'team': 'Black',
                'type': 'Bishop',
                'posmoves': ['b7', 'a6', 'd7', 'e6', 'f5', 'g4', 'h3'],
                'imageUrl': '../../assets/blackBishop.png'
            },
            {
                'id' : 4,
                'class': 'BlackGrid',
                'posId': 'd8',
                'pieceId': 'bq',
                'team': 'Black',
                'type': 'Queen',
                'posmoves': ['c7', 'b6', 'a5', 'e7', 'f6', 'g5', 'h4' , 'a8', 'b8', 'c8', 'e8', 'f8', 'g8', 'h8'],
                'imageUrl': '../../assets/blackqueen.png'
            },
            {
                'id' : 5,
                'class': 'WhiteGrid',
                'posId': 'e8',
                'pieceId': 'bk',
                'team': 'Black',
                'type': 'King',
                'posmoves': ['d8', 'f8', 'd7', 'e7', 'f7'],
                'imageUrl': '../../assets/blackking.png'
            },
            {
                'id' : 6,
                'class': 'BlackGrid',
                'posId': 'f8',
                'pieceId': 'bl2',
                'team': 'Black',
                'type': 'Bishop',
                'posmoves': ['h6', 'g7', 'e7', 'd6', 'c5', 'b4', 'a3'],
                'imageUrl': '../../assets/blackBishop.png'
            },
            {
                'id' : 7,
                'class': 'WhiteGrid',
                'posId': 'g8',
                'pieceId': 'bn2',
                'team': 'Black',
                'type': 'Knight',
                'posmoves': ['h6', 'f6', 'e7'],
                'imageUrl': '../../assets/blackknight.png'
            },
            {
                'id' : 8,
                'class': 'BlackGrid',
                'posId': 'h8',
                'pieceId': 'br2',
                'team': 'Black',
                'type': 'Rook',
                'posmoves': ['h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1' , 'd8', 'b8', 'c8', 'e8', 'f8', 'g8', 'h8' ],
                'imageUrl': '../../assets/blackrook.png'
            },
            {
                'id' : 9,
                'class': 'BlackGrid',
                'posId': 'a7',
                'pieceId': 'bpa',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['a6', 'a5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 10,
                'class': 'WhiteGrid',
                'posId': 'b7',
                'pieceId': 'bpb',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['b6', 'b5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 11,
                'class': 'BlackGrid',
                'posId': 'c7',
                'pieceId': 'bpc',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['c6', 'c5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 12,
                'class': 'WhiteGrid',
                'posId': 'd7',
                'pieceId': 'bpd',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['d6', 'd5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 13, 'class': 'BlackGrid',
                'posId': 'e7',
                'pieceId': 'bpe',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['e6', 'e5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 14, 'class': 'WhiteGrid',
                'posId': 'f7',
                'pieceId': 'bpf',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['f6', 'f5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 15, 'class': 'BlackGrid',
                'posId': 'g7',
                'pieceId': 'bpg',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['g6', 'g5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 16, 'class': 'WhiteGrid',
                'posId': 'h7',
                'pieceId': 'bph',
                'team': 'Black',
                'type': 'pawn',
                'posmoves': ['h6', 'h5'],
                'imageUrl': '../../assets/blackpawn.png'
            },
            {
                'id' : 17, 'class': 'WhiteGrid',
                'posId': 'a6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 18, 'class': 'BlackGrid',
                'posId': 'b6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 19, 'class': 'WhiteGrid',
                'posId': 'c6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 20, 'class': 'BlackGrid',
                'posId': 'd6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 21, 'class': 'WhiteGrid',
                'posId': 'e6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 22, 'class': 'BlackGrid',
                'posId': 'f6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 23, 'class': 'WhiteGrid',
                'posId': 'g6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 24, 'class': 'BlackGrid',
                'posId': 'h6',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 25, 'class': 'BlackGrid',
                'posId': 'a5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 26, 'class': 'WhiteGrid',
                'posId': 'b5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 27, 'class': 'BlackGrid',
                'posId': 'c5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 28, 'class': 'WhiteGrid',
                'posId': 'd5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 29, 'class': 'BlackGrid',
                'posId': 'e5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 30, 'class': 'WhiteGrid',
                'posId': 'f5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 31, 'class': 'BlackGrid',
                'posId': 'g5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 32, 'class': 'WhiteGrid',
                'posId': 'h5',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 33, 'class': 'WhiteGrid',
                'posId': 'a4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 34, 'class': 'BlackGrid',
                'posId': 'b4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 35, 'class': 'WhiteGrid',
                'posId': 'c4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 36, 'class': 'BlackGrid',
                'posId': 'd4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 37, 'class': 'WhiteGrid',
                'posId': 'e4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 38, 'class': 'BlackGrid',
                'posId': 'f4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 39, 'class': 'WhiteGrid',
                'posId': 'g4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 40, 'class': 'BlackGrid',
                'posId': 'h4',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 41, 'class': 'BlackGrid',
                'posId': 'a3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 42, 'class': 'WhiteGrid',
                'posId': 'b3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 43, 'class': 'BlackGrid',
                'posId': 'c3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 44, 'class': 'WhiteGrid',
                'posId': 'd3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 45, 'class': 'BlackGrid',
                'posId': 'e3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 46, 'class': 'WhiteGrid',
                'posId': 'f3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 47, 'class': 'BlackGrid',
                'posId': 'g3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 48, 'class': 'WhiteGrid',
                'posId': 'h3',
                'pieceId': '',
                'team': '',
                'type': '',
                'posmoves': [],
                'imageUrl': ''
            },
            {
                'id' : 49, 'class': 'WhiteGrid',
                'posId': 'a2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['a3', 'a4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 50, 'class': 'BlackGrid',
                'posId': 'b2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['b3', 'b4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 51, 'class': 'WhiteGrid',
                'posId': 'c2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['c3', 'c4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 52, 'class': 'BlackGrid',
                'posId': 'd2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['d3', 'd4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 53, 'class': 'WhiteGrid',
                'posId': 'e2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['e3', 'e4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 54, 'class': 'BlackGrid',
                'posId': 'f2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['f3', 'f4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 55, 'class': 'WhiteGrid',
                'posId': 'g2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['g3', 'g4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 56, 'class': 'BlackGrid',
                'posId': 'h2',
                'pieceId': '',
                'team': 'White',
                'type': 'pawn',
                'posmoves': ['h3', 'h4'],
                'imageUrl': '../../assets/whitepawn.png'
            },
            {
                'id' : 57, 'class': 'BlackGrid',
                'posId': 'a1',
                'pieceId': 'wr1',
                'team': 'White',
                'type': 'Rook',
                'posmoves': ['a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a8' , 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
                'imageUrl': '../../assets/whiterook.png'
            },
            {
                'id' : 58, 'class': 'WhiteGrid',
                'posId': 'b1',
                'pieceId': 'wn1',
                'team': 'White',
                'type': 'Knight',
                'posmoves': ['a3', 'c3', 'd2'],
                'imageUrl': '../../assets/whiteknight.png'
            },
            {
                'id' : 59, 'class': 'BlackGrid',
                'posId': 'c1',
                'pieceId': 'wl1',
                'team': 'White',
                'type': 'Bishop',
                'posmoves': ['b2', 'a3', 'd2', 'e3', 'f4', 'g5', 'h6'],
                'imageUrl': '../../assets/whiteBishop.png'
            },
            {
                'id' : 60, 'class': 'WhiteGrid',
                'posId': 'd1',
                'pieceId': 'wq',
                'team': 'White',
                'type': 'Queen',
                'posmoves': ['c2', 'b3', 'a4', 'e2', 'f3', 'g4', 'h5' , 'b1', 'c1', 'a1', 'e1', 'f1', 'g1', 'h1'],
                'imageUrl': '../../assets/whitequeen.png'
            },
            {
                'id' : 61, 'class': 'BlackGrid',
                'posId': 'e1',
                'pieceId': 'wk',
                'team': 'White',
                'type': 'King',
                'posmoves': ['d1', 'f1', 'f2', 'd2', 'e2'],
                'imageUrl': '../../assets/whiteking.png'
            },
            {
                'id' : 62, 'class': 'WhiteGrid',
                'posId': 'f1',
                'pieceId': 'wl2',
                'team': 'White',
                'type': 'Bishop',
                'posmoves': ['e2', 'd3', 'c4', 'b5', 'a6', 'g2', 'h3'],
                'imageUrl': '../../assets/whiteBishop.png'
            },
            {
                'id' : 63, 'class': 'BlackGrid',
                'posId': 'g1',
                'pieceId': 'wn2',
                'team': 'White',
                'type': 'Knight',
                'posmoves': ['f3', 'h3', 'e2'],
                'imageUrl': '../../assets/whiteknight.png'
            },
            {
                'id' : 64, 'class': 'WhiteGrid',
                'posId': 'h1',
                'pieceId': 'wr2',
                'team': 'White',
                'type': 'Rook',
                'posmoves': ['h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h8', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'a1'],
                'imageUrl': '../../assets/whiterook.png'
            }
        ];
        return { pieces } ;
    }
}
