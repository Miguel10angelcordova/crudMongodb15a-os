
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")
  
    
    if (typeof bootstrap === "undefined") {
      console.error("Bootstrap is not loaded. Make sure bootstrap.bundle.min.js is included before this script.")
      return
    }
  
    
    const modalElement = document.getElementById("modalinvitado")
    if (!modalElement) {
      console.error('Modal element with ID "modalinvitado" not found.')
      return
    }
  
    console.log("Modal element found:", modalElement)
  
    
    const modalInvitado = new bootstrap.Modal(modalElement)
    console.log("Modal initialized")
  
    
    const botonesEditar = document.querySelectorAll(".btnEditar")
    console.log("Encontrados", botonesEditar.length, "botones de editar")
  
    
    botonesEditar.forEach((boton) => {
      boton.addEventListener("click", function (e) {
        console.log("Botón de editar clickeado")
  
        const fila = this.closest("tr")
        if (!fila) {
          console.error("No se pudo encontrar la fila padre")
          return
        }
  
        console.log("Fila encontrada:", fila)
  
      
        const id = fila.cells[0].textContent
        const nombre = fila.cells[1].textContent
        const numero = fila.cells[2].textContent
        const edad = fila.cells[3].textContent
  
        console.log("Datos de la fila:", { id, nombre, numero, edad })
  
        
        document.getElementById("id_editar").value = id
        document.getElementById("nombre_editar").value = nombre
        document.getElementById("numero_editar").value = numero
        document.getElementById("edad_editar").value = edad
  
        console.log("Datos del modal establecidos, mostrando modal")
  
        
        modalInvitado.show()
      })
    })
  
    
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btnEditar") || e.target.closest(".btnEditar")) {
        console.log("Botón de editar clickeado vía delegación")
  
        const boton = e.target.classList.contains("btnEditar") ? e.target : e.target.closest(".btnEditar")
        const fila = boton.closest("tr")
  
        if (!fila) {
          console.error("No se pudo encontrar la fila padre")
          return
        }
  
        
        const id = fila.cells[0].textContent
        const nombre = fila.cells[1].textContent
        const numero = fila.cells[2].textContent
        const edad = fila.cells[3].textContent
  
        
        document.getElementById("id_editar").value = id
        document.getElementById("nombre_editar").value = nombre
        document.getElementById("numero_editar").value = numero
        document.getElementById("edad_editar").value = edad
  
        
        modalInvitado.show()
      }
    })
  })
  
  