import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useParams, Route } from 'react-router-dom';

const ENDPOINT = 'localhost:8000';

export interface Card_T {
    [index: string]: string | undefined,
    id?: string | undefined,
    name: string,
    job: string,
    email: string,
    phone: string,
    URL: string,
    author: string
}

function View() {
    const { id } = useParams<{id: string}>();
    const [Card, setCard] = useState<Card_T>();


    useEffect(() => {
        console.log(id)
        ReadCardByID(id);
    }, [id]);

    async function ReadCardByID(id: string) {
        let result = await fetch(`http://${ENDPOINT}/v1/card/${id}`, {
            method: "GET"
        });
        // console.log(await result.text());
        let js: {card?: Card_T, err?: string} = await result.json();

        if (js.card) setCard(js.card);
        else alert(js.err);
    }

    return (
        <div>
            <h1>VIEW</h1>

            {(Card)&& [Card.name, Card.job, Card.email].join(" ")}
        </div>
    )
}


export default View;