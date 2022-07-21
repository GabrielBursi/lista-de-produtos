class Produtos{
    constructor(){
        this.id=1
        this.arrayProdutos=[]
    }

    salvar(){
       let produto = this.lerDados()
       if(this.isEmpty(produto)){
        this.adicionaArray(produto)
       }
       this.listaTabela()
    }

    listaTabela(){
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = ""

        for(let i=0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = this.arrayProdutos[i].valorProduto
            
            let iconEdit = document.createElement('img')
            iconEdit.src = "https://cdn-icons.flaticon.com/png/512/4103/premium/4103111.png?token=exp=1658266431~hmac=c65e680c4bf9158bc9236efe33f1d888"

            let iconDel = document.createElement("img")
            iconDel.src = "https://cdn-icons.flaticon.com/png/512/3138/premium/3138336.png?token=exp=1658266390~hmac=eef2d7e07c0cc951f99482e2d1c25756"

            td_acoes.appendChild(iconEdit)
            td_acoes.appendChild(iconDel)
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
