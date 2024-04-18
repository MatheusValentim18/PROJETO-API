import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros';
import { useParams } from 'react-router-dom';
import { LivrosService } from '../../api/LivrosService';
import './index.scss';

const LivrosEdicao = () => {
  let { livroId } = useParams();

  const [livro, setLivro] = useState({
    id: '',
    titulo: '',
    num_paginas: '',
    isbn: '',
    editora: '',
  });

  useEffect(() => {
    getLivro();
  }, []);

  const getLivro = async () => {
    try {
      const { data } = await LivrosService.getLivro(livroId);
      setLivro(data);
    } catch (error) {
      console.error('Erro ao buscar o livro:', error);
    }
  };

  const editLivro = async () => {
    try {
      const body = {
        id: Number(livro.id),
        titulo: livro.titulo,
        num_paginas: Number(livro.num_paginas),
        isbn: livro.isbn,
        editora: livro.editora,
      };
      await LivrosService.updateLivro(Number(livro.id), body);
      alert('Livro atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
      alert('Erro ao atualizar o livro');
    }
  };

  return (
    <>
      <Header />
      <SubmenuLivros />
      <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form id='formulario'>
            <div className='form-group'>
              <label>Id</label>
              <input
                type='text'
                disabled
                required
                onChange={(event) =>
                  setLivro({ ...livro, id: event.target.value })
                }
                value={livro.id || ''}
              />
            </div>
            <div className='form-group'>
              <label>Título</label>
              <input
                type='text'
                required
                onChange={(event) =>
                  setLivro({ ...livro, titulo: event.target.value })
                }
                value={livro.titulo || ''}
              />
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input
                type='text'
                required
                onChange={(event) =>
                  setLivro({ ...livro, num_paginas: event.target.value })
                }
                value={livro.num_paginas || ''}
              />
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input
                type='text'
                required
                onChange={(event) =>
                  setLivro({ ...livro, isbn: event.target.value })
                }
                value={livro.isbn || ''}
              />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input
                type='text'
                required
                onChange={(event) =>
                  setLivro({ ...livro, editora: event.target.value })
                }
                value={livro.editora || ''}
              />
            </div>
            <div className='form-group'>
              <button onClick={editLivro}>Atualizar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LivrosEdicao;
