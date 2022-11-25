import { API_KEY } from "./secrets.js";

type Credential = string | undefined;

export async function signUp(email: Credential, password: Credential) {
    const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        }
    );

    console.log(response);

    if (!response.ok) {
        throw new Error("An error occured");
    }
    const data = await response.json();

    console.log(data);

    return data;
}

export async function signIn(email: Credential, password: Credential) {
    const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        }
    );

    console.log(response);

    if (!response.ok) {
        throw new Error("An error occured");
    }
    const data = await response.json();

    console.log(data);

    return data;
}
