import React from 'react';
import { useState } from 'react';

function Counter()
{
    let $count = 0;

    function increment()
    {
        $count = $count + 1;
    }

    return (
        <button type="button" onClick={increment}>
            {$count}
        </button>
        );
}

function FrameworkList()
{
    let frameworkArray = [
        { name: 'React', url: 'https://reactjs.org' },
        { name: 'Solid', url: 'https://solidjs.com' },
        { name: 'Svelte', url: 'https://svelte.dev' },
        { name: 'Vue', url: 'https://vuejs.org' }
        ];
    let frameworkCount = frameworkArray.length;

    return (
        <>
            {#if frameworkCount > 0}
                <p>Framework count : {frameworkCount}.</p>
            {/if}

            {#if frameworkCount == 1}
                <p>{frameworkCount} framework.</p>
            {:else}
                <p>{frameworkCount} frameworks.</p>
            {/if}

            {#if frameworkCount == 0}
                <p>No framework.</p>
            {:else}
                {#if frameworkCount == 1}
                    <p>One framework.</p>
                {:else}
                    {#if frameworkCount == 2}
                        <p>Two frameworks.</p>
                    {:else}
                        <p>Many frameworks.</p>
                    {/if}
                {/if}
            {/if}

            {#if frameworkCount == 0}
                <p>No framework.</p>
            {:else if frameworkCount == 1}
                <p>One framework.</p>
            {:else if frameworkCount == 2}
                <p>Two frameworks.</p>
            {:else}
                <p>Many frameworks.</p>
            {/if}

            <ul>
                {#for {name, url}, index of frameworkArray}
                    <li key={index}>
                        <a target="_blank" href={url}>
                            {index + 1} : {name}
                        </a>
                    </li>
                {/for}
            </ul>
        </>
        );
}

function Person(
    props
    )
{
    let $name = `${props.firstName} ${props.lastName}`;

    return (
        <p>
            {$name}
        </p>
        );
}

function App(
    props
    )
{
    return (
        <>
            <Counter/>
            <FrameworkList/>
            <Person firstName="Jack" lastName="Sparrow"/>
        </>
        );
}

export default App;
