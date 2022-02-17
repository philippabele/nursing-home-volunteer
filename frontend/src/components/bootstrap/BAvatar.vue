<script lang="ts" setup>
import AppLightboxImage from '../AppLightboxImage.vue'
interface AvatarProps {
  src?: string
  size?: string
  rounded?: boolean
  lightbox?: boolean
}

withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: '140px',
  lightbox: true,
})
</script>

<template>
  <div class="mb-3">
    <div v-if="src">
      <AppLightboxImage
        v-if="lightbox"
        :src="src"
        alt="Avatar"
        :style="{ height: size, width: size }"
        :circle="!rounded"
        class="mx-auto"
      />

      <img
        v-else
        :src="src"
        class="img-fluid avatar"
        alt="Avatar"
        :class="{ rounded, 'rounded-circle': !rounded }"
        :style="{ height: size, width: size }"
      />
    </div>

    <div v-else class="rounded-circle bg-dark mx-auto" :style="{ height: size, width: size }"></div>
  </div>
</template>

<style scoped lang="scss"></style>
