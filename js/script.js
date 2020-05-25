class BlackBoard {
    constructor(){
        this.listaNomes=[];
    }

    gerarRA(){ 
        var ra="";
        for(let i=0; i<8; i++){
        var raN = Number(Math.floor(Math.random().toString() * 10));
        var ra = ra+raN;
    }
    return ra
    }

    criarTabela(){
        document.getElementById('tabela').innerHTML += `
        <div class="linha ativo">
        <p>Nº</p>
        <p></p>
        <p>Nome</p>
        <p></p>
        <p>RA</p>
        <p></p>
        <p class="center-h" >N1</p>
        <p></p>
        <p class="center-h" >N2</p>
        <p></p>
        <p class="center-h" >N3</p>
        <p></p>
        <p class="center-h" >N4</p>
        <p></p>
        <p class="center-h" >Média</p>
        </div>`
        for(let i=0; i<this.listaNomes.length; i++){
            document.getElementById('tabela').innerHTML += `<div class="linha"> 
            <p>${i+1}</p> 
            <p class="tracin">-</p>
            <p>${this.listaNomes[i]}</p>
            <p class="tracin">-</p>
            <p>${blackBoard.gerarRA()}</p>
            <p class="tracin">-</p>
            <p class="center-h" >00</p>
            <p class="tracin">-</p>
            <p class="center-h" >00</p>
            <p class="tracin">-</p>
            <p class="center-h" >00</p>
            <p class="tracin">-</p>
            <p class="center-h" >00</p>
            <p class="tracin">-</p>
            <p class="center-h" >00</p>
            </div>`;
        }
    }




}
let blackBoard = new BlackBoard;

blackBoard.listaNomes = ["Ana Júlia Marcílio do Amaral","Bruno de Almeida Santos","Charlie brown Junior","Diogo de Avilar Farias","Eduardo Conceição da Silva","Felipe Massa","George Lucas","Helena Sanches Junior", "Ivete Sem Galo", "Juliana Couto Paes", "Keanu Charles Reeves","Leonardo DiCaprio","Michael Jordan","Natalie Portman","Oswaldo Gonçalves Cruz","Peter Robert Jackson","Quentin Tarantino","Robert Downey Jr.","Steve Jobs","Tom Hanks","Usain Bolt","Vincent van Gogh", "Will Smith","Xuxa Meneghel"];

blackBoard.criarTabela();
