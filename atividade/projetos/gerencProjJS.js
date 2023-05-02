function mostrar(){

    let nome = document.getElementById("nome").value
    let horas = document.getElementById("horas").value
    let final = document.getElementById("boo").value

    const proj = ["Nome: ",nome, " Horas: ", horas," Finalizado: ", final]
    console.log(proj)
    document.getElementById("vetor").innerHTML = proj
}