export default function AcoesJogo({ onPontuar, onPassarBola, desabilitado, jogoAcabou }) {
return (
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
<button onClick={() => onPontuar(1)} disabled={desabilitado} >+1 Ponto</button>
<button onClick={() => onPontuar(2)} disabled={desabilitado} >+2 Pontos</button>
<button onClick={() => onPontuar(3)} disabled={desabilitado} >+3 Pontos</button>
<button onClick={onPassarBola} disabled={desabilitado}>Trocar Posse </button>
</div>
);
}