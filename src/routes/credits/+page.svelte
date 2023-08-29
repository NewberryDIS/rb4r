<script>
import {base} from '$app/paths'
import '$lib/main.css'
const bgs = [  '00005-4908357.png',
'00089-1210484339.png',
'00092-3246154362.png',
'00098-3907330411.png',
'00106-2937688618.png',
'00112-4151542721.png',
'00113-2048741382.png',
'00115-3716477855.png',
'00117-3457568186.png',
'00118-2356645542.png',
'00119-2119900799.png',
'00122-1396742090.png',
'00125-2437440079.png',
'00126-1024847607.png',
'00128-3449629565.png',
'00129-3449629566.png',
'00130-3449629567.png',
'00131-3449629568.png',
'00140-1374624034.png',
'00142-1374624036.png',
'00143-1374624037.png',
'00158-2523796087.png',
'00159-1911213317.png',
'00160-2561032557.png',
'00161-2561032558.png',
'00164-1653137829.png',
'00165-1653137830.png',
'00166-1653137831.png',
'00167-1653137832.png',
]
const bg = bgs[Math.floor(Math.random() * bgs.length)]
let bgc = true
function bgswap () {
    bgc = !bgc
}
</script>

<div class="bg-1-image" style="background-image: url('{base}/maps/{bg}')"></div>
<div class="bg-2-wedge" ></div>
<main class={bgc ? 'bgl' : 'bgd'}>
    <section class="top-level-wrapper">
        <article>
            <header>
                <h1 on:click={bgswap}>Race Before Race</h1>
            </header>
            <section>
                <p>Race is a powerful and challenging concept. When, where, and why did conceptions of race come into being? How might learning about its history help us better understand the complex role that race plays in our lives today?</p> 
                <p>Centuries before the term race came into popular use, people around the world used distinctions like language, dress, class, geography, and religion—in addition to traits like skin color or facial features—to categorize each other. Seeing Race Before Race explores these early expressions of race in medieval and early modern Europe between 1100 and 1800. </p> 
                <p>Seeing Race Before Race is generously supported by the Carl & Marilynn Thoma Foundation, the Samuel H. Kress Foundation, and Pam and Doug Walter.</p> 
                <p>You can purchase a copy of the exhibition catalog, Seeing Race Before Race: Visual Culture and the Racial Matrix in the Premodern World, from the Newberry Bookshop.</p>
            </section>
            <section>
                <dl>
                    <dt>Curators</dt>
                    <dd>Noémie Ndiaye, Randy L. and Melvin R. Berlin Assistant Professor of Renaissance and Early Modern English Literature at the University of Chicago</dd>
                    <dd>Lia Markey, Director of the Center for Renaissance Studies at the Newberry Library</dd>
                    <dd>Christopher Fletcher, Assistant Director of the Center for Renaissance Studies</dd>
                    <dd>Rebecca L. Fall, Program Manager of the Center for Renaissance Studies</dd>
                    <dd>Yasmine Hachimi, Public Humanities Fellow at the Newberry Library</dd>
                </dl>
                <dl class="the-end">
                    <dt>THE RACEB4RACE COLLECTIVE</dt>
                    <dd>Seeing Race Before Race draws on the pathbreaking work of partners in the research collective RaceB4Race. Founded in 2019, RaceB4Race centers the expertise, perspectives, and sociopolitical interests of scholars who are Black, Indigenous, and of color to demonstrate the value of premodern critical race studies and highlight the powerful histories of people of color in the classical, medieval, and early modern past.</dd>
                </dl>
            </section>
        </article>
    </section>
</main>
<style>

    .bg-1-image, 
    .bg-2-wedge {

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .bg-1-image {
        width: 100vw;
        z-index: -1;
        background-position: center;
        background-size: cover;
    }
    /* .bg-2-wedge { */
    /*     left: 0; */
    /*     z-index: 0; */
    /*     --wedge-dist: 900px; */
        /* left is usually wedge-color-1, but if you go above 180 deg, tit'll switch */
    /*     --wedge-color-1: rgb(var(--granite)); */
    /*     --wedge-color-2: rgba(var(--fg-color-1) ,0.7); */
    /*     background: linear-gradient( */
    /*         60deg, */
    /*         var(--wedge-color-1) 0vw, */
    /*         var(--wedge-dist), */
    /*         var(--wedge-color-2) var(--wedge-dist) 100vw */
    /*         ); */
    /*     background-attachment: fixed; */
    /* } */
    .top-level-wrapper {
        height: max(650px, 70vh );
        width: max(650px, 45vw );
        overflow-y: auto;
        border-radius: 10px;
        padding: 16px;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: flex-start;
        min-height: 0;
        min-width: 0;
    }
    .bgl {
        
        background: rgba(var(--granite),0.7);
    }
    .bgl .top-level-wrapper {

    box-shadow:  0 0 8px  8px rgba(var(--midnight),.1);
        background: rgba(var(--granite),0.7);
    }
    .bgd {

        background: rgba(var(--midnight),0.7);
    }
    .bgd .top-level-wrapper {

    box-shadow: inset 0 0 8px  8px rgba(var(--midnight),.1);
        background: rgba(var(--granite),0.97);
    }
    main {
        backdrop-filter: blur(15px) saturate(3) !important;
        z-index: 1;
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    section {
        width: max(550px, 30vw );
        max-height: 87vh;
        margin: 4vh 2vw;
    }
    h1 {
        font-size: 7.5vh;
        margin-block: 0.66em;
    }
    dt {
        margin-block: 8px 4px ;
        padding-block: 8px 4px ;
        text-transform: uppercase;
        font-weight: 900;
    }
    dd {
        margin-block: 4px;
        padding-block: 4px;
        border-bottom: 1px solid rgba(var(--midnight), 0.5);
    }
    .the-end {
        padding-bottom: 5vh;
    }
    </style>
