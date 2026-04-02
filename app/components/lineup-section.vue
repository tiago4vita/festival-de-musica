<script setup lang="ts">
import { lineupDays, ordinalSuffix } from '~/data/lineup'

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

      <div class="lineup__days">
        <div
          v-for="dayBlock in lineupDays"
          :key="dayBlock.id"
          class="lineup__day-block"
        >
          <table
            class="lineup__table"
            :aria-label="`${dayBlock.weekday} ${dayBlock.monthBracket} ${dayBlock.dayOfMonth}, schedule`"
          >
            <thead>
              <tr class="lineup__thead-row">
                <th
                  scope="col"
                  class="lineup__th lineup__th--label"
                >
                  [DAY]
                </th>
                <th
                  scope="col"
                  class="lineup__th lineup__th--label"
                >
                  [MONTH]
                </th>
                <th
                  scope="col"
                  class="lineup__th lineup__th--label"
                >
                  [DATE]
                </th>
                <th
                  scope="col"
                  class="lineup__th lineup__th--label"
                >
                  [COUNTRY]
                </th>
                <th
                  scope="col"
                  class="lineup__th lineup__th--label"
                >
                  [STAGE]
                </th>
                <th
                  scope="col"
                  class="lineup__th lineup__th--label lineup__th--artist-head"
                >
                  [ARTIST]
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in dayBlock.rows"
                :key="`${dayBlock.id}-${row.id}`"
                class="lineup__row"
              >
                <td class="lineup__cell lineup__cell--day">
                  {{ dayBlock.weekday }}
                </td>
                <td class="lineup__cell lineup__cell--month">
                  {{ dayBlock.monthBracket }}
                </td>
                <td class="lineup__cell lineup__cell--date">
                  {{ dayBlock.dayOfMonth }}<sup class="lineup__ordinal">{{ ordinalSuffix(dayBlock.dayOfMonth) }}</sup>
                  {{ ' ' }}{{ dayBlock.yearShort }}
                </td>
                <td class="lineup__cell lineup__cell--country">
                  {{ dayBlock.countryCode }}
                </td>
                <td class="lineup__cell lineup__cell--stage">
                  {{ row.stage }}
                </td>
                <td class="lineup__cell lineup__cell--artist">
                  <span class="lineup__name">
                    <template
                      v-for="(part, i) in b2bParts(row.displayName)"
                      :key="`${row.id}-${i}`"
                    >
                      <template v-if="i > 0">
                        <span class="lineup__b2b">b2b</span>
                        {{ ' ' }}
                      </template>{{ part }}
                    </template>
                  </span>
                  <span
                    v-if="row.note"
                    class="lineup__note"
                  >{{ row.note }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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

.lineup__days {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.lineup__day-block {
  margin: 0;
}

.lineup__table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: var(--font-display);
  font-size: clamp(0.65rem, 1.1vw, 0.8rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-primary);
}

.lineup__thead-row {
  border-bottom: 1px solid transparent;
}

.lineup__th {
  padding: 0 0 var(--space-sm);
  font-weight: var(--font-weight-semibold);
  text-align: left;
  vertical-align: bottom;
  color: var(--color-fg-muted);
}

.lineup__th--label {
  font-size: 0.65em;
  letter-spacing: 0.14em;
}

.lineup__th--artist-head {
  width: 36%;
}

/* Wide column gaps — engineered grid */
.lineup__th:nth-child(1),
.lineup__cell--day {
  width: 6%;
  padding-right: clamp(0.75rem, 2vw, 1.75rem);
}

.lineup__th:nth-child(2),
.lineup__cell--month {
  width: 8%;
  padding-right: clamp(0.75rem, 2vw, 1.75rem);
}

.lineup__th:nth-child(3),
.lineup__cell--date {
  width: 12%;
  padding-right: clamp(0.75rem, 2vw, 1.75rem);
}

.lineup__th:nth-child(4),
.lineup__cell--country {
  width: 9%;
  padding-right: clamp(0.75rem, 2vw, 1.75rem);
}

.lineup__th:nth-child(5),
.lineup__cell--stage {
  width: 10%;
  padding-right: clamp(0.75rem, 2vw, 1.75rem);
}

.lineup__row {
  border-bottom: 1px solid var(--color-border-subtle);
}

.lineup__row:last-child {
  border-bottom: none;
}

.lineup__cell {
  padding: var(--space-md) clamp(0.5rem, 1.5vw, 1rem) var(--space-md) 0;
  vertical-align: top;
  line-height: 1.35;
  word-break: break-word;
}

.lineup__cell--artist {
  padding-right: 0;
}

.lineup__ordinal {
  font-size: 0.65em;
  font-weight: var(--font-weight-bold);
  line-height: 0;
}

.lineup__name {
  display: inline;
  font-size: clamp(0.85rem, 1.45vw, 1.05rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.04em;
  line-height: 1.3;
  color: var(--color-fg-primary);
}

.lineup__b2b {
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: var(--color-lineup-b2b);
}

.lineup__note {
  display: block;
  margin-top: var(--space-xs);
  font-size: var(--text-label);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-accent-magenta);
}

@media (max-width: 52rem) {
  .lineup__table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .lineup__table thead,
  .lineup__table tbody,
  .lineup__table tr {
    display: table;
    width: max(52rem, 100%);
    table-layout: fixed;
  }
}
</style>
