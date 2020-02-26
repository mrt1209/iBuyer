<template>
    <div class="">
        <router-link :to="route" class="brk-btn">
            {{ buttonText }}
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeroButton extends Vue {
    @Prop() private buttonText!: string;
    @Prop({ default: "/" }) private route: string | undefined;
}
</script>

<style lang="scss" scoped>
.brk-btn {
    position: relative;
    background: none;
    color: rgb(138, 240, 214);
    text-transform: uppercase;
    text-decoration: none;
    border: 0.2em solid rgb(138, 240, 214);
    padding: 0.5em 1em;
    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 10%;
        background: white;
        height: 0.3em;
        right: 20%;
        top: -0.21em;
        transform: skewX(-45deg);
        -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
        transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 10%;
        background: white;
        height: 0.3em;
        left: 20%;
        bottom: -0.25em;
        transform: skewX(45deg);
        -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
        transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover {
        &::before {
            right: 80%;
        }
        &::after {
            left: 80%;
        }
    }
}
</style>
