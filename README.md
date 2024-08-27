# Decodificador de textos!

Esse projeto foi um desafio do curso **One-Oracle** de introdução a programação. Utilizando JavaScript, HTML e CSS foi feito um decodificador de textos. 

O projeto final pode ser acessa através desse **[desse link](https://lucauns.github.io/decodificador-de-texto/)**

As regras da criptografia eram as seguintes:

`A letra "e" é convertida para "enter"`  
`A letra "i" é convertida para "imes"`  
`A letra "a" é convertida para "ai"`  
`A letra "o" é convertida para "ober"`  
`A letra "u" é convertida para "ufat"`

Para a criptografia foi feita uma função que percorria cada letra do texto de entrada, substituindo as letras quando necessárias e armazenando em uma variável de saída.

Para a descriptografia foi criada uma função parecida, porém ao invés de verificar letra a letra era verificado por uma quantidade conforme a saída. Por exemplo, para a letra "e" é verificado conjuntos de cinco caracteres em busca de "enter" para realizar a troca. 
