<template>
    <div class="about-me-container">
        <bi-column>
            <template v-slot:left>
                <div class="text-wrapper">
                    <p v-for="(line, index) in textContent" :key="index">
                        {{ line }}
                    </p>
                </div>
            </template>
            <template v-slot:right>
                <div class="technologie">
                    <skills-list></skills-list>
                </div>
            </template>
        </bi-column>
    </div>
</template>

<script>
import { ref } from 'vue';
import SkillsList from '@/components/base/SkillsList.vue';
import BiColumn from './BiColumn.vue';

export default {
    props: ["textContent"],
    components: {
        SkillsList,
        BiColumn
    },
    setup(props) {
        const textContent = ref(props.textContent.split(". "));
        return {
            textContent
        }
    },
}
</script>