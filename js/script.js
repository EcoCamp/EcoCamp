class BlackBoard {
    constructor(){
        this.listaNomes=[];
        this.nome;
    }

    gerarRA(){ 
        var ra="";
        for(let i=0; i<8; i++){
        var raN = Number(Math.floor(Math.random().toString() * 10));
        var ra = ra+raN;
    }
    return ra
    }

    pegarNome(i){

        this.nome=document.getElementById("nomeCaminho").innerText = this.listaNomes[i];
        this.salvar()
        window.location.href="atividades.html"
    }

    salvar(){
        localStorage.clear();
        let nomeSave = JSON.stringify(this.nome);

        if (this.nome != null || this.nome != undefined) {
            localStorage.setItem("nomeSave", nomeSave);
        }

    }

    carregar(){
        if(document.getElementById("nomeCaminho")){
        let nomeSave = JSON.parse(localStorage.getItem("nomeSave"));              
            if(nomeSave != null && nomeSave != "") {
                this.nome = nomeSave;
                document.getElementById("nomeCaminho").innerHTML = nomeSave;
            }      
        }
    } 

    criarTabela(){
        this.carregar()
        if(document.getElementById("tabela")){
        document.getElementById('tabela').innerHTML += `
        <div class="linha-principal ativo">
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
            <p onclick="blackBoard.pegarNome(${i})" class="cursor-pointer">${this.listaNomes[i]}</p>
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




}
let blackBoard = new BlackBoard;

blackBoard.listaNomes = ["Ana Júlia Marcílio do Amaral","Bruno de Almeida Santos","Charlie brown Junior","Diogo de Avilar Farias","Eduardo Conceição da Silva","Felipe Massa","George Lucas","Helena Sanches Junior", "Ivete Sem Galo", "Juliana Couto Paes", "Keanu Charles Reeves","Leonardo DiCaprio","Michael Jordan","Natalie Portman","Oswaldo Gonçalves Cruz","Peter Robert Jackson","Quentin Tarantino","Robert Downey Jr.","Steve Jobs","Tom Hanks","Usain Bolt","Vincent van Gogh", "Will Smith","Xuxa Meneghel"];

blackBoard.criarTabela();
blackBoard.carregar();