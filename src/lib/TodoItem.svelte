<svelte:options immutable />

<script lang="ts" context="module">
  export interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let item: ITodoItem

  $: completeText = item.completed ? 'x' : '✓'

  const dispatch = createEventDispatcher()

  const toggleComplete = () => {
    dispatch('toggleComplete', { id: item.id })
  }

  const removeItem = () => {
    dispatch('remove', { id: item.id })
  }
</script>

<div class="item">
  <p>{item.id}</p>
  <p>{item.title}</p>
  <p>{item.completed}</p>

  <button on:click={toggleComplete}>{completeText}</button>

  <button on:click={removeItem}>remove</button>
</div>

<style lang="postcss">
  .item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .item p {
    margin: 6px 0;
  }
</style>
