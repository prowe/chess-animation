import { PieceColor, PieceProps, PieceType } from "./Piece/Piece";

function buildPawnRow(color: PieceColor, y: number): PieceProps[] {
    return new Array(8).fill(null).map((_: any, x: number) => ({
        color,
        x,
        y,
        onBoard: true,
        type: PieceType.Pawn,
    }));
}

function buildBackRow(color: PieceColor, y: number): PieceProps[] {
    const types: PieceType[] = [
        PieceType.Rook,
        PieceType.Knight,
        PieceType.Bishop,
        PieceType.King,
        PieceType.Queen,
        PieceType.Bishop,
        PieceType.Knight,
        PieceType.Rook
    ];
    return types.map((type: PieceType, x: number) => ({
        color,
        x,
        y,
        onBoard: true,
        type
    }));
}

export default function buildInitialGameState(): PieceProps[] {
    return [
        ...buildBackRow(PieceColor.Black, 0),
        ...buildPawnRow(PieceColor.Black, 1),
        ...buildPawnRow(PieceColor.White, 6),
        ...buildBackRow(PieceColor.White, 7),
    ];
}