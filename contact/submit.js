const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const content = document.querySelector('#content');

form.addEventListener('submit', e => {
    e.preventDefault();
    if ( name.value && email.value && content.value ) {
        const data = { name: name.value, email: email.value, content: content.value };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('/contact', options);
        window.location.replace('/contact/msg_sent');
    } else {
        if (!name.value) {alert('Voeg een naam toe!'); return};
        if (!email.value) {alert('Voeg een email toe!'); return};
        if (!content.value) {alert('Voeg een content toe!'); return};
    }
})