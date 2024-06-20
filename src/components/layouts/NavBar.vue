<template>
    <IconsRepo/>
    <div id="navbar" :class="barStyle === 'full' ? 'site-title' : 'site-title-bar'">
        <socials-bar :class="barStyle === 'full' ? '' : 'negative-colored'"/>
        <div id="logo" :class="barStyle === 'full' ? 'intro' : 'intro-bar'">
            <div class="starburst">
                <span>
                    Hello!
                </span>
            </div>
            <h2>
                SapoKode
            </h2>
            <p>
                - Software Engineer
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import SocialsBar from '../base/SocialsBar.vue';
import IconsRepo from '../icons/IconsRepo.vue';

export default {
    emits: ['trigger-bar'],
    components: {
        SocialsBar,
        IconsRepo
    },
    setup() {

        const barStyle = ref("full");

        window.addEventListener("scroll", () =>
            (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
                ? barStyle.value = "bar"
                : barStyle.value = "full"
        );
        
        return {
            barStyle,
        };
    },
}
</script>
