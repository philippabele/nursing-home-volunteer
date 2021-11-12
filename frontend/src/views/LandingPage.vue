<script lang="ts" setup>
import { ref } from 'vue'
import AppDivider from '../components/AppDivider.vue'
import AppFeature from '../components/AppFeature.vue'
import AppImageBlock from '../components/AppImageBlock.vue'
import BCarousel from '../components/bootstrap/BCarousel.vue'
import AppLayoutDefault from '../components/layouts/AppLayoutDefault.vue'
import { ICarouselSlide, IFeature, IImageBlock } from '../types/components'

const slides = ref<ICarouselSlide[]>([
  {
    id: 0,
    caption: 'Example headline.',
    text: 'Some representative placeholder content for the first slide of the carousel.',
    btn: { text: 'Sign up today', href: '#' },
  },
  {
    id: 1,
    caption: 'Another example headline.',
    text: 'Some representative placeholder content for the second slide of the carousel..',
    btn: { text: 'Learn more', href: '#' },
    align: 'center',
  },
  {
    id: 2,
    caption: 'One more for good measure.',
    text: 'Some representative placeholder content for the third slide of this carousel.',
    btn: { text: 'Browse gallery', href: '#' },
    align: 'right',
  },
])

const features = ref<IFeature[]>([
  {
    id: 0,
    title: 'Feature 1',
    description: `Some representative placeholder content for the three columns of text
     below the carousel. This is the first column.`,
    btn: { text: 'View details', href: '#' },
    src: 'https://via.placeholder.com/140',
  },
  {
    id: 1,
    title: 'Feature 2',
    description: `Another exciting bit of representative placeholder content. This time, we have
     moved on to the second column.`,
    btn: { text: 'View details', href: '#' },
    src: 'https://via.placeholder.com/140',
  },
  {
    id: 2,
    title: 'Feature 3',
    description: 'And lastly this, the third column of representative placeholder content.',
    btn: { text: 'View details', href: '#' },
    src: 'https://via.placeholder.com/140',
  },
])

const imageBlocks = ref<IImageBlock[]>([
  {
    id: 0,
    src: 'https://via.placeholder.com/500',
    title: 'First featurette heading.',
    titleMuted: 'It’ll blow your mind',
    description: `Some great placeholder content for the first featurette here. Imagine
     some exciting prose here.`,
  },
  {
    id: 1,
    src: 'https://via.placeholder.com/500',
    title: 'Oh yeah, it’s that good.',
    titleMuted: 'See for yourself',
    description: `Another featurette? Of course. More placeholder content here to give you an idea
     of how this layout would work with some actual real-world content in place.`,
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/500',
    title: 'And lastly, this one.',
    titleMuted: 'Checkmate.',
    description: `And yes, this is the last block of representative placeholder content. Again, not
     really intended to be actually read, simply here to give you a better view of what this
     would look like with some actual content. Your content.`,
  },
])
</script>

<template>
  <AppLayoutDefault>
    <main>
      <BCarousel :slides="slides" class="mb-6" />

      <div class="container">
        <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div v-for="feature of features" :key="feature.id" class="col">
            <AppFeature
              :title="feature.title"
              :description="feature.description"
              :btn="feature.btn"
              :src="feature.src"
            />
          </div>
        </section>

        <section v-for="(block, index) of imageBlocks" :key="block.id">
          <AppDivider />

          <AppImageBlock
            :src="block.src"
            :title="block.title"
            :title-muted="block.titleMuted"
            :description="block.description"
            :image-pos="index % 2 === 1 ? 'left' : 'right'"
            :class="{ 'mb-6': index === imageBlocks.length - 1 }"
          />
        </section>
      </div>
    </main>
  </AppLayoutDefault>
</template>

<style scoped lang="scss"></style>
