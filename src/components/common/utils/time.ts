export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundo = '0'] = tempo.split(":")
    
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    const total = horasEmSegundos + minutosEmSegundos + Number(segundo)
    return total;
}