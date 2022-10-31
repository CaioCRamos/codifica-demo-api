module.exports = class ProductsAdapter {
    toApiResponse(p) {
        return {
            id: p.id,
            nome: p.name,
            img: `https://codifica-demo-api.herokuapp.com/api/v1/products/${p.id}/image`,
            preco: p.price,
            categoria: p.category,
            descricao: p.description
        }
    }
}