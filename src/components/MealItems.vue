<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4 sm:p-8 max-w-screen-xl mx-auto">
        <div v-for="recommendation in recommendations"
            class="rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img class="w-full h-[200px] object-cover" :src="recommendation.image" :alt="recommendation.image">
            <div class="px-4 sm:px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ recommendation.label }}</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div class="pt-2 sm:pt-4">
                    <span
                        class="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-1 sm:mr-2 mb-2">#{{ recommendation.totalTime }}</span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-1 sm:mr-2 mb-2">#{{recommendation.totalTime}}</span>
                </div>
                <div class="mt-auto mb-2 text-center">
                    <a :href="recommendation.url" class="block text-blue-500 hover:text-blue-600">Get recipe</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommendations: Array,
    },
};
</script>
