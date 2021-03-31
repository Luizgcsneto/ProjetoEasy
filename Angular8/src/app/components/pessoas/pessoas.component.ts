import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Pessoa';
import { PessoasService } from 'src/app/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  formulario: any;
  tituloFormulario!: string;
  pessoas : Pessoa[];

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  constructor(private pessoasService : PessoasService) { }

  ngOnInit(): void {

    this.pessoasService.pegartodos().subscribe(resultado =>{
      this.pessoas = resultado;
      console.log(resultado)
    })

  }

  ExibirFormularioCadastro(): void
  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = "Nova Pessoa"
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobreNome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)

    });
  }

  EnviarFormulario(): void
  {
    const pessoa : Pessoa = this.formulario.value;
    if(!pessoa.nome || !pessoa.sobreNome || !pessoa.profissao || !pessoa.idade){
      alert("favor preencher os campos");
      return
    }
    if(pessoa.pessoaId > 0)
    {
      this.pessoasService.atualizarPessoa(pessoa).subscribe(resultado => {
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
        alert("pessoa atualizado(a) com sucesso");
        this.pessoasService.pegartodos().subscribe(registros => {
          this.pessoas = registros;
        });
      });
    }
    else
    {
       this.pessoasService.salvarPessoa(pessoa).subscribe(resultado => {
        this.visibilidadeTabela = true;
        this.visibilidadeFormulario = false;
        alert("pessoa inserido(a) com sucesso");
        this.pessoasService.pegartodos().subscribe(registros => {
          this.pessoas = registros;
        });
      });
    };
  }

    ExibirFormularioAtualizacao(pessoaId): void
    {
      this.visibilidadeTabela = false;
      this.visibilidadeFormulario = true;

      this.pessoasService.pegarPeloId(pessoaId).subscribe(resultado =>{
        this.tituloFormulario = `Atualizar ${resultado.nome} ${resultado.sobreNome}`;

        this.formulario = new FormGroup({
          pessoaId: new FormControl(resultado.pessoaId),
          nome: new FormControl(resultado.nome),
          sobreNome: new FormControl(resultado.sobreNome),
          idade: new FormControl(resultado.idade),
          profissao: new FormControl(resultado.profissao)
        });
      });
    }

    Voltar(): void
    {
      this.visibilidadeTabela = true;
      this.visibilidadeFormulario = false;
    }

    Excluir(pessoaId): void {

      this.pessoasService.excluirPessoa(pessoaId).subscribe(resultado => {
        window.location.reload();
      })
    }
  }

