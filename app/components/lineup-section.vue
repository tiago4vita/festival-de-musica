<script setup lang="ts">
import { lineupActs } from '~/data/lineup'

/** Split on b2b (case-insensitive); re-insert as acid-green annotations in template */
function b2bParts(displayName: string): string[] {
  return displayName.split(/\s+b2b\s+/i)
}
</script>

<template>
  <section
    class="lineup"
    aria-labelledby="lineup-heading"
  >
    <div class="lineup__inner">
      <h2
        id="lineup-heading"
        class="lineup__title"
      >
        Lineup
      </h2>
      <p class="lineup__lede">
        Curated fiction — names set in type, not in stone.
      </p>

      <ul class="lineup__list">
        <li
          v-for="act in lineupActs"
          :key="act.id"
          class="lineup__item"
        >
          <span class="lineup__name">
            <template
              v-for="(part, i) in b2bParts(act.displayName)"
              :key="`${act.id}-${i}`"
            >
              <template v-if="i > 0">
                <span class="lineup__b2b">b2b</span>
                {{ ' ' }}
              </template>{{ part }}
            </template>
          </span>
          <span
            v-if="act.note"
            class="lineup__note"
          >{{ act.note }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.lineup {
  position: relative;
  z-index: 1;
  padding: var(--space-section) var(--space-md) calc(var(--space-3xl) + var(--ticker-height));
  background: var(--color-bg-base);
  border-top: 1px solid var(--color-border-subtle);
}

.lineup__inner {
  max-width: var(--content-max);
  margin: 0 auto;
}

.lineup__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  text-transform: uppercase;
}

.lineup__lede {
  margin: var(--space-md) 0 var(--space-2xl);
  max-width: 36ch;
  font-size: var(--text-hero-lg);
  color: var(--color-fg-muted);
  line-height: 1.5;
}

.lineup__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.lineup__item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-sm) var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border-subtle);
}

.lineup__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.lineup__name {
  font-family: var(--font-display);
  font-size: var(--text-lineup-name);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--color-fg-primary);
}

.lineup__b2b {
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: var(--color-lineup-b2b);
}

.lineup__note {
  font-size: var(--text-lineup-note);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-accent-magenta);
}
</style>
