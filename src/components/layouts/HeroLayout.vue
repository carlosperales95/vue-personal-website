<template>
    <div class="hero-container">
        <div class="site-title">
            <slot name="header">
            
            </slot>
        </div>
        <div class="nav-container">
            <div class="img-container">
                <slot name="left">

                </slot>
            </div>
            <div class="links">
                <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/devlogs">DevLogs</router-link></li>
                    <li><router-link to="/">Photography</router-link></li>
                    <li><router-link to="/">Music</router-link></li>
                </ul>
                <div class="action-container">
                    <a class="action-link" @click="$emit('trigger-show')">Learn more about me</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['trigger-show'],
    setup() {
        
    },
}
</script>
<style scoped>
.hero-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    /* background-color: black; */
    background: rgb(26,26,26);
    background: linear-gradient(0deg, rgba(26,26,26,0.5) 0%, rgba(0,0,0,1) 2%);
}


.site-title {
    background-color: azure;
    color: black;
    padding-right: 10%;
    margin-bottom: 1rem;
    margin-top: 10%;
    text-align: right;
    width: 60%;
    align-self: flex-end;
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Karma Future';
    padding: 0.5rem;
    align-items: flex-end;
}


.nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: azure;
}


.links {
    font-family: 'Karma Future';
    width: 60%;
    text-align: left;
}


.img-container {
    width: 100%;
    text-align: center;
}


.links ul {
    list-style: none;
    font-size: 30px;
    margin-bottom: 6rem;
    list-style: '\21B3';
}

.links ul li {
    margin-bottom: 2rem;
}

.links ul li {
    /* background-color: #E67E22; */
    margin-right: 20%;
}

.links ul li::marker {
    font-weight: bolder;
    font-size: 40px;
}

a {
    text-decoration: none;
    color: azure;
    padding: 1rem;
    background: linear-gradient(to left, transparent 50%, #E67E22 50%) right;
    background-size: 201% 100%;
    transition: .5s ease-out;
}

a:hover {
    /* color: #E67E22; */
    background-position: left;
}

.action-container {
    background-color: transparent;
    width: 100%;
    text-align: center;
    display: flex;
    min-height: 20%;
}

.action-link {
    min-width: 20rem;
    width: 80%;
    height: 5rem;
    font-size: 22px;
    background-color: transparent;
    color: azure;
    align-self: flex-end;
    border: 2px solid azure;
    line-height: 5rem;
}

.action-link:hover {
    cursor: pointer;
    border-color: #E67E22;
}


</style>