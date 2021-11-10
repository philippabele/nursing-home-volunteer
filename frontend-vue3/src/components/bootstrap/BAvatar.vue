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
  <img
    :src="src"
    class="img-fluid mb-3 avatar"
    alt="Avatar"
    :style="{ height: size, width: size }"
    :class="{ rounded, 'rounded-circle': !rounded }"
  />
</template>

<style scoped lang="scss"></style>
