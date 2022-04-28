<script lang='ts'>
import {
    Navbar,
    Button,
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event: any) {
    isOpen = event.detail.isOpen;
  }
</script>

    <Navbar class="background-success">
        <h3 slot="brand">
          <a sveltekit:prefetch href="/">Plantronics</a>
        </h3>
        <ul class="inline">
          <li><a sveltekit:prefetch href="/">Home</a></li>
          <li><a sveltekit:prefetch href="/login">Login</a></li>
          <li><a sveltekit:prefetch href="/register">Register</a></li>
          <li><a sveltekit:prefetch href="/about">About</a></li>
        </ul>
      </Navbar>   