<script setup lang="ts">
import IconCss from '@/components/icons/IconCss.vue'
import IconHtml from '@/components/icons/IconHtml.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconEslint from '@/components/icons/IconEslint.vue'
import IconJs from '@/components/icons/IconJs.vue'
import IconNuxt from '@/components/icons/IconNuxt.vue'
import IconPinia from '@/components/icons/IconPinia.vue'
import IconPrettier from '@/components/icons/IconPrettier.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypescript from '@/components/icons/IconTypescript.vue'
import IconVite from '@/components/icons/IconVite.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconVueRouter from '@/components/icons/IconVueRouter.vue'

import type { Skill } from '@/modules/types.ts'

const props = defineProps<{
    icon: Skill
}>()
</script>

<template>
    <IconCss
        v-if="props.icon === 'CSS'"
        :class="`w-[32px] h-auto`"
    />
    <IconHtml
        v-if="props.icon === 'HTML'"
        :class="`w-[32px] h-auto`"
    />
    <IconGit
        v-if="props.icon === 'Git'"
        :class="`w-[32px] h-auto`"
    />
    <IconEslint
        v-if="props.icon === 'ESLint'"
        :class="`w-[32px] h-auto`"
    />
    <IconJs
        v-if="props.icon === 'JavaScript'"
        :class="`w-[32px] h-auto`"
    />
    <IconNuxt
        v-if="props.icon === 'Nuxt'"
        :class="`w-[32px] h-auto`"
    />
    <IconPinia
        v-if="props.icon === 'Pinia'"
        :class="`w-[32px] h-auto`"
    />
    <IconPrettier
        v-if="props.icon === 'Prettier'"
        :class="`w-[32px] h-auto`"
    />
    <IconSass
        v-if="props.icon === 'Sass'"
        :class="`w-[32px] h-auto`"
    />
    <IconTailwind
        v-if="props.icon === 'Tailwind'"
        :class="`w-[32px] h-auto`"
    />
    <IconTypescript
        v-if="props.icon === 'TypeScript'"
        :class="`w-[32px] h-auto`"
    />
    <IconVite
        v-if="props.icon === 'Vite'"
        :class="`w-[32px] h-auto`"
    />
    <IconVue
        v-if="props.icon === 'Vue'"
        :class="`w-[32px] h-auto`"
    />
    <IconVueRouter
        v-if="props.icon === 'Vue Router'"
        :class="`w-[32px] h-auto`"
    />
</template>
