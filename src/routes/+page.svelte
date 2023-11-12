<script lang="ts">
  import MainMenu from "../components/main_menu/MainMenu.svelte";
  import PassAndPlay from "../components/main_menu/PassAndPlay.svelte";
  import PlayOnline from "../components/main_menu/PlayOnline.svelte";
  import HowToPlay from "../components/main_menu/HowToPlay.svelte";

  enum State {
    MainMenu,
    PassAndPlay,
    PlayOnline,
    HowToPlay,
  }

  let currentState:State = State.MainMenu;

  $:changeState = function (newState:State):void {
    currentState = newState;
  }
</script>

<div class="main">
  {#if currentState == State.MainMenu}
    <MainMenu {changeState} />
  {:else if currentState == State.PassAndPlay}
    <PassAndPlay {changeState} />
  {:else if currentState == State.PlayOnline}
    <PlayOnline {changeState} />
  {:else if currentState == State.HowToPlay}
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
