

let notas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        texto: 'mi mama me va a retar si no lo hago',
        realizada: false
    },{
        id: 2,
        titulo: 'Comer',
        texto: 'Quedo comida de ayer',
        realizada: true  
    },{
        id: 3,
        titulo: 'Estudiar eventos',
        texto: 'Estoy flojo de papeles y no voy a aprobar el task 3',
        realizada: false  
    },{
        id: 4,
        titulo: 'Tomar agua',
        texto: 'Debo hidratarme para no desmayarme',
        realizada: true  
    }
];

let idGlobal = 1; 

notas.forEach(nota => {
    nota.id = idGlobal++;
    pintarNotas();
});



function guardarNota() {
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('nota').value;

    if (titulo.trim() === '' || texto.trim() === '') {
        alert('Por favor, ingresa un título y un texto para la nota.');
        return;
    }

    notas.push({ id: ++idGlobal, titulo, texto, realizada: false });
    pintarNotas();
    limpiarCampos();
}

function pintarNotas(notasMostrar = notas) { 
    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';

    notasMostrar.forEach((nota, indice) => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('nota');
        tarjeta.innerHTML = ` 
        <div id= "tarjeta" class="card text-center ">
            <div class="card">
              <div class="card-body">
                  <h3>Nota ${indice + 1}</h3>
                  <div class= "d-flex justify-content-center">
                      <input type="checkbox" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
                        Realizada
                   </div>
                   <h5 class="card-title ${nota.realizada ? 'realizada' : ''}">Titulo: ${nota.titulo}</h5>
                   <p class="card-text ${nota.realizada ? 'realizada' : ''}">Descripcion: ${nota.texto}</p>
                    <button class="btn btn-primary" onclick="borrarNota(${nota.id})">Borrar Nota</button> 
               </div>
            </div>
        </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('nota').value = '';
}

function filtrarPorTexto(notas, texto) {
    if (!texto.trim()) {
        return notas;
    }

    texto = texto.toLowerCase();
    return notas.filter(nota =>
        nota.titulo.toLowerCase().includes(texto) ||
        nota.texto.toLowerCase().includes(texto)
    );
}

function filtrarNotas() {
    let filtroTexto = document.getElementById('filtroTexto').value;
    let notasFiltradas = filtrarPorTexto(notas, filtroTexto);
    
    if (document.getElementById('filtroRealizada').checked) {
        notasFiltradas = notasFiltradas.filter(nota => nota.realizada);
    }

    pintarNotas(notasFiltradas);
}

document.getElementById('guardar').addEventListener('click', guardarNota);
document.getElementById('btnBuscar').addEventListener('click', filtrarNotas);
document.getElementById('filtroRealizada').addEventListener('change', filtrarNotas); 






