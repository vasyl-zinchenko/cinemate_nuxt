<template>
  <div>
    <MovieCard
      v-if="item.release_date"
      :poster_path="item.poster_path"
      :title="item.title"
      :id="item.id"
      :overview="item.overview"
      :release_date="item.release_date"
      :popularity="item.popularity"
      :item="mov"
    />

    <SeriesCard
      v-if="item.first_air_date"
      :poster_path="tvSeries.poster_path"
      :name="tvSeries.name"
      :overview="tvSeries.overview"
      :first_air_date="tvSeries.first_air_date"
      :popularity="tvSeries.popularity"
      :item="tvSeries"
    />
  </div>
</template>

<script setup>
const itemState = useState('chosenItem', () => {
  return {};
});

const item = itemState.value;
</script>

<style lang="scss" scoped></style>
