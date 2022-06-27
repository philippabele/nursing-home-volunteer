<script lang="ts" setup>
import bullseyeIconUrl from 'bootstrap-icons/icons/bullseye.svg'
import chatSquareQuoteIconUrl from 'bootstrap-icons/icons/chat-square-quote.svg'
import starFillIconUrl from 'bootstrap-icons/icons/star-fill.svg'
import { reactive } from 'vue'
import heroImgUrl from '../assets/hero.jpg'
import placeholderImgUrl from '../assets/placeholder.jpg'
import AppHero from '../components/AppHero.vue'
import AppIconCard from '../components/AppIconCard.vue'
import AppSteps from '../components/AppSteps.vue'
import AppTeamMember from '../components/AppTeamMember.vue'
import AppTestimonial from '../components/AppTestimonial.vue'
import AppLayoutDefault from '../components/layouts/AppLayoutDefault.vue'
import { IButton, IIconCard, IStep, ITeamMember, ITestimonial } from '../types/components'

const heroBtn: IButton = {
  href: '/blog',
  text: 'Zum Blog',
}

const iconCards = reactive<IIconCard[]>([
  {
    id: 0,
    icon: bullseyeIconUrl,
    title: 'Erfahrung',
    description:
      'Jede Aktivierungsstunde wurde bereits in der Praxis erprobt und wird fortlaufend aktualisiert.',
    btn: { text: 'Learn More', href: '/' },
  },
  {
    id: 1,
    icon: chatSquareQuoteIconUrl,
    title: 'Struktur',
    description:
      'Unsere Vorlagen sind klar strukturiert und sind als Hilfe während einer Aktivierungsstunde ausgelegt.',
    btn: { text: 'Learn More', href: '/' },
  },
  {
    id: 2,
    icon: starFillIconUrl,
    title: 'Zeitersparnis',
    description: 'Durch unsere Vorlagen reduziert sich die Vorbereitungszeit drastisch!',
    btn: { text: 'Learn More', href: '/' },
  },
])

/* const testimonials = reactive<ITestimonial[]>([
  {
    id: 0,
    quote: 'Super Programm, leicht umzusetzen 😊',
    name: 'Max Mustermann',
    avatar: placeholderImgUrl,
    position: 'CEO of Company A',
    location: 'Berlin',
  },
  {
    id: 1,
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    name: 'Maxine Musterfrau',
    avatar: placeholderImgUrl,
    position: 'CEO of Company B',
    location: 'Hamburg',
  },
]) */

/* const teamMembers = reactive<ITeamMember[]>([
  {
    id: 0,
    avatar: placeholderImgUrl,
    name: 'Team Member 1',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 1,
    avatar: placeholderImgUrl,
    name: 'Team Member 2',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 2,
    avatar: placeholderImgUrl,
    name: 'Team Member 3',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 3,
    avatar: placeholderImgUrl,
    name: 'Team Member 3',
    description: 'Lorem ipsum dolor sit',
  },
]) */

const steps = reactive<IStep[]>([
  {
    title: 'Themenwahl',
    description: 'Wir wählen das Thema und suchen dazu passende Geschichten.',
  },
  {
    title: 'Inhaltsgestaltung',
    description:
      'Wir überlegen uns bekannte und vertraute Lieder und forschen nach Wörterrätseln sowie Wortfindungen.',
  },
  {
    title: 'Interaktion',
    description: 'Gespräche zum Thema aufbauen.',
  },
])
</script>

<template>
  <AppLayoutDefault :transparent-header="true">
    <main>
      <AppHero
        :src="heroImgUrl"
        title="Seniorenaktivierung"
        subtitle="Wir wollen aktiv sein"
        :btn="heroBtn"
      />

      <section class="py-6 text-center container">
        <h2>Unser Angebot</h2>
        <p class="pt-2">
          Tagesstrukturen bieten emotionale und geistige Wärme, Zusammenhalt und Förderung der
          kognitiven Fähigkeiten.
        </p>
      </section>

      <section class="bg-light">
        <div class="py-6 text-center container">
          <h3>Alle Vorteile auf einem Blick</h3>
          <div class="mt-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div v-for="card of iconCards" :key="card.id" class="col">
              <AppIconCard :title="card.title" :icon="card.icon" :description="card.description" />
            </div>
          </div>
        </div>
      </section>

      <section class="py-6 text-center container">
        <h3>Unser Motto</h3>
        <p class="pt-2">Wer den Tag mit Lachen beginnt, hat ihn bereits gewonnen.</p>

        <!--         <div class="mt-5 row row-cols-1 row-cols-md-2 g-4">
          <div v-for="t of testimonials" :key="t.id" class="col">
            <AppTestimonial
              :quote="t.quote"
              :avatar="t.avatar"
              :name="t.name"
              :position="t.position"
              :location="t.location"
            />
          </div>
        </div> -->
      </section>

      <section class="bg-light">
        <div class="py-6 text-center container">
          <h3>So funktioniert's</h3>
          <p class="pt-2">Unten sehen Sie, wie unsere Aktivierungsstunden ablaufen.</p>

          <div class="mt-5 steps mx-auto">
            <AppSteps :steps="steps" />
          </div>
        </div>
      </section>

      <section class="py-6 text-center container">
        <h3>Unser Team</h3>
        <p class="pt-2">
          Wir heißen Marianne und Monika, sind staatlich geprüfte Betreuungsassistenten und haben
          über 10 Jahre Berufserfahrung. Marianne ist ein Koordinator in der Betreuung. Monika ist
          mittlerweile Rentnerin und weiterhin ehrenamtlich tätig. Uns beiden ist es ein Anliegen
          mit den Bewohnern eine harmonische Aktivierungsstunde durchzuführen.
        </p>

        <!--         <div class="mt-5 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div v-for="m of teamMembers" :key="m.id" class="col">
            <AppTeamMember :avatar="m.avatar" :name="m.name" :description="m.description" />
          </div>
        </div> -->
      </section>
    </main>
  </AppLayoutDefault>
</template>

<style scoped lang="scss">
.steps {
  max-width: 400px;
}
</style>
