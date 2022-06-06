<script lang="ts">
import HelpObject from "../components/helpObject.svelte";

let myplants:string = `
How to add plants to MyPlants
------------------------------

The MyPlants system is currently not available,
and as such plants cannot be added to MyPlants.
`

let plantspage:string = `
The plants page
-------------------------------

The plants page has 4 main areas
Plant, Info, Soil Preferences and Edibility.

To swap between these sections use 
the tab bar located below the navigation menu.
`

let login:string = `
How to login to your account?
------------------------------

Use the navigation menu to go to 
the login page and enter your 
username and password, and click submit.
`

let register:string = `
How to create an account?
------------------------------

Use the navigation menu to go to 
the signup page, and add your 
username, firstname, lastname, email, and password (twice).

Then accept the terms and conditions and click the signup button.
`
</script>

<svelte:head>
    <title>Help Center</title>
</svelte:head>

<main class="w-full">
    <h1 class="text-center text-2xl p-5">Help Center</h1>
    <HelpObject title="Create Account" body={register} anchor="register" />
    <HelpObject title="Login" body={login} anchor="login" />
    <HelpObject title="Plants Page" body={plantspage} anchor="plantspage" />
    <HelpObject title="My Plants" body={myplants} anchor="myplants" />

    <p>If something is not working as expected don't hestitate to contact the administrator at <a href="mailto:hedgehog.thomas@gmail.com" class="link-primary">hedgehog.thomas@gmail.com</a></p>
</main>
