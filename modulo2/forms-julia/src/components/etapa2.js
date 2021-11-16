import '../App.css';

function Etapa2() {
  return (
    <div>
        <h1>Etapa 2 - Informações de Ensino Superior </h1>
        <form action ="">
        <div class = "campo-curso">
                <label for ="curso"> Qual curso?</label>
                <input type = "text" name = "curso" id = "curso"/>
            </div>
            <div class = "campo-unidade-ensino">
                <label for = "unidade-ensino"> Qual a unidade de ensino?</label>
                <input type = "text" name = "ensino" id = "ensino"/>
            </div>

        </form>
    </div>
  );
}

export default Etapa2;
