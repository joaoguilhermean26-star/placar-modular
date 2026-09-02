import { useState } from 'react';
import Placar from './components/Placar';
import AcoesJogo from './components/Acoesjogo';
import Historico from './components/Historico';
import Controlegerais from './components/Controlegerais';

export default function App() {
const [pontosA, setPontosA] = useState(0);
const [pontosB, setPontosB] = useState(0);
const [posseTimeA, setPosseTimeA] = useState(true); // true = Time A, false = Time B
const [historico, setHistorico] = useState([]);
const jogoAcabou = pontosA >= 21 || pontosB >= 21;
const timeVencedor = pontosA >= 21 ? 'Time A' : 'Time B';

function desfazerJogada(){
if (historico.length === 0) return;
const ultimajogada = historico [historico.length -1];
const foiTimeA = ultimajogada.startsWith ('Time A');
const pontos = parseInt(ultimajogada.match(/\+(\d+)/)[1]);
if (foiTimeA) {
    setPontosA(pontosA - pontos);
}else {
    setPontosB(pontosB - pontos);
}
setHistorico(historico.slice(0, -1));
setPosseTimeA(foiTimeA)

} 
function reiniciarPartida(){
setPontosA(0);
setPontosB(0);
setPosseTimeA(true);
setHistorico([]);
}
function registrarPontos(pontos) {
const timeAtual = posseTimeA ? 'Time A' : 'Time B';
if (posseTimeA) {
setPontosA(pontosA + pontos);
} else {
setPontosB(pontosB + pontos);
}
setHistorico([
...historico,
`${timeAtual} marcou +${pontos} ponto(s)`
]);
setPosseTimeA(!posseTimeA);
}
function passarBola() {
setPosseTimeA(!posseTimeA);
}
return (
<div style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
  {jogoAcabou && (
  <div style={{ backgroundColor: '#03ff4f', color: 'white', padding: '15px', borderRadius: '8px', margin: '10px 0', fontSize: '20px', fontWeight: 'bold' }}>
  {timeVencedor} venceu a partida!
  </div>
)}
<h1>Placar do Jogo</h1>
<Placar
pontosA={pontosA}
pontosB={pontosB}
posseTimeA={posseTimeA}
/>
<AcoesJogo
desabilitado={jogoAcabou}
onPontuar={registrarPontos}
onPassarBola={passarBola}
/>
<Historico historico={historico} />

<Controlegerais 
onReiniciar={reiniciarPartida}
onDesfazer={desfazerJogada}/>
</div>

);
}