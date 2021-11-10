<script lang="ts" setup>
import BAvatar from './bootstrap/BAvatar.vue'

defineProps<{
  avatar: string
  name: string
  description: string
}>()
</script>

<template>
  <div class="text-center">
    <BAvatar size="100%" :src="avatar" :rounded="true" />

    <p class="mb-0 font-weight-bolder">{{ name }}</p>
    <p class="m-0">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  max-width: 300px;
}
</style>
