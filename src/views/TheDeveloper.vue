<script setup lang="ts">
import { skills } from '@/modules/skills'
import { contacts } from '@/modules/contacts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <article class="font-comfortaa font-medium grid grid-cols-5 gap-8 lg:flex lg:flex-col">
        <section class="col-span-full animate__animated animate__fadeIn animate__delay-1s">
            <h3 class="text-3xl mb-4">{{ t('developer.experience.title') }}</h3>
            <p
                class="text-xl text-justify"
                v-html="t('developer.experience.text')"
            ></p>
        </section>
        <section class="col-span-3 animate__animated animate__fadeInLeft animate__delay-2s">
            <h3 class="text-3xl mb-4">{{ t('developer.stackTitle') }}</h3>
            <ul
                class="grid grid-rows-4 grid-flow-col gap-2 sm:grid-rows-none sm:grid-flow-row sm:grid-cols-2 sm:auto-rows-fr"
            >
                <li
                    class="text-xl flex items-center gap-3"
                    v-for="skill in skills"
                    :key="skill.name"
                >
                    <component
                        :is="skill.icon"
                        class="w-8 sm:w-10 h-auto animate__animated animate__bounce animate__delay-3s"
                    />
                    <p>{{ skill.name }}</p>
                </li>
            </ul>
        </section>
        <section class="col-span-2 animate__animated animate__fadeInRight animate__delay-2s">
            <h3 class="text-3xl mb-4">{{ t('developer.contacts.title') }}</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class="text-xl flex items-center gap-3"
                    v-for="(contact, key) in contacts"
                    :key="key"
                >
                    <h4>{{ t(`developer.contacts.${key}.title`) }}:</h4>
                    <a
                        class="transition"
                        :href="contact.href"
                        target="_blank"
                    >
                        {{ contact.text ?? t(`developer.contacts.${key}.text`) }}
                    </a>
                </li>
            </ul>
        </section>
    </article>
</template>
