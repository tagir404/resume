<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '@/modules/skills'
import { contacts } from '@/modules/contacts'
import BaseIcon from './components/BaseIcon.vue'

const darkMode = ref<boolean>(false)


const { t, locale } = useI18n()

function changeLang() {
    locale.value === 'ru' ? (locale.value = 'en') : (locale.value = 'ru')
}

watch(darkMode, val => {
    const html = document.querySelector('html')
    val ? html?.classList.add('dark') : html?.classList.remove('dark')
})
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center bg-sky-100 overflow-hidden text-slate-800 transition dark:bg-slate-900 dark:text-sky-50">
        <header
            class="flex justify-end gap-5 py-2 px-8 fixed top-0 left-0 bg-sky-100 w-full z-50 border-b-2 border-green-200 transition dark:bg-slate-900"
        >
            <p
                class="flex items-center cursor-pointer select-none"
                @click="changeLang"
            >
                <span class="material-symbols-outlined text-4xl"> language </span>
                <span class="text-xl">{{ locale }}</span>
            </p>

            <span
                class="material-symbols-outlined text-4xl cursor-pointer select-none"
                @click="darkMode = !darkMode"
            >
                {{ darkMode ? 'dark_mode' : 'light_mode' }}
            </span>
        </header>
        <main class="max-w-7xl mx-auto pt-20 pb-5 px-8 flex-1">
            <section
                class="flex flex-col gap-5 text-center mb-12 animate__animated animate__fadeInDown"
            >
                <h1 class="font-bold text-7xl">{{ t('name') }}</h1>
                <h2 class="text-4xl">{{ t('speciality') }}</h2>
            </section>
            <article class="font-comfortaa font-medium grid grid-cols-5 gap-8 lg:flex lg:flex-col">
                <section class="col-span-full animate__animated animate__fadeIn animate__delay-1s">
                    <h3 class="text-3xl mb-4">{{ t('expirience.title') }}</h3>
                    <p
                        class="text-xl text-justify"
                        v-html="t('expirience.text')"
                    ></p>
                </section>
                <section class="col-span-3 animate__animated animate__fadeInLeft animate__delay-2s">
                    <h3 class="text-3xl mb-4">{{ t('stackTitle') }}</h3>
                    <ul class="grid grid-rows-4 grid-flow-col gap-2 sm:grid-rows-none sm:grid-flow-row sm:grid-cols-2 sm:auto-rows-fr">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="skill in skills"
                            :key="skill"
                        >
                            <BaseIcon
                                :animation="'animate__animated animate__bounce animate__delay-3s'"
                                :icon="skill"
                            />
                            <p>{{ skill }}</p>
                        </li>
                    </ul>
                </section>
                <section
                    class="col-span-2 animate__animated animate__fadeInRight animate__delay-2s"
                >
                    <h3 class="text-3xl mb-4">{{ t('contacts.title') }}</h3>
                    <ul class="flex flex-col gap-3">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="(contact, key) in contacts"
                            :key="key"
                        >
                            <h4>{{ t(`contacts.${key}.title`) }}:</h4>
                            <a
                                class="transition"
                                :href="contact.href"
                                target="_blank"
                            >
                                {{ contact.text ?? t(`contacts.${key}.text`) }}
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    </div>
</template>

<style scoped></style>
