const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name})
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo);
    }) 
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");


inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoArquivo.url;
            nomeDaImagem.textContent = conteudoArquivo.nome;
        } catch (erro) {
            console.error("Erro na Leitura do arquivo");

        }
    }
})
