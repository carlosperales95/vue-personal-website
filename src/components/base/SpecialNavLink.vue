<template>
    <div class="special-link-wrap">
        <router-link class="filled-background" to="/">HOME</router-link>
        <router-link class="filled-background" to="/">DEVLOGS</router-link>
        <router-link class="filled-background" to="/">PHOTOGRAPHY</router-link>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

.special-link-wrap {
    display: flex;
    flex-wrap: wrap;
    /* background-color: black; */
}

.filled-background {
    background: linear-gradient(to left, black 50%, #E67E22 50%) right;
    background-size: 201% 100%;
    transition: .5s ease-out;
    font-size: 50px;
    text-decoration: none;
    color: black;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 20px;
}

.filled-background::first-letter {
    background-color: transparent;
    color: #e6c222;
    font-weight: bolder;
}

.filled-background:hover {
    background-position: left;
    color: #e6c222;
    transition: color 1 ease-in;
}

</style>