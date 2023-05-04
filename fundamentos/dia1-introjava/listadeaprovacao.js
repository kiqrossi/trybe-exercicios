let stats = 'fila'

switch (stats) {
    case 'aprovado':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!')
        break;

    case 'reprovado':
        console.log('Infelizmente você rodou o gipe!')
        break;

    case 'fila':
        console.log('Você está em nossa lista.')
        break;

    default:
        console.log('Informação inválida');
}