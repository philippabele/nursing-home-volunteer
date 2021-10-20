<template>
  <main>
    <Carousel :slides="slides" class="mb-6" />

    <div class="container">
      <div class="row">
        <div
          v-for="feature of features"
          :key="feature.id"
          class="col-lg-4 mb-4"
        >
          <Feature
            :title="feature.title"
            :description="feature.description"
            :href="feature.btn ? feature.btn.to : undefined"
            :btn-text="feature.btn ? feature.btn.text : undefined"
            :external="feature.btn ? feature.btn.external : false"
            :src="feature.src"
          />
        </div>
      </div>

      <Divider />

      <section v-for="(block, index) of imageBlocks" :key="block.id">
        <ImageBlock
          :src="block.src"
          :title="block.title"
          :title-muted="block.titleMuted"
          :description="block.description"
          :image-pos="index % 2 === 1 ? 'left' : 'right'"
        />

        <Divider />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Divider from '../components/Divider.vue'
import ImageBlock from '../components/ImageBlock.vue'
import Carousel from '~/components/Carousel.vue'
import { ICarouselSlide } from '~/types/components'
import Feature from '~/components/Feature.vue'
import { IFeature, IImageBlock } from '~/types/misc'

export default defineComponent({
  components: { Carousel, Feature, Divider, ImageBlock },
  setup() {
    const slides = ref<ICarouselSlide[]>([
      {
        id: 0,
        caption: 'Example headline.',
        text: 'Some representative placeholder content for the first slide of the carousel.',
        btn: { text: 'Sign up today', to: '#' },
        align: 'left',
      },
      {
        id: 1,
        caption: 'Another example headline.',
        text: 'Some representative placeholder content for the second slide of the carousel..',
        btn: { text: 'Learn more', to: '#' },
        align: 'center',
      },
      {
        id: 2,
        caption: 'One more for good measure.',
        text: 'Some representative placeholder content for the third slide of this carousel.',
        btn: { text: 'Browse gallery', to: '#' },
        align: 'right',
      },
    ])

    const features = ref<IFeature[]>([
      {
        id: 0,
        title: 'Feature 1',
        description:
          'Some representative placeholder content for the three columns of text below the carousel. This is the first column.',
        btn: { text: 'View details', to: '#' },
        src: 'https://via.placeholder.com/140',
      },
      {
        id: 1,
        title: 'Feature 2',
        description:
          'Another exciting bit of representative placeholder content. This time, we have moved on to the second column.',
        btn: { text: 'View details', to: '#' },
        src: 'https://via.placeholder.com/140',
      },
      {
        id: 2,
        title: 'Feature 3',
        description:
          'And lastly this, the third column of representative placeholder content.',
        btn: { text: 'View details', to: '#' },
        src: 'https://via.placeholder.com/140',
      },
    ])

    const imageBlocks = ref<IImageBlock[]>([
      {
        id: 0,
        src: 'https://via.placeholder.com/500',
        title: 'First featurette heading.',
        titleMuted: 'It’ll blow your mind',
        description:
          'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
      },
      {
        id: 1,
        src: 'https://via.placeholder.com/500',
        title: 'Oh yeah, it’s that good.',
        titleMuted: 'See for yourself',
        description:
          'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/500',
        title: 'And lastly, this one.',
        titleMuted: 'Checkmate.',
        description:
          'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.',
      },
    ])

    return { slides, features, imageBlocks }
  },
})
</script>

<style scoped lang="scss"></style>
