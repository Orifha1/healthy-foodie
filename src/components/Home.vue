<template>
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                        <div
                            class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                            i</div>
                        <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 class="leading-relaxed">Healthy Meal Recommendations</h2>
                            <p class="text-sm text-gray-500 font-normal leading-relaxed">Specify your dietery restrictions
                            </p>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div class="flex flex-col">
                                <label class="leading-loose" for="dietaryRestrictions">Dietary Restriction</label>
                                <input type="text" id="dietaryRestrictions" v-model="dietaryRestrictions"
                                    placeholder="e.g. vegan, gluten-free"
                                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    :class="{ 'required-field-error': formErrors.dietaryRestrictions && !dietaryRestrictions }"
                                    required>
                            </div>

                            <div class="flex flex-col">
                                <label for="cuisine" class="leading-loose">Cuisine</label>
                                <select
                                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    :class="{ 'required-field-error': formErrors.cuisine && !cuisine }"
                                    id="cuisine" v-model="cuisine" 
                                    required 
                                    >
                                    <option value="">Choose your cuisine</option>
                                    <option value="italian">Italian</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="asian">Asian</option>
                                </select>
                            </div>
                        </div>
                        <div class="pt-4 flex items-center space-x-4">
                            <button
                                class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                                @click.prevent="getRecommendations">Get Recommendations</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="loading">Loading...</div>
    </div>
    <MealItems :recommendations="recommendations" v-if="!loading" />
</template>

<script>
import axios from 'axios';
import MealItems from './MealItems.vue';

export default {
    data() {
        return {
            dietaryRestrictions: '',
            cuisine: '',
            recommendations: [],
            loading: false,
            formErrors: { dietaryRestrictions: false, cuisine: false },
        };
    },
    components: {
        MealItems,
    },
    methods: {
        async getRecommendations() {
            // Check for required fields
            if (!this.dietaryRestrictions || !this.cuisine) {
                this.formErrors.dietaryRestrictions = !this.dietaryRestrictions;
                this.formErrors.cuisine = !this.cuisine;
                return; // Do not proceed with the request if fields are not filled
            }

            // Reset form errors
            this.formErrors.dietaryRestrictions = false;
            this.formErrors.cuisine = false;
            this.loading = true;
            const baseUrl = import.meta.env.baseUrl;
            try {
                const response = await axios.get('http://localhost:8000/search', {
                    params: {
                        diet: this.dietaryRestrictions,
                        cuisine: this.cuisine,
                    },
                });
                console.log("Test : ", response);

                this.recommendations = response.data.map(data => ({
                    label: data.label,
                    url: data.url,
                    image: data.image,
                }));

                // Clear form fields after successful data retrieval
                this.dietaryRestrictions = '';
                this.cuisine = '';

            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style>
/* Add a class to required fields with missing values when the button is pressed */
.required-field-error {
  border-color: red;
}
</style>
