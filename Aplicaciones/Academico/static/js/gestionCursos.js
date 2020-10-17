(function () {

    document.getElementById("txtCodigo").focus();

    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿Seguro de eliminar el curso?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });

    const cerrarAlertas = () => {
        setTimeout(function () {
            $(".alert").alert('close');
        }, 2500);
    }

    cerrarAlertas();

})();