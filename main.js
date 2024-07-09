$(document).ready(function(){
    $('form').on('submit', function(e){
            e.preventDefault(e)
            const tarefa = $('#tarefa').val()
            const horaTarefa = $('#data-tarefa').val()
            
            if (tarefa.trim() !== '') {
                    const novoTarefa = $(`
                            <li>
                            <span>${tarefa} - ${horaTarefa}</span>
                            <button class='verificar'>Confirmar</button>
                            <button class='limpar'>Limpar</button>
                            </li>
                    `);

                    novoTarefa.appendTo('#lista-tarefas')
                    $('#lista-tarefas').css('border-bottom', '2px solid black')
                    $('.lista').css('visibility', 'visible').css('border', '2px solid black')

                    $('#tarefa').val('')
                    $('#data-tarefa').val('')
            }
    });
            
            $('#lista-tarefas').on('click', '.verificar', function() {
                    $(this).siblings('span').toggleClass('checked')
            })

            $('#lista-tarefas').on('click', '.limpar', function() {
                    $(this).parent().remove()
                    checkListEmpty() // Verifica se a lista está vazia após remover
            })

            $('form').on('reset', function() {
            $('#lista-tarefas').empty()
            $('#lista-tarefas').css('border', 'none')
            checkListEmpty() // Verifica se a lista está vazia após limpar tudo
    })

    // Função para verificar se a lista está vazia e ajustar a visibilidade e bordas
    function checkListEmpty() {
            if ($('#lista-tarefas').children().length === 0) {
                    $('.lista').css('visibility', 'hidden').css('border', 'none')
            }
    }
})