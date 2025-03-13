
const socket = io()


socket.on("NuevoProducto", (producto) => {
   // alert(`Nuevo producto agregado: ${producto.title} se recargara su vista`)
    window.location.reload()

})