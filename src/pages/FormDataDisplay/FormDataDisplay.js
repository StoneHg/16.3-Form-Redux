import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalInputs, personalInputs } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personalInputs;
    const { curriculo, cargo, descricao } = professionalInputs;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          <p>Nome:</p>
          <p>{nome}</p>
        </div>
        <div>
          <p>Email:</p>
          <p>{ email }</p>
        </div>
        <div>
          <p>CPF:</p>
          <p>{ cpf }</p>
        </div>
        <div>
          <p>Endereço:</p>
          <p>{ endereco }</p>
        </div>
        <div>
          <p>Cidade:</p>
          <p>{ cidade }</p>
        </div>
        <div>
          <p>Estado:</p>
          <p>{ estado }</p>
        </div>
        <div>
          <p>Currículo:</p>
          <p>{ curriculo }</p>
        </div>
        <div>
          <p>Cargo:</p>
          <p>{ cargo }</p>
        </div>
        <div>
          <p>Descrição do cargo:</p>
          <p>{ descricao }</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personalInputs: state.reducer.personalInputs,
  professionalInputs: state.reducer.professionalInputs,
});

export default connect(mapStateToProps)(FormDataDisplay);
// funcionaria como (mapStateToProps, null)

// Componentize! \o/