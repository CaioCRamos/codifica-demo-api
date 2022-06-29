module.exports = class ProductsAdapter {
    toApiResponse(p) {
        return {
            id: p.id,
            nome: p.name,
            img: p.image,
            preco: p.price,
            categoria: p.category,
            descricao: p.description
        }
    }
}