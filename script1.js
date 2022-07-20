class Produtos{
    constructor(){
        this.id=1
        this.arrayProdutos=[]
    }

    salvar(){
       let produto = this.lerDados()
       if(this.isEmpty(produto)){
        this.adicionaArray(produto)
        console.log(this.arrayProdutos)
       }
    }

    adicionaArray(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados(){
        let produto = {}

        produto.id=this.id
        produto.nomeProduto=document.getElementById("nome-produto").value
        produto.valorProduto=document.getElementById("valor-produto").value

        return produto;
    }

    isEmpty(produto){
        let msg = ""
        if(produto.nomeProduto == ""){
            msg+= "Informe o nome do produto!\n"
        }
        if(produto.valorProduto == ""){
            msg+= "Informe o preço do produto!\n"
        }
        if(msg != ""){
            alert(msg)
            return false
        }
        return true;
    }

    cancelar(){
        
    }
    
    editar(){

    }
}
var produto = new Produtos();
