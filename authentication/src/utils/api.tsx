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

    const data = await response.json();

    if (!response.ok) {
        console.log(data.error.message);
        throw new Error(data.error.message || "An error occurred.");
    }

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

    const data = await response.json();

    if (!response.ok) {
        console.log(data.error.message);
        throw new Error(data.error.message || "An error occurred.");
    }

    return data;
}
