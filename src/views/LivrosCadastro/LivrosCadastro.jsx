import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubmenuLivros from "../../components/SubmenuLivros/SubmenuLivros";
import { LivrosService } from "../../api/LivrosService";
import "./index.scss";

const LivrosCadastro = () => {
  const [livro, setLivro] = useState({
    id: "",
    titulo: "",
    num_paginas: "",
    isbn: "",
    editora: "",
  });

  const createLivro = async () => {
    try {
      const response = await LivrosService.createLivro(livro);
      alert("Livro cadastrado com sucesso! ID: " + response.data.id);
      // Limpar campos após o cadastro
      setLivro({
        id: "",
        titulo: "",
        num_paginas: "",
        isbn: "",
        editora: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar o livro:", error);
      alert("Erro ao cadastrar o livro");
    }
  };

  return (
    <>
      <Header />
      <SubmenuLivros />
      <div className="livrosCadastro">
        <h1>Cadastro de Livros</h1>
        <div>
          <form id="formulario">
            <div className="form-group">
              <label>Id</label>
              <input
                type="text"
                id="id"
                required
                onChange={(event) =>
                  setLivro({ ...livro, id: event.target.value })
                }
                value={livro.id}
              />
            </div>
            <div className="form-group">
              <label>Titulo</label>
              <input
                type="text"
                id="titulo"
                required
                onChange={(event) =>
                  setLivro({ ...livro, titulo: event.target.value })
                }
                value={livro.titulo}
              />
            </div>
            <div className="form-group">
              <label>Número de Páginas</label>
              <input
                type="text"
                id="num"
                required
                onChange={(event) =>
                  setLivro({ ...livro, num_paginas: event.target.value })
                }
                value={livro.num_paginas}
              />
            </div>
            <div className="form-group">
              <label>ISBN</label>
              <input
                type="text"
                id="isbn"
                required
                onChange={(event) =>
                  setLivro({ ...livro, isbn: event.target.value })
                }
                value={livro.isbn}
              />
            </div>
            <div className="form-group">
              <label>Editora</label>
              <input
                type="text"
                id="editora"
                required
                onChange={(event) =>
                  setLivro({ ...livro, editora: event.target.value })
                }
                value={livro.editora}
              />
            </div>
            <div className="form-group">
              <button onClick={createLivro}>Cadastrar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosCadastro;
