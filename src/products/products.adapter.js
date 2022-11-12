module.exports = class ProductsAdapter {
    constructor(source) {
        this.source = source;
    }

    toApiResponse(p) {
        return {
            id: p.id,
            nome: p.nome,
            img: !p.img ? `https://codifica-demo-api.herokuapp.com/api/v2/${this.source}/products/${p.id}/image` : p.img,
            img2: p.img2,
            preco: p.preco,
            categoria: p.categoria,
            descricao: p.descricao,
            tamanho: p.tamanho,
        }
    }
}