<script lang='ts'>
import Help from '../../components/help.svelte';

import MyPlants from '../../components/myPlants.svelte';
import ProfileTab from '../../components/profiletab.svelte';
</script>

<ProfileTab active={1} />
<Help help="../help#myplants"/>
<MyPlants />