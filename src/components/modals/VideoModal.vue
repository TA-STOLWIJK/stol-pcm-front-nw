<script setup>
import videoCode from '@/assets/video.json'
import CloseButton from '@/components/button/CloseButton.vue'
import { ref } from 'vue'

const emit = defineEmits(['closeModal'])

const props = defineProps(['scan'])
const useCode = ref(null)

if (props.scan === 'A') {
  useCode.value = videoCode.videoA
} else if (props.scan === 'B') {
  useCode.value = videoCode.videoB
} else if (props.scan === 'C') {
  useCode.value = videoCode.videoC
} else if (props.scan === 'D') {
  useCode.value = videoCode.videoD
} else if (props.scan === 'E') {
  useCode.value = videoCode.videoE
} else if (props.scan === 'H') {
  useCode.value = videoCode.videoH
} else if (props.scan === 'I') {
  useCode.value = videoCode.videoI
} else if (props.scan === 'J') {
  useCode.value = videoCode.videoJ
} else if (props.scan === 'K') {
  useCode.value = videoCode.videoK
} else if (props.scan === 'L') {
  useCode.value = videoCode.videoL
} else if (props.scan === 'M') {
  useCode.value = videoCode.videoM
} else if (props.scan === 'N') {
  useCode.value = videoCode.videoN
} else if (props.scan === 'O') {
  useCode.value = videoCode.videoO
} else if (props.scan === 'P') {
  useCode.value = videoCode.videoP
} else if (props.scan === 'Q') {
  useCode.value = videoCode.videoQ
} else if (props.scan === 'R') {
  useCode.value = videoCode.videoR
} else if (props.scan === 'T') {
  useCode.value = videoCode.videoT
} else if (props.scan === 'W') {
  useCode.value = videoCode.videoW
} else if (props.scan === 'AB') {
  useCode.value = videoCode.videoAB
}

const exit = () => {
  emit('closeModal')
}
</script>
<template>
  <div
    class="py-12 bg-gray-100 opacity-95 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
    id="modal"
  >
    <div role="alert" class="container mx-auto w-11/12">
      <div
        class="relative py-8 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400"
      >
        <div class="text-center">
          <div class="flex">
            <video ref="el" class="m-auto rounded" :src="useCode" width="1000" controls autoplay />
          </div>
        </div>
        <CloseButton @click="exit" />
      </div>
    </div>
  </div>
</template>

<style></style>
