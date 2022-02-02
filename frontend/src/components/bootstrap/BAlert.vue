<script lang="ts" setup>
import { computed } from 'vue'
import { BootstrapColor } from '../../types/components'
import { getUniqueRuntimeId } from '../../utils/misc'

interface AlertProps {
  msg: string
  color?: BootstrapColor
  details?: string
  detailsText?: string
}

const props = withDefaults(defineProps<AlertProps>(), {
  color: 'primary',
  details: '',
  detailsText: 'Details anzeigen',
})

const colorClass = computed((): string => `alert-${props.color}`)
const targetId = `collapseAlertDetails-${getUniqueRuntimeId()}`
</script>

<template>
  <div class="alert" role="alert" :class="colorClass">
    {{ msg }}

    <template v-if="details">
      <span
        class="fw-bold details-toggle"
        data-bs-toggle="collapse"
        :data-bs-target="`#${targetId}`"
        aria-expanded="false"
        :aria-controls="targetId"
      >
        {{ detailsText }}
      </span>

      <div :id="targetId" class="collapse">
        <pre class="mb-0 mt-3">{{ details }}</pre>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.details-toggle {
  cursor: pointer;
}
</style>
