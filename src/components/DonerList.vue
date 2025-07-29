<script setup>
import { ref } from 'vue'
import DonerList from '@/assets/doner.json'

const DonerKeys = Object.keys(DonerList)
const activeTab = ref(0)

const setActiveTab = (index) => {
  activeTab.value = index
}


const copyToClipboard = async (number) => {
  try {
    await navigator.clipboard.writeText(number)
    alert(`Copied: ${number}`)
  } catch (err) {
    alert('Failed to copy')
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto p-4">
    <h2 class="text-3xl font-bold mb-6 text-center">Donor List of <span class="text-red-600 text-underline">Barishal</span></h2>
    <div class="flex flex-col md:flex-row gap-6">
      <ul
        class="flex md:flex-col overflow-x-auto md:overflow-visible text-sm font-medium text-gray-500 border-b md:border-b-0 md:border-r border-gray-200"
      >
        <li
          v-for="(group, index) in DonerKeys"
          :key="group"
          class="shrink-0"
        >
          <button
            type="button"
            @click="setActiveTab(index)"
            class="w-full text-left px-4 py-3 border-l-4 md:border-l-0 md:border-b-4 transition whitespace-nowrap"
            :class="{
              'text-blue-600 bg-blue-50 border-blue-600 font-semibold': activeTab === index,
              'border-transparent hover:text-gray-700 hover:bg-gray-100': activeTab !== index
            }"
          >
            {{ group }}
          </button>
        </li>
      </ul>

      <div class="flex-1">
        <div
          v-for="(group, index) in DonerKeys"
          :key="`content-${group}`"
          v-show="activeTab === index"
        >
          <h3 class="text-xl font-semibold text-blue-700 mb-4">Blood Group: {{ group }}</h3>
          <ul class="grid gap-3">
            <li
              v-for="number in DonerList[group]"
              :key="number"
              class="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <span class="font-mono text-gray-800">{{ number }}</span>
              <div class="flex gap-2">
                <button
                  @click="copyToClipboard(number)"
                  class="text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Copy
                </button>
                <a
                  :href="`tel:${number}`"
                  class="text-sm px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-700"
                >
                  Dial
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
