const getPiecePath = (pieceID: string): string => {
    switch (pieceID) {
        case 'wK':
            return '4/42/Chess_klt'

        case 'bK':
            return 'f/f0/Chess_kdt'

        case 'wQ':
            return '1/15/Chess_qlt'

        case 'bQ':
            return '4/47/Chess_qdt'

        case 'wR':
            return '7/72/Chess_rlt'

        case 'bR':
            return 'f/ff/Chess_rdt'

        case 'wB':
            return 'b/b1/Chess_blt'

        case 'bB':
            return '9/98/Chess_bdt'

        case 'wN':
            return '7/70/Chess_nlt'

        case 'bN':
            return 'e/ef/Chess_ndt'

        case 'wP':
            return '4/45/Chess_plt'

        case 'bP':
            return 'c/c7/Chess_pdt'
        default:
            return ''
    }
}

export { getPiecePath }
