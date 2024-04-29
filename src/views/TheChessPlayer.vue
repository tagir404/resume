<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const boardOptions = {
    pieceTheme: (piece: string) => {
        let piecePath = ''
        switch (piece) {
            case 'wK':
                piecePath = '4/42/Chess_klt'
                break
            case 'bK':
                piecePath = 'f/f0/Chess_kdt'
                break
            case 'wQ':
                piecePath = '1/15/Chess_qlt'
                break
            case 'bQ':
                piecePath = '4/47/Chess_qdt'
                break
            case 'wR':
                piecePath = '7/72/Chess_rlt'
                break
            case 'bR':
                piecePath = 'f/ff/Chess_rdt'
                break
            case 'wB':
                piecePath = 'b/b1/Chess_blt'
                break
            case 'bB':
                piecePath = '9/98/Chess_bdt'
                break
            case 'wN':
                piecePath = '7/70/Chess_nlt'
                break
            case 'bN':
                piecePath = 'e/ef/Chess_ndt'
                break
            case 'wP':
                piecePath = '4/45/Chess_plt'
                break
            case 'bP':
                piecePath = 'c/c7/Chess_pdt'
        }

        return `https://upload.wikimedia.org/wikipedia/commons/${piecePath}45.svg`
    },
    showNotation: false
}

onMounted(() => {
    // @ts-ignore: Unreachable code error
    Chessboard('favorite-move', {
        ...boardOptions,
        position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR'
    })

    // @ts-ignore: Unreachable code error
    Chessboard('favorite-opening-white', {
        ...boardOptions,
        position: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R'
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
            <p class="text-xl text-justify">
                <span
                    class="text-xl text-justify"
                    v-html="t('chessplayer.experience.text')"
                ></span> <span
                    >{{ t('chessplayer.accountLinkText') }}
                    <a
                        href="https://www.chess.com/member/tagirsulaev"
                        target="_blank"
                        >TagirSulaev</a
                    ></span
                >
            </p>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-3xl mb-4 flex flex-col gap-2">
                {{ t('chessplayer.favoriteMove') }} <b class="text-2xl">e4</b>
            </h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-move"
            ></div>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-3xl mb-4 flex flex-col gap-2">
                {{ t('chessplayer.favoriteOpening.white.title') }}
                <b class="text-2xl">{{ t('chessplayer.favoriteOpening.white.text') }}</b>
            </h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-opening-white"
            ></div>
        </section>
        <section class="flex flex-col justify-between">
            <h3 class="text-3xl mb-4 flex flex-col gap-2">
                {{ t('chessplayer.favoriteOpening.black.title') }}
                <b class="text-2xl">{{ t('chessplayer.favoriteOpening.black.text') }}</b>
            </h3>
            <div
                class="w-full self-center sm:w-[calc(100%-4px)]"
                id="favorite-opening-black"
            ></div>
        </section>
    </article>
</template>
