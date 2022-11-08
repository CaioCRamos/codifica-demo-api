module.exports = class ProductsAdapter {
    constructor(source) {
        this.source = source;
    }

    toApiResponse(p) {
        return {
            id: p.id,
            nome: p.nome,
            img: `https://codifica-demo-api.herokuapp.com/api/v2/${this.source}/products/${p.id}/image`,
            preco: p.preco,
            categoria: p.categoria,
            descricao: p.descricao
        }
    }
}