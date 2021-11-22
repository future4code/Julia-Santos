import React from 'react';

const NewTaskInput = ({savedata, props}) => {

//   state = {
//     artistaOuBanda:"",
//     musicaEscolhida:"",
//     linkDaMusica:""

// }


  

  return (
    <div>
      <h2>Adicionar Musica</h2>
      <form >
        <input
          className="Todo-input"
          placeholder="Digite o nome do artista ou banda."
          value={props.artistaOuBanda}
          // onChange={handleartistaOuBanda}
        />
         <input
          className="Todo-input"
          placeholder="Digite uma nova musica."
          // onChange={handlemusicaEscolhida}
        />
         <input
          className="Todo-input"
          placeholder="Digite o link da musica."
          // onChange={handlelinkDaMusica}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;