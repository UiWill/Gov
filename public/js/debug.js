// Arquivo de depuração para identificar problemas com o menu de navegação
console.log('Debug.js carregado');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado completamente');
    
    // Verificar se o menu de navegação existe
    const mainNavbar = document.getElementById('main-navbar');
    console.log('Menu de navegação:', mainNavbar);
    
    // Verificar se o formulário de login existe
    const loginForm = document.getElementById('login-form');
    console.log('Formulário de login:', loginForm);
    
    // Adicionar um manipulador de evento para o formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulário de login enviado');
            
            // Mostrar o menu de navegação
            if (mainNavbar) {
                mainNavbar.classList.remove('d-none');
                console.log('Menu de navegação deve estar visível agora');
                
                // Verificar se o menu está visível
                setTimeout(function() {
                    console.log('Classe d-none presente no menu?', mainNavbar.classList.contains('d-none'));
                    console.log('Estilo de exibição do menu:', window.getComputedStyle(mainNavbar).display);
                }, 100);
            } else {
                console.error('Menu de navegação não encontrado');
            }
        });
    } else {
        console.error('Formulário de login não encontrado');
    }
}); 