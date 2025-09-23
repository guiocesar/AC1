import { Component } from '@angular/core';
//Importamos duas bibliotecas
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



export interface Post{
  titulo: string;
  autor: string;
  dataPublicacao: Date;
  conteudo: string,
  curtidas: number;
  comentarios: string[];
  novoComentario: string;
}

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule, FormsModule,
  ], //Adicionei no import
  templateUrl: './blog-component.html',
  styleUrls: ['./blog-component.css']

})

export class BlogComponent {
  posts: Post[] = [
    {
      titulo: 'Meu Primeiro Jogo',
      autor: 'João Lucas',
      dataPublicacao: new Date(2025,8,15),
      conteudo: 'Meu primeiro jogo foi Super Mario World de NES e o de vocês',
      curtidas: 0,
      comentarios: [],
      novoComentario:''
    },
    {
      titulo: 'Me ajudem a fazer a Atividade de Java',
      autor: 'Jessica',
      dataPublicacao: new Date(2025,8,15),
      conteudo: 'Está dando error no meu código de Java de String tem alguém que pode me ajudar?',
      curtidas: 0,
      comentarios: [],
      novoComentario:''
    },
    {
      titulo: 'Qual é o melhor pais para viajar?',
      autor: 'Claudio',
      dataPublicacao: new Date(2025,8,15),
      conteudo: 'Estou em dúvida de viajar entre a França e a Holanda, alguém pode me ajudar nessa decisão?',
      curtidas: 0,
      comentarios: [],
      novoComentario:''
    }
  ];

  curtirPost(post: Post): void{
    post.curtidas++;
  }

  adicionarComentario(post: Post): void{
    if(post.novoComentario.trim()){
      post.comentarios.push(post.novoComentario);
      post.novoComentario='';
    }
  }
}