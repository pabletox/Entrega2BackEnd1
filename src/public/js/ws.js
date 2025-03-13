
const socket = io()


socket.on("NuevoProducto", (producto) => {
    //console.log(producto)
    alert(`Nuevo producto agregado: ${producto.title}`)

})