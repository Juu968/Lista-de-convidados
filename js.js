var Nomedaspessoas = [];
function enviar ()
{
    var NomeConvidado = document.getElementById("nome1").value;
    Nomedaspessoas.push(NomeConvidado);
    var ComprimentoDoNome = Nomedaspessoas.lenght;
    document.getElementById("NomeEmExibiçao").innerHTML=Nomedaspessoas.toString();
}
function organizar()
{
Nomedaspessoas.sort();
var i= Nomedaspessoas.join("<br>");
document.getElementById("sorted").innnerHTML=i.toString();
}
function mostrar()
{
var i= Nomedaspessoas.join("<br>");
console.log(Nomedaspessoas);
document.getElementById("p1").innerHTML=i.toString()
document.getElementById("sortButton").style.display="block";
}
function pesquisar()
{
    var s = document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<Nomedaspessoas.lenght; j++)
    {
        if(s==Nomedaspessoas[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="nome encontrado"+found+"vez(es)";
    
}




