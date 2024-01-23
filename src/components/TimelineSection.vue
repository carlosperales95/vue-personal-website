<template>
    <section class="events section" @click.prevent="growLine">
        <h2>Event Line</h2>
        <div
            class="line-container"
            :style="{'height': `${line.height + 200}px`}"
        >
            <div class="line-column">
                <span
                    class="line"
                    :class="{ 'completed': line.complete }"
                    :style="{
                        'height': `${line.height}px`,
                    }"
                ></span>
            </div>
            <div class="event-column">
            <div
                v-for="event in events"
                :key="event.id"
                class="event"
                :style="{
                    'display': `${event.show ? 'block' : 'none'}`,
                    
                }"
            >
                <h3>{{ event.name }}</h3>
                <h5>{{ event.location }}</h5>
                <h5>{{ event.year }}</h5>
                <p>{{ event.description }}</p>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import { ref, reactive, watch } from 'vue'

export default {
    setup() {

        const line = reactive({
            height: 0,
            complete: false
        });

        const events = ref([
            {
                id: 1,
                type: 'studies',
                year: 2015,
                location: 'La Salle Bilbao',
                name: 'High School',
                description: 'Description of Event 1',
                threshold: 200,
                show: false
            },
            {
                id: 3,
                type: 'work',
                year: 2017,
                location: 'DeustoTech',
                name: 'Internship DeustoTech',
                description: 'Internship in Uni',
                threshold: 400,
                show: false
            },
            {
                id: 4,
                type: 'work',
                year: 2018,
                location: 'WeNite',
                name: 'Internship WeNite',
                description: 'Another internship in Uni',
                threshold: 600,
                show: false
            },
            {
                id: 5,
                type: 'studies',
                year: 2018,
                location: 'WeNite',
                name: 'Graduate CS degree',
                description: 'Finished degree',
                threshold: 800,
                show: false
            },
            {
                id: 6,
                type: 'work',
                year: 2019,
                location: 'University of Deusto',
                name: 'Software Engineer at Luggo',
                description: 'Part time job luggo',
                threshold: 1000,
                show: false
            },
            {
                id: 7,
                type: 'work',
                year: 2015,
                location: 'University of Bologna',
                name: 'Traineeship in Unibo',
                description: 'Traineeship in bolo',
                threshold: 1200,
                show: false
            },
            {
                id: 8,
                type: 'studies',
                year: 2021,
                location: 'VU + UvA',
                name: 'Graduate Msc Software Engineering',
                description: 'Finished Masters',
                threshold: 1400,
                show: false
            },
            {
                id: 9,
                type: 'work',
                year: 2015,
                location: 'AMS',
                name: 'Technical Support Engineer',
                description: 'Adyen',
                threshold: 1800,
                show: false
            },
        ]);

        watch(line, () => {
            events.value.forEach(element => {
                if(element.threshold <= line.height)
                    element.show = true;
            });
        });

        const growLine = function () {
            if(events.value.filter(ev => !ev.show).length === 0) {
                line.complete = true;
                return;
            }

            if(line.height === 0) {
                const elem = document.querySelector('.line');
                elem.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
            }

            line.height += 200;
            window.scrollBy({
                top: 400,
                left: 0,
                behavior: "smooth",
            });
            console.log(line.height);
        };

        return {
            line,
            events,
            growLine,
        }
    },
}
</script>

<style scoped>
.events {
    background-color: #fff3f3;
    color: #111111;
    overflow: hidden;
}

.line-container {
    width: 100%;
    min-height: 8vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    transition: height 0.3s ease-in;
}

.line::before {
    content: "";
    height: 30px;
    width: 30px;
    margin-left: -13px;
    border-radius: 20px;
    background-color: aqua;
    display: block;
}

.completed:after {
    content: "";
    height: 30px;
    width: 30px;
    margin-left: -13px;
    border-radius: 20px;
    background-color: aqua;
    display: block;
    top: 95%;
    position: relative;
}

.line {
    content: "";
    height: 0px;
    width: 4px;
    background-color: aqua;
    display: block;
    position: relative;
    left: 50%;
    margin-top: 0;
    transition: height 0.5s ease-in;
}

.line-column {
    grid-column-start: 2;
    width: 100%;
}

.event-column {
    grid-column-start: 3;
}

.event {
    top: 0;
    border: 1px solid #111111;
    padding: 1rem;
    position: relative;
    margin-bottom: 2rem;
}

.event h3 {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 5px;
}

.event p {
    font-size: 18px;
}

.event h5 {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
}

</style>
