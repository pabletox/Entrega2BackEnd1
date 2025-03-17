const form = document.getElementById('productForm');
const socket = io();

socket.on("NuevoProducto", (producto) => {
    window.location.reload();
});

socket.on("ProductoEliminado", (id) => {
    window.location.reload();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const product = {
        title: formData.get('title'),
        description: formData.get('description'),
        code: formData.get('code'),
        price: parseFloat(formData.get('price')),
        status: formData.get('status') === 'on',
        stock: parseInt(formData.get('stock'), 10),
        category: formData.get('category'),
        thumbnails: formData.get('thumbnails')
    };

    const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });

    if (response.ok) {
        const result = await response.json();
        socket.emit('NuevoProducto', result.product);
        form.reset();
    } else {
        console.error('Error al agregar el producto');
    }
});

async function deleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const result = await response.json();
        console.log('Producto eliminado:', result);
        socket.emit('ProductoEliminado', id);
    } else {
        console.error('Error al eliminar el producto');
    }
}