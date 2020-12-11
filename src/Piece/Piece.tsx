import React, { CSSProperties } from "react";
import icon_bd from './Chess_bdt45.svg';
import icon_bl from './Chess_blt45.svg';
import icon_kd from './Chess_kdt45.svg';
import icon_kl from './Chess_klt45.svg';
import icon_nd from './Chess_ndt45.svg';
import icon_nl from './Chess_nlt45.svg';
import icon_pd from './Chess_pdt45.svg';
import icon_pl from './Chess_plt45.svg';
import icon_qd from './Chess_qdt45.svg';
import icon_ql from './Chess_qlt45.svg';
import icon_rd from './Chess_rdt45.svg';
import icon_rl from './Chess_rlt45.svg';
import styles from './Piece.module.css';

export enum PieceColor {
    White,
    Black
 }

 export enum PieceType {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
 }

 export interface PieceProps {
    x: number; //0 based top-left (css coordinates)
    y: number;
    color: PieceColor;
    type: PieceType;
    onBoard: boolean;
 }

const typeToColorToSvg = {
    [PieceType.Pawn]: {
        [PieceColor.Black]: icon_pd,
        [PieceColor.White]: icon_pl,
    },
    [PieceType.Rook]: {
        [PieceColor.Black]: icon_rd,
        [PieceColor.White]: icon_rl,
    },
    [PieceType.Knight]: {
        [PieceColor.Black]: icon_nd,
        [PieceColor.White]: icon_nl,
    },
    [PieceType.Bishop]: {
        [PieceColor.Black]: icon_bd,
        [PieceColor.White]: icon_bl,
    },
    [PieceType.Queen]: {
        [PieceColor.Black]: icon_qd,
        [PieceColor.White]: icon_ql,
    },
    [PieceType.King]: {
        [PieceColor.Black]: icon_kd,
        [PieceColor.White]: icon_kl,
    },
};

export default function Piece({color, type, x, y}: PieceProps) {
    const style: CSSProperties = {
        left: `calc(var(--piece-size) * ${x})`,
        top: `calc(var(--piece-size) * ${y})`
    };

    return (
        <div className={styles.piece} style={style}>
            <img alt='' src={typeToColorToSvg[type][color]} />
        </div>
    );
}