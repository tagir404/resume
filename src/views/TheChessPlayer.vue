<script setup lang="ts">
import { getPiecePath } from '@/modules/utils'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const boardOptions = {
    pieceTheme: (piece: string) =>
        `https://upload.wikimedia.org/wikipedia/commons/${getPiecePath(piece)}45.svg`,
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
            <p 
                class="text-xl text-justify" 
                v-html="t('chessplayer.experience.text')"
            ></p>
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
