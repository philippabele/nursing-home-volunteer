<script lang="ts" setup>
interface AvatarProps {
  src?: string
  size?: string
  rounded?: boolean
}

withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: '140px',
})
</script>

<template>
  <div class="mb-3">
    <img
      v-if="src"
      :src="src"
      class="img-fluid avatar"
      alt="Avatar"
      :style="{ height: size, width: size }"
      :class="{ rounded, 'rounded-circle': !rounded }"
    />

    <div v-else class="rounded-circle bg-dark mx-auto" :style="{ height: size, width: size }"></div>
  </div>
</template>

<style scoped lang="scss"></style>
