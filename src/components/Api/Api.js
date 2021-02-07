const url = {
    url: 'http://localhost:3000/telegram',
};

class Api {
    constructor() {

    }

    shopRequest = (body) => {
        return fetch(`${url.url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "items": body.items,
                "name": body.name,
                "email": body.email,
                "tel": body.phone,
                "address": body.address,
                "text": body.comment
            }),
        })
            .then((res) => this._returnJson(res))
    };

    _returnJson = (res) => {
        if (!res.ok) {
            return Promise.resolve(res.json());
        }
        return res.json();
    }

}

export default Api;

