export default function ControlesGerais({ onReiniciar,onDesfazer,}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
      <button onClick={onReiniciar} >Reiniciar Partida</button>
      <button onClick={onDesfazer}>Desfazer Jogada</button>
    </div>
  );
  
}