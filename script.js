
let formato24h = true;
let pausado = false;
let intervalo;

function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    let periodo = '';

    if (!formato24h) {
        periodo = horas >= 12 ? "PM" : "AM";
        horas = horas % 12 || 12;
    }

    // Adiciona zero à esquerda se necessário
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const tempoFormatado = `${horas}:${minutos}:${segundos}${!formato24h ? ' ' + periodo : ''}`;
    document.getElementById("relogio").textContent = tempoFormatado;
}

// Iniciar o relógio
intervalo = setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Evento para alternar entre 12h e 24h
document.getElementById("alternarFormato").addEventListener("click", function() {
    formato24h = !formato24h;
    this.textContent = formato24h ? "Mudar para 12h" : "Mudar para 24h";
    atualizarRelogio();
});

// Evento para pausar/retomar o relógio
document.getElementById("pausar").addEventListener("click", function() {
    pausado = !pausado;
    if (pausado) {
        clearInterval(intervalo);
        this.textContent = "Retomar";
    } else {
        intervalo = setInterval(atualizarRelogio, 1000);
        this.textContent = "Pausar";
    }
});
