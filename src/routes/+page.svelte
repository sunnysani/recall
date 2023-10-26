<div class="main">
  <card>
    <h1 class="playful">Recall Game</h1>
    <p>This is a test</p>
    <br />
    <button>Pass and Play</button>
    <br />
    <button>Multiplayer</button>
    <br />
    <a href="/how-to-play">How to play</a>
    <br />
  </card>
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 50vw;
  }

  h1 {
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 2px 2px 2px var(--color-text);
  }
</style>
