<script lang="ts">
  import TodoItem from './TodoItem.svelte'
  import { todoItems } from './todoItemStore'
</script>

{#each $todoItems as item (item.id)}
  <TodoItem
    {item}
    on:toggleComplete={() => { todoItems.toggleCompleteItem(item.id) }}
    on:remove={() => { todoItems.removeItem(item.id) }}
  />
{/each}

<button on:click={todoItems.addNewTodoItem}>New item</button>
