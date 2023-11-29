<script lang="ts">
    import Icon from "../general/Icon.svelte";

    export let value: number;
    export let onChange: (newNumber: number) => void;
</script>

<div class="box">
    <span>{value}</span>
    <div class="button">
        <button class="button-svg" on:click={() => onChange(value + 1)}><Icon name="chevronUp" /></button>
        <divider />
        <button class="button-svg" on:click={() => onChange(value - 1)}><Icon name="chevronDown" /></button>
    </div>
</div>

<style>
    .box {
        height: 64px;
        align-items: center;
        display: flex;
        background-color: var(--color-light);
        border-radius: 10px;
        box-shadow: 0 4px 4px 0px rgb(0, 0, 0, 0.25);
    }

    span {
        font-size: 24px;
        padding: 15px 15px;
        width: 24px;
        text-align: center;
    }

    .button {
        display: flex;
        flex-direction: column;
        background-color: var(--color-neutral);
        height: 64px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .button-svg {
        border: none;
        background: none;
        height: 31px;
        padding: 0;
        display: flex;
        align-items: center;
        padding: 0px 10px;
    }

    divider {
        background-color: var(--color-light);
        height: 2px;
    }
</style>
