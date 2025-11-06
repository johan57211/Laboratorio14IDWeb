class Notificacion {
    constructor(destinatario) {
        this.destinatario = destinatario;
    }

    enviar() {
        console.log("Enviando notificación genérica...");
    }
}

class Email extends Notificacion {
    enviar() {
        console.log(`Enviando email a ${this.destinatario}`);
    }
}

class SMS extends Notificacion {
    enviar() {
        console.log(`Enviando SMS a ${this.destinatario}`);
    }
}

class Push extends Notificacion {
    enviar() {
        console.log(`Enviando notificación push a ${this.destinatario}`);
    }
}

function procesarNotificaciones(lista) {
    for (let notificacion of lista) {
        notificacion.enviar();
    }
}

let notificaciones = [
    new Email("juan@example.com"),
    new SMS("+51987654321"),
    new Push("Usuario123"),
    new Email("johan@example.com")
];

procesarNotificaciones(notificaciones);
