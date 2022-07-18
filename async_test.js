// Basic promise

const num = 1;

const miPromesa = new Promise((respuesta, error) => {
    if (num === 1) {
        respuesta()
    } else {
        error()
    }
});

miPromesa
.then(()=> console.log("salio bien"))
.catch(()=> console.log("salio mal"));