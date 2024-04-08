<template>
    <div class="tech-tag-wrap">
        <p>{{name.toUpperCase()}}</p>
    </div>
</template>

<script>
export default {
    props: ["name"],
    setup() {
        
    },
}
</script>

<style scoped>
.tech-tag-wrap {
    background-color: beige;
    padding: 0 0.5em 0 0.5em;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 12px;
}
</style>