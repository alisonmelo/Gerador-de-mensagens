const butaoGerar = document.getElementById("gerador");
butaoGerar.addEventListener("click", gerarMensagem)

function gerarMensagem() {
    // gerar a mensagem 
    const frases = [
        "Tá bom, mas não se irrite.",
        "Ninguém tem paciência comigo.",
        "Foi sem querer querendo.",
        "Teria sido melhor ver o filme do Pelé",
        "Volta o cão arrenpido com sua orelhas bem fartas, com o osso ruído e com o rabo entre as patas",
        "Já chegou o disco voador",
        "Isso! Isso! Isso!",
        "Ai que burro da zero pra ele",
        "Sabe qual o animal que come com o rabo? Todos, porque eles não podem tirar o rabo para comer",
        "Pipipipipi",
        "Eu prefiro morrer do que perder a vida.😂",
        "Tudo por causa do Professor Linguiça!",
    ]

    let randomArray = Math.floor(Math.random() * frases.length)
    document.getElementById("pFrases").innerHTML = `"${frases[randomArray]}"`

    // mudar a cor do titulo
    const cores = [
        "#f36",
        "#C3C",
        "#fc0",
        "#FC6",
        "#9C0"
    ];
    let randomColor = Math.floor(Math.random() * cores.length)
    document.getElementById("divFrases").style.backgroundColor = cores[randomColor]

}