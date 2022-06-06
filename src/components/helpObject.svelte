<script lang="ts">
export let title: string;
export let body: string;
export let anchor: string;
</script>

<a id={anchor}>
   
    <div tabindex="0" class="collapse collapse-arrow border border-base-100 mb-5 mx-auto bg-primary rounded-box text-primary-content" on:click={()=>"bg-primary-focus"}>
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium text-justify place-items-center">{title}</div>
    
    <div class="collapse-content border-t-2 border-primary-content pt-1 text-left">
        <pre class="whitespace-pre-line overflow-auto">{body}</pre>
    </div>
    
</div>
</a>