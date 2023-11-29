<script lang="ts">
    import Icon from "./Icon.svelte";

    export let stringValue: string;
    export let value:any;
    export let valueList: any[];
    export let onChange: (newValue: any) => void;

    let selectedIndex = valueList.findIndex((val) => val == value);
    let valueListLength = valueList.length;

    function changeValueHandler(isIncrement: boolean) {
        if (!isIncrement) {
            selectedIndex = selectedIndex == 0 ? valueListLength - 1 : selectedIndex - 1;
        } else {
            selectedIndex = selectedIndex == valueListLength - 1 ? 0 : selectedIndex + 1;
        }
        value = valueList[selectedIndex];
        onChange(value);
    }
</script>

<div class="box">
    <button class="button-svg" on:click={() => changeValueHandler(false)} style="border-bottom-left-radius: 10px; border-top-left-radius: 10px;"><Icon name="chevronLeft"  width="1.5rem" height="1.5rem"/></button>
    <span>{stringValue}</span>
    <button class="button-svg" on:click={() => changeValueHandler(true)} style="border-bottom-right-radius: 10px; border-top-right-radius: 10px;"><Icon name="chevronRight" width="1.5rem" height="1.5rem"/></button>
</div>

<style>
    * {
        --box-width: 350px;
        --box-height: 64px;
        --button-width: 42px;
    }
    .box {
        height: var(--box-height);
        align-items: center;
        display: flex;
        background-color: var(--color-light);
        border-radius: 10px;
        box-shadow: 0 4px 4px 0px rgb(0, 0, 0, 0.25);
        width: var(--box-width);
    }

    button {
        border: none;
        background: none;
        padding: 0;
        align-items: center;
        padding: 0px 10px;
        background-color: var(--color-neutral);
        height: var(--box-height);
        width: var(--button-width);
    }

    span {
        width: calc(var(--box-width) - var(--button-width) * 2);
        font-size: 24px;
        text-align: center;
    }
</style>
