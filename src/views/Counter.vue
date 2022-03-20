<template>
  <div>
    <h1>{{ count }}</h1>
    <div>
      <button @click="decrement">-</button>{{ ' ' }}
      <button @click="increment">+</button>
    </div>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
import {
  limitedIncrementWithMessage,
  limitedDecrementWithMessage,
} from '../domain/counter';

export default {
  data() {
    return {
      count: 0,
      message: null,
    };
  },

  methods: {
    increment() {
      const { count, message } = limitedIncrementWithMessage(
        this.count,
        'Max!',
        10
      );
      this.count = count;
      this.message = message;
    },
    decrement() {
      const { count, message } = limitedDecrementWithMessage(
        this.count,
        'Min!',
        0
      );
      this.count = count;
      this.message = message;
    },
  },
};
</script>
