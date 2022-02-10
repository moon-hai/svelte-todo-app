<script lang="ts">
  import { uniqueId } from 'lodash'
  import TodoItem, { ITodoItem } from './TodoItem.svelte'

  let todoItems: ITodoItem[] = [
    {
      id: uniqueId(),
      title: 'Learn Svelte',
      completed: false
    },
    {
      id: uniqueId(),
      title: 'Learn vue',
      completed: true
    }
  ]

  const addNewItem = () => {
    todoItems = [
      ...todoItems,
      {
        id: uniqueId(),
        title: 'Anything else ...',
        completed: false
      }
    ]
  }

  const toggleComplete = (event) => {
    const { id } = event.detail
    todoItems = todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }

      return item
    })
  }

  const removeItem = (event) => {
    const { id } = event.detail
    todoItems = todoItems.filter((item) => item.id !== id)
  }
</script>

{#each todoItems as item (item.id)}
  <TodoItem
    {item}
    on:toggleComplete={toggleComplete}
    on:remove={removeItem}
  />
{/each}

<button on:click={addNewItem}>New item</button>
