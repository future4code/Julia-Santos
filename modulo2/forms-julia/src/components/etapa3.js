import '../App.css';

function Etapa3() {
  return (
    <div>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <form action ="">
            <div class = "campo-graduacao-incompleta">
                <label for ="curso"> Porque não terminou o curso de graduação?</label>
                <input type = "text" name = "curso" id = "curso"/>
            </div>
            <div class = "campo-curso-complementar">
                <label for = "curso-complementar">Você fez algum curso complementar?</label>
            </div>
            <div class = ""campo-alternativa>
                <select>
                    <option value = "Sim">Sim</option>
                    <option value = "Não">Não</option>
                </select>    
            </div>
       </form>
    </div>
  );
}

export default Etapa3;