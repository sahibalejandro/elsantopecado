<script setup>
const props = defineProps({
  modelValue: { type: Number, required: true },
});

const emit = defineEmits(['update:modelValue']);

function remove() {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1);
  }
}

function add() {
  emit('update:modelValue', props.modelValue + 1);
}
</script>

<template>
  <section class="flex justify-center items-center gap-4">
    <button type="button" class="border rounded-full px-4 py-2" @click="remove">-</button>
    {{ modelValue }}
    <button type="button" class="border rounded-full px-4 py-2" @click="add">+</button>
  </section>
</template>
