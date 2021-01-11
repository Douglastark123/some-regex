// validation script here
// const reg = /[a-z]/ig;
// const reg = new RegExp(/[a-z]/, 'i');

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {
    const style = regex.test(field.value) ? 'valid': 'invalid';
    field.className = style;
}

inputs.forEach( item => {
    item.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})