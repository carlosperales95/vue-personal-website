<template>
    <!-- {{ markdown }} -->
    <!-- <textarea v-model="markdown"></textarea> -->
    <div>
        <div class="back" @click="$emit('trigger-clear')">
            &lt;
        </div>
        <div class="markdown-reader">
            <div v-html="markdownToHtml"></div>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import {marked} from 'marked';

export default {
    props: ['markdown'],
    emits: ['trigger-clear'],
    setup(props) {
        const markdownToHtml = computed(() => {
            return marked(props.markdown);
        })
        return {
            markdownToHtml
        }
    },
}
</script>