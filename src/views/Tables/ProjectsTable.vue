<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
              {{title}}
          </h3>
        </div>
        <div class="col text-right">
          <slot name="button"></slot>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table table-striped align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark': ''"
        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
        tbody-classes="list"
        :data="rows"
        :columns="columns"
        @click="$emit('click', $event)"
      >

        <template slot-scope="{row}">
          <slot :row="row"></slot>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent': ''"
    >
      <base-pagination :total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String
    },
    title: String,
    columns: Array,
    rows: Array,
  }
};
</script>
<style>
</style>

