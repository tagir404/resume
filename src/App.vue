<script setup lang="ts">
import { skills } from '@/modules/skills'
import { contacts } from '@/modules/contacts'
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center bg-sky-100 overflow-hidden">
        <main class="max-w-screen-xl mx-auto p-8">
            <section class="flex flex-col gap-5 text-center mb-16 animate__animated animate__fadeInDown">
                <h1 class="font-bold text-7xl">Тагир Сулаев</h1>
                <h2 class="text-4xl">Фронтенд разработчик</h2>
            </section>
            <article class="font-comfortaa font-medium grid grid-cols-2 gap-8 lg:grid-flow-row lg:grid-cols-none">
                <section class="col-span-full animate__animated animate__fadeIn animate__delay-1s">
                    <h3 class="text-3xl mb-4">О моем опыте:</h3>
                    <p class="text-xl text-justify">Мой путь в веб разработке начался в 2021 году, тогда я стал брать первые заказы для <span class="whitespace-nowrap">HTML-верстальщиков</span> на фрилансе. Поработав так около полугода я решил найти работу постабильнее и так попал на стажировку в компанию <a href="https://procontext.ru/" target="_blank">ПроКонтекст</a>, в которой проработал два года на позиции Фронтенд-разработчика.</p>
                </section>
                <section class="animate__animated animate__fadeInLeft animate__delay-2s">
                    <h3 class="text-3xl mb-4">Мой стек:</h3>
                    <ul class="grid grid-rows-4 grid-flow-col gap-3 sm:grid-rows-6">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="skill in skills"
                            :key="skill.name"
                        >
                            <img
                                class="w-[32px] animate__animated animate__bounce animate__delay-3s"
                                :src="skill.icon"
                                :alt="`Иконка технологии ${skill.name}`"
                            />
                            <p>{{ skill.name }}</p>
                        </li>
                    </ul>
                </section>
                <section class="animate__animated animate__fadeInRight animate__delay-2s">
                    <h3 class="text-3xl mb-4">Контакты:</h3>
                    <ul class="flex flex-col gap-3">
                        <li
                            class="text-xl flex items-center gap-3"
                            v-for="contact in contacts"
                            :key="contact.title"
                        >
                            <h4>{{ contact.title }}:</h4>
                            <a
                                class="transition"
                                :href="contact.link.href"
                                target="_blank"
                            >
                                {{ contact.link.text }}
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    </div>
</template>

<style scoped></style>
