<template>
    <div class="about-container" v-if="hideContent">
        <employee-card :fullName="fullName" :jobTitle="jobTitle" :aboutMe="aboutMe"></employee-card>
        <div class="separator-top">
            <div class="about-row">
                <h1>
                SAPOKODE
                </h1>
            </div>
        </div>
        <div class="separator-bottom">
            <div class="about-row">
                <h1>
                SAPOKODE
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeCard from '@/components/base/EmployeeCard.vue';
import '../../assets/sections/about.scss';
import { ref, onMounted } from 'vue';


export default {
    props: ['fullName', 'jobTitle', 'aboutMe', 'hideContent'],
    components: {
        EmployeeCard,
    },
    setup() {

        const scrollAmount = ref(0);
        const elemTop = ref(0);

        onMounted(() => {
            elemTop.value = window.getComputedStyle(document.querySelector(".boutsec")).top;
            document.addEventListener('wheel', (event) => {
                const DIVIDE_AMOUNT = 2;
                scrollAmount.value = event.deltaY / DIVIDE_AMOUNT;
                
                const elem = document.querySelector(".boutsec");
                if(!elem.style.top) {
                    elem.style.top = elemTop.value;
                    
                }
                const newTop = parseInt(elem.style.top.replace("px", "")) - scrollAmount.value;

                if(newTop <= 500 && newTop >= -500) {
                    elem.style.top = newTop + "px";
                    elemTop.value = elem.style.top
                }
            });
        });

        return {
            scrollAmount
        }
    },
};
</script>
