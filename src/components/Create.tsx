import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import { ENDPOINT } from '../Config.json';


function Create() {
    const name = useRef<HTMLInputElement>(null);
    const job = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    const [ResultURL, setResultURL] = useState<string>("");

    async function Upload() {
        if (name && job && email) {
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
                setResultURL(`http://${window.location.host}/view/${result.id}`);
            } else {
                alert(result.err);
            }
        }
    }

    return (
        <div>
            <h1>Create</h1>

            <input type="text" placeholder="이름" ref={name} />
            <input type="text" placeholder="직업" ref={job} />
            <input type="text" placeholder="이메일" ref={email} />

            <button onClick={Upload}>생성</button>

            <br />
            {ResultURL&& <><QRCode value={ResultURL} /><br />{ResultURL}</>}
        </div>
    )
}

export default Create;