<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

import promos from "@/promos";

const slider = ref();
const viewport = ref();
const beingTouched = ref(false);
const translateXPixels = ref("0px");

let startTouch;
let viewportWidth = 0;
let translateXStart = 0;
let visibleItemIndex = 0;

function handleWindowResize() {
  updateViewportWidth(viewport.value);
}

function updateViewportWidth(viewport) {
  viewportWidth = parseInt(window.getComputedStyle(viewport).width);
  console.log("viewportWidth updated", viewportWidth);
}

function handleTouchStart(event) {
  if (startTouch) {
    return;
  }

  beingTouched.value = true;
  startTouch = event.targetTouches[0];

  translateXStart = getTranslateX(slider.value);
  setTranslateXPixels(translateXStart);
}

function handleTouchMove(event) {
  event.preventDefault();

  if (!startTouch) {
    return;
  }

  const touch = event.targetTouches[0];
  const pixelsDiff = touch.screenX - startTouch.screenX;

  // TODO: Add elastic limit for left and right.
  if (canSwipe(pixelsDiff)) {
    setTranslateXPixels(translateXStart + pixelsDiff);
  }
}

function handleTouchEnd() {
  startTouch = undefined;
  beingTouched.value = false;

  visibleItemIndex = getNextVisibleItemIndex();

  // Translate the slider to the corresponding position based on the
  // item that will be visible after the user released the touch.
  // Note that we are using a negative "viewportWidth" because
  // the items positons are always negative for the X axis,
  // except for the first element's position which is 0.
  setTranslateXPixels(visibleItemIndex * -viewportWidth);
}

function getNextVisibleItemIndex() {
  const translateX = getTranslateX(slider.value);

  if (translateX >= 0) {
    return 0;
  }

  // TODO: It should be able to calculate the next visible
  // item based on the % visible and not just if it is
  // half the way to be visible.
  const halfOfViewportWidth = viewportWidth / 2;

  const result = Math.ceil(Math.abs(translateX) / halfOfViewportWidth);
  return result - 1;
}

function canSwipe(pixelsDiff) {
  // console.log("canSwipe", { pixelsDiff, visibleItemIndex, promos: promos.length });
  // Moving finger to the right.
  if (pixelsDiff > 0) {
    return visibleItemIndex > 0;
  }

  // Moving finger to the left.
  if (pixelsDiff < 0) {
    return visibleItemIndex < promos.length - 1;
  }
}

/**
 * Returns the translateX value from the element's
 * computed style.
 */
function getTranslateX(element) {
  const transformString = window.getComputedStyle(element).transform;
  const chunks = transformString.split(",");

  return Number(chunks[4]);
}

function setTranslateXPixels(number) {
  translateXPixels.value = `${number}px`;
}

onMounted(() => {
  updateViewportWidth(viewport.value);
  window.addEventListener("resize", handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
});
</script>

<template>
  <div
    ref="viewport"
    class="-mx-4 overflow-hidden"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div
      ref="slider"
      class="promos flex"
      :class="{ 'with-transition': !beingTouched }"
    >
      <div v-for="promo in promos" :key="promo.id" class="px-4 w-full shrink-0">
        <div class="py-16 text-center rounded bg-slate-200">
          {{ promo.text }}
        </div>
      </div>
    </div>
  </div>
  {{ translateXPixels }}
</template>

<style>
.with-transition {
  transition: transform 250ms ease-in;
}

.promos {
  transform: translate3d(v-bind(translateXPixels), 0, 0);
}
</style>
