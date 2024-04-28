<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import IconCode from '@/components/icons/IconCode.vue'
import IconChess from '@/components/icons/IconChess.vue'
import TheDeveloper from '@/views/TheDeveloper.vue'
import TheChessPlayer from './views/TheChessPlayer.vue'
import type { SwiperContainer } from 'swiper/element'

const { t, locale } = useI18n()

const changeLang = () => (locale.value === 'ru' ? (locale.value = 'en') : (locale.value = 'ru'))

const darkMode = ref<boolean>(false)

watch(darkMode, (val) => {
    const html = document.querySelector('html')
    val ? html?.classList.add('dark') : html?.classList.remove('dark')
})

const swiper = ref<SwiperContainer>()

const resumeMode = ref<'chessplayer' | 'developer'>('developer')

const changeResumeMode = () =>
    resumeMode.value === 'developer'
        ? (resumeMode.value = 'chessplayer')
        : (resumeMode.value = 'developer')

watch(resumeMode, () => {
    resumeMode.value === 'chessplayer'
        ? swiper.value?.swiper.slideTo(1)
        : swiper.value?.swiper.slideTo(0)
})
</script>

<template>
    <div
        class="min-h-screen flex flex-col justify-center bg-sky-100 overflow-hidden text-slate-800 transition dark:bg-slate-900 dark:text-sky-50"
    >
        <header
            class="flex justify-end gap-5 py-2 px-8 fixed top-0 left-0 bg-sky-100 w-full z-50 border-b-2 border-green-200 transition dark:bg-slate-900"
        >
            <IconCode
                v-if="resumeMode === 'developer'"
                @click="changeResumeMode"
                class="w-10 h-auto cursor-pointer"
            />
            <IconChess
                v-if="resumeMode === 'chessplayer'"
                @click="changeResumeMode"
                class="w-10 h-auto cursor-pointer"
            />
            <div
                class="flex items-center cursor-pointer select-none"
                @click="changeLang"
            >
                <span class="material-symbols-outlined text-4xl"> language </span>
                <span class="text-xl">{{ locale }}</span>
            </div>

            <span
                class="material-symbols-outlined text-4xl cursor-pointer select-none"
                @click="darkMode = !darkMode"
            >
                {{ darkMode ? 'dark_mode' : 'light_mode' }}
            </span>
        </header>
        <main class="w-full max-w-7xl mx-auto pt-20 pb-5 px-8 flex-1">
            <section
                class="flex flex-col gap-5 text-center mb-12 animate__animated animate__fadeInDown"
            >
                <h1 class="font-bold text-7xl">{{ t('name') }}</h1>
                <h2 class="text-4xl">
                    {{
                        resumeMode === 'developer'
                            ? t('developer.speciality')
                            : t('chessplayer.title')
                    }}
                </h2>
            </section>
            <swiper-container
                ref="swiper"
                space-between="100"
                allow-touch-move="false"
                speed="1000"
                auto-height="true"
            >
                <swiper-slide>
                    <TheDeveloper />
                </swiper-slide>
                <swiper-slide>
                    <TheChessPlayer />
                </swiper-slide>
            </swiper-container>
        </main>
    </div>
</template>

<style scoped></style>
