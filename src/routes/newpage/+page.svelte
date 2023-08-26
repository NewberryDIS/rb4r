<main>
<div class="flex-parent">
    <div class="flex-child">
        <p>asdfasdfasdfasdfasdfasdfasdfasdfasdflkasjdflkajsdgflkjhs dfgjklhsdfljkg hsl ghlsdkjfh kljsdhg lkjshdfg kjshdfg kjsdh glkjsdhf</p>
    </div>
    <div class="flex-child">
        <p>asdfasdfasdfasdfasdfasdfasdfasdfasdflkasjdflkajsdgflkjhs dfgjklhsdfljkg hsl ghlsdkjfh kljsdhg lkjshdfg kjshdfg kjsdh glkjsdhf</p>
    </div>
    <div class="flex-child">
        <p>asdfasdfasdfasdfasdfasdfasdfasdfasdflkasjdflkajsdgflkjhs dfgjklhsdfljkg hsl ghlsdkjfh kljsdhg lkjshdfg kjshdfg kjsdh glkjsdhf</p>
    </div>
    <div class="flex-child">
        <p>asdfasdfasdfasdfasdfasdfasdfasdfasdflkasjdflkajsdgflkjhs dfgjklhsdfljkg hsl ghlsdkjfh kljsdhg lkjshdfg kjshdfg kjsdh glkjsdhf</p>
    </div>
    <div class="flex-child">
        <p>asdfasdfasdfasdfasdfasdfasdfasdfasdflkasjdflkajsdgflkjhs dfgjklhsdfljkg hsl ghlsdkjfh kljsdhg lkjshdfg kjshdfg kjsdh glkjsdhf</p>
    </div>
</div>

</main>
<style>
    main {
        width: 100vw;
        height: 100vh;
    
    }
    .flex-parent {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex-child {
        border: 1px solid black;
        /* flex: 1; */
        min-width: 0;
        height: 100%;
        background: rgba(0,255,255,0.5);
        background: url('/favicon.png');
        background-size: cover;
        background-position: center;
        display: flex;


        justify-content: center;
        align-items: center;
    }
    p {
        background: rgba(0,255,255,0.5);
        height: 50px;
    border: 1px solid blue;
    white-space: nowrap;
    overflow: hidden;
text-overflow: ellipsis;
    }
    :global(body){
        margin: 0;
        background: #333;
    }
</style>
