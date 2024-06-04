document.addEventListener("DOMContentLoaded", function() {
    const updateForm = document.getElementById('update-form');
  
    updateForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const userIdInput = document.getElementById('userId');
      const nameInput = document.getElementById('name');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password')
  
      if (userIdInput && nameInput && usernameInput && passwordInput ) {
        const userId = userIdInput.value;
        const name = nameInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;
  
        // Realizar la solicitud de actualización al servidor
        fetch(`http://localhost:3000/CRUDRepo/ActualizarPersona/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar la persona');
            }
            return response.json();
        })
        .then(data => {
            // Utilizando SweetAlert2 para mostrar un mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: data.message
            }).then(() => {
                // Redireccionar a otra página, recargar la página, etc.
            });
        })
        .catch(error => {
            console.error('Error al actualizar la persona:', error);
            // Utilizando SweetAlert2 para mostrar un mensaje de error
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Ocurrió un error al intentar actualizar la persona'
            });
        });
      } else {
        console.error('No se pudo encontrar el elemento userId, nombre o edad en el DOM');
        // Utilizando SweetAlert2 para mostrar un mensaje de error
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un error al intentar actualizar la persona'
        });
      }
    });
  });


  