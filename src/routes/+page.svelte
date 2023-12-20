<script lang="ts">
  import MainMenu from "../components/main_menu/MainMenu.svelte";
  import PassAndPlay from "../components/main_menu/PassAndPlay.svelte";
  import PlayOnline from "../components/main_menu/PlayOnline.svelte";
  import HowToPlay from "../components/main_menu/HowToPlay.svelte";
  import { MainMenuState } from "$lib/common/Common.Enums";

  let currentState:MainMenuState = MainMenuState.MainMenu;

  $:changeState = function (newState:MainMenuState):void {
    currentState = newState;
  }
</script>

<div class="main">
  {#if currentState == MainMenuState.MainMenu}
    <MainMenu {changeState} />
  {:else if currentState == MainMenuState.PassAndPlay}
    <PassAndPlay {changeState} />
  {:else if currentState == MainMenuState.PlayOnline}
    <PlayOnline {changeState} />
  {:else if currentState == MainMenuState.HowToPlay}
    <HowToPlay {changeState} />
  {/if}
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
