<template>
    <div class="devlogs-container">
        <div class="devlogs-sidebar">
            <special-nav-link :pages="['home', 'projects', 'photography']"/>
            <h1> DEVLOGS </h1>
            <ul>
                <li
                    v-for="(article, index) in articles"
                    :key="index"
                    @click="selectArticle(null, article.name)"
                >
                    <span></span>
                    {{article.name}}
                </li>
            </ul>
        </div>
        <markdown-renderer
            v-if="mdFile"
            class="devlogs-main"
            :markdown="mdFile"
            @trigger-clear="clearArticle"
        ></markdown-renderer>
        <articles-list
            v-else
            :articles="articles"
            @trigger-select="selectArticle"
        ></articles-list>
    </div>
</template>

<script>
import { useDevlogsStore } from '@/stores/devlogs';
import { storeToRefs } from 'pinia';
import MarkdownRenderer from '@/components/layouts/MarkdownRenderer.vue';
import SpecialNavLink from '@/components/base/SpecialNavLink.vue';


import '../assets/sections/devlogs.scss'
import ArticlesList from '@/components/base/ArticlesList.vue';

export default {
    components: {
        MarkdownRenderer,
        ArticlesList,
        SpecialNavLink
    },
    setup() {
        const devlogsStore = useDevlogsStore();

        const {
            articles,
            mdFile,
        } = storeToRefs(devlogsStore);

        devlogsStore.populateArticles();

        const selectArticle = function(evt, name) {
            devlogsStore.getArticle(name);
        };

        const clearArticle = function() {
            devlogsStore.clearFile();
        }

        return {
            mdFile,
            articles,
            selectArticle,
            clearArticle
        }
    },
}
</script>