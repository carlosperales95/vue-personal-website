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
                    'top': `${event.threshold - 100}px`
                }"
            >
                <h3>{{ event.name }}</h3>
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
                name: 'Event 1',
                description: 'Description of Event 1',
                threshold: 200,
                show: false
            },
            {
                id: 2,
                name: 'Event 2',
                description: 'Description of Event 2',
                threshold: 250,
                show: false
            },
            {
                id: 3,
                name: 'Event 3',
                description: 'Description of Event 4',
                threshold: 300,
                show: false
            },
            {
                id: 4,
                name: 'Event 4',
                description: 'Description of Event 4',
                threshold: 800,
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

            line.height += 250;
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
    top: -100px;
    border: 1px solid #111111;
    padding: 1rem;
    position: relative;
}

</style>
