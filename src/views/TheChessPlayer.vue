<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const boardOptions = {
    pieceTheme: (piece: string) => {
        let piecePath = ''
        switch (piece) {
            case 'wK': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt' 
            break
            case 'bK': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt' 
            break
            case 'wQ': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt' 
            break
            case 'bQ': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt' 
            break
            case 'wR': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt' 
            break
            case 'bR': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt' 
            break
            case 'wB': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt' 
            break
            case 'bB': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt' 
            break
            case 'wN': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt'
            break
            case 'bN': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt'
            break
            case 'wP': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt'
            break
            case 'bP': piecePath = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt'
        }

        return `${piecePath}45.svg`
    },
    showNotation: false
}

onMounted(() => {
    // @ts-ignore: Unreachable code error
    Chessboard('favorite-move', {
        ...boardOptions,
        position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR',
    })

    // @ts-ignore: Unreachable code error
    Chessboard('favorite-opening-white', {
        ...boardOptions,
        position: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R',
    })

    // @ts-ignore: Unreachable code error
    Chessboard('favorite-opening-black', {
        ...boardOptions,
        position: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR',
        orientation: 'black'
    })

    
})
</script>

<template>
    <article class="font-comfortaa font-medium grid grid-cols-3 gap-8 lg:flex lg:flex-col">
        <section class="col-span-full animate__animated animate__fadeIn animate__delay-1s">
            <h3 class="text-3xl mb-4">{{ t('chessplayer.experience.title') }}</h3>
            <p
                class="text-xl text-justify"
                v-html="t('chessplayer.experience.text')"
            ></p>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-2xl mb-4 flex flex-col">{{ t('chessplayer.favoriteMove') }} <b>e4</b></h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-move"
            ></div>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-2xl mb-4 flex flex-col">
                {{ t('chessplayer.favoriteOpening.white.title') }}
                <b>{{ t('chessplayer.favoriteOpening.white.text') }}</b>
            </h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-opening-white"
            ></div>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-2xl mb-4 flex flex-col">
                {{ t('chessplayer.favoriteOpening.black.title') }}
                <b>{{ t('chessplayer.favoriteOpening.black.text') }}</b>
            </h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-opening-black"
            ></div>
        </section>
    </article>
</template>
