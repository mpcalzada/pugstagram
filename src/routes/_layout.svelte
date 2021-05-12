<script>
  import Header from "../components/Header.svelte";

  // Svelte ya provee esta propiedad y sirve para determinar la ruta en la que estamos
  export let segment;
</script>

<Header {segment} />

<main>
  <slot />
</main>
