import React, { Component } from 'react'
import comentarios from '../../dados/comentarios'

class Comentarios extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="comentarios">
                {comentarios.map((comentario) => (
                    <div className="comentario">
                        <img className="comentarios__perfil" src={comentario.imagem} />
                        <div>
                            <h2 className="comentarios__nome">{comentario.autora.nome}</h2>
                            <h3 className="comentarios__subtitulo">{comentario.subtitulo}</h3>
                            <hr />
                            <p>{comentario.texto}</p>
                        </div>
                    </div>

                ))
                }
            </div>
        )
    }
}

    export default Comentarios;