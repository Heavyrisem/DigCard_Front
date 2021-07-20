import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { ENDPOINT } from '../Config.json';


function Create() {
    const name = useRef<HTMLInputElement>(null);
    const job = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    const [ResultURL, setResultURL] = useState<string>("");
    const [Fetching, setFetching] = useState<boolean>(false);

    async function Upload() {
        if (name && job && email && !Fetching) {
            setFetching(true);
            const Card = {
                name: name.current?.value,
                job: job.current?.value,
                email: email.current?.value,
                author: "Anonymous"
            }

            let response = await fetch(`http://${ENDPOINT}/v1/card/create`, {
                method: "POST",
                body: JSON.stringify(Card),
                headers: {'Content-Type': 'application/json'}
            });
            let result: {id?: string, err?: string} = await response.json();

            if (result.id) {
                // alert(`http://${ENDPOINT}/view/${result.id}`);
                setResultURL(`/view/${result.id}`);
            } else {
                alert(result.err);
            }
            setFetching(false);
        }
    }

    return (
        <div>
            <h1>Create</h1>

            <input type="text" placeholder="이름" ref={name} /><br />
            <input type="text" placeholder="직업" ref={job} /><br />
            <input type="text" placeholder="이메일" ref={email} /><br />

            <button onClick={Upload}>생성</button>

            <br />
            {ResultURL&& 
                <>
                    <div>Share this QR Code/URL</div>
                    <QRCode value={ResultURL} /><br />
                    <Link to={ResultURL}>{`http://${window.location.host}${ResultURL}`}</Link>
                </>
            }
        </div>
    )
}

export default Create;