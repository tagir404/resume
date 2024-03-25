<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { skills } from '@/modules/skills'
import { contacts } from '@/modules/contacts'
import { langContent } from '@/modules/data'
import BaseIcon from './components/BaseIcon.vue'

const lang = ref<'ru' | 'en'>('ru')
const darkMode = ref<boolean>(false)

const textContent = computed(() => langContent[lang.value])

function changeLang() {
    lang.value === 'ru' ? (lang.value = 'en') : (lang.value = 'ru')
}

watch(darkMode, val => {
    const html = document.querySelector('html')
    val ? html?.classList.add('dark') : html?.classList.remove('dark')
})
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center bg-sky-100 overflow-hidden text-slate-800 dark:bg-slate-900 dark:text-sky-50">
        <header
            class="flex justify-end gap-5 py-2 px-8 fixed top-0 left-0 bg-sky-100 w-full z-50 border-b-2 border-green-200 dark:bg-slate-900 dark:text-sky-50"
        >
            <p
                class="flex items-center cursor-pointer select-none"
                @click="changeLang"
            >
                <span class="material-symbols-outlined text-4xl"> language </span>
                <span class="text-xl">{{ lang }}</span>
            </p>

            <span
                class="material-symbols-outlined text-4xl cursor-pointer select-none"
                @click="darkMode = !darkMode"
            >
                {{ darkMode ? 'light_mode' : 'dark_mode' }}
            </span>
        </header>
        <main class="max-w-screen-xl mx-auto pt-20 pb-5 px-8 flex-1">
            <section
                class="flex flex-col gap-5 text-center mb-12 animate__animated animate__fadeInDown"
            >
                <h1 class="font-bold text-7xl">{{ textContent.name }}</h1>
                <h2 class="text-4xl">{{ textContent.speciality }}</h2>
            </section>
            <article class="font-comfortaa font-medium grid grid-cols-5 gap-8 lg:flex lg:flex-col">
                <section class="col-span-full animate__animated animate__fadeIn animate__delay-1s">
                    <h3 class="text-3xl mb-4">{{ textContent.expirience.title }}</h3>
                    <p
                        class="text-xl text-justify"
                        v-html="textContent.expirience.text"
                    ></p>
                </section>
                <section class="col-span-3 animate__animated animate__fadeInLeft animate__delay-2s">
                    <h3 class="text-3xl mb-4">{{ textContent.stackTitle }}</h3>
                    <ul class="grid grid-rows-4 grid-flow-col gap-2 sm:grid-rows-7">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="skill in skills"
                            :key="skill"
                        >
                            <BaseIcon
                                class="animate__animated animate__bounce animate__delay-3s"
                                :icon="skill"
                                :width="32"
                            />
                            <p>{{ skill }}</p>
                        </li>
                    </ul>
                </section>
                <section
                    class="col-span-2 animate__animated animate__fadeInRight animate__delay-2s"
                >
                    <h3 class="text-3xl mb-4">{{ textContent.contacts.title }}</h3>
                    <ul class="flex flex-col gap-3">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="(contact, key) in contacts"
                            :key="key"
                        >
                            <h4>{{ textContent.contacts.list[key] }}:</h4>
                            <a
                                class="transition"
                                :href="contact.href"
                                target="_blank"
                            >
                                {{ contact.text }}
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    </div>
</template>

<style scoped></style>
