<template>
    <IconsRepo/>
    <div id="navbar" class="site-title">
        <socials-bar/>
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

        window.addEventListener("scroll", function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                changeStyle("full");
            } else {
                changeStyle("bar");
            }
        });


        const changeStyle = function(mode) {
            const header = document.getElementById('navbar');
            // const logo = document.getElementById('logo');
            if(!header) return;

            if(mode == "full") {
                header.classList.remove('site-title');
                header.classList.add('site-title-bar');
                // logo.classList.remove('intro');
                // logo.classList.add('intro-bar');
                barStyle.value = "bar";
            } else {
                header.classList.remove('site-title-bar');
                header.classList.add('site-title');
                // logo.classList.remove('intro-bar');
                // logo.classList.add('intro');
                barStyle.value = "full";
            }
        };
        
        return {
            barStyle,
            changeStyle
        };
    },
}
</script>
