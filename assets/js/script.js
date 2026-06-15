document.addEventListener('DOMContentLoaded', () => {
  // Sistema de Abas (Tab Navigation) - Interação obrigatória
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function switchTab(targetTab) {
    // Remove active de todos os botões e painéis
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
    });

    // Adiciona active ao botão e painel selecionados
    const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
    const activePanel = document.getElementById(`${targetTab}-panel`);

    if (activeButton && activePanel) {
      activeButton.classList.add('active');
      activeButton.setAttribute('aria-selected', 'true');
      activePanel.classList.add('active');

      // Scroll suave para o topo do conteúdo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  // Event listeners para os botões de abas
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      switchTab(targetTab);
    });

    // Suporte a navegação por teclado
    button.addEventListener('keydown', (e) => {
      const currentIndex = Array.from(tabButtons).indexOf(button);
      let targetIndex;

      if (e.key === 'ArrowRight') {
        targetIndex = (currentIndex + 1) % tabButtons.length;
        tabButtons[targetIndex].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
        tabButtons[targetIndex].focus();
        e.preventDefault();
      }
    });
  });

  // Botão de Descriptografar Shard - Interação funcional
  const decryptBtn = document.getElementById('decryptBtn');
  const secretShard = document.getElementById('secretShard');
  let isDecrypted = false;

  if (decryptBtn && secretShard) {
    decryptBtn.addEventListener('click', () => {
      if (!isDecrypted) {
        // Efeito de processamento
        decryptBtn.querySelector('.btn-text').textContent = 'DESCRIPTOGRAFANDO...';
        decryptBtn.disabled = true;

        setTimeout(() => {
          // Revela o shard com animação
          secretShard.style.display = 'flex';
          secretShard.style.animation = 'glitchReveal 0.6s ease';
          
          // Atualiza o botão
          decryptBtn.querySelector('.btn-text').textContent = 'SHARD DESBLOQUEADO';
          decryptBtn.style.borderColor = 'var(--cp-cyan)';
          decryptBtn.style.color = 'var(--cp-cyan)';
          decryptBtn.disabled = false;
          isDecrypted = true;

          // Scroll até o shard revelado
          setTimeout(() => {
            secretShard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 200);

          // Efeito typewriter no conteúdo do shard
          typewriterEffect(secretShard.querySelector('p'));
        }, 1500);
      } else {
        // Oculta novamente
        secretShard.style.display = 'none';
        decryptBtn.querySelector('.btn-text').textContent = 'DESCRIPTOGRAFAR SHARD';
        decryptBtn.style.borderColor = 'var(--cp-yellow)';
        decryptBtn.style.color = 'var(--cp-yellow)';
        isDecrypted = false;
      }
    });
  }

  // Efeito Typewriter
  function typewriterEffect(element) {
    const originalText = element.textContent;
    element.textContent = '';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < originalText.length) {
        element.textContent += originalText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
  }

  // Suporte a navegação por teclado no footer (simulação de comandos)
  document.addEventListener('keydown', (e) => {
    // ESC - Volta para primeira aba
    if (e.key === 'Escape') {
      switchTab('sobre');
    }
    
    // Tab - Navega entre abas (quando não em campo de input)
    if (e.key === 'Tab' && e.target === document.body) {
      e.preventDefault();
      const currentActive = document.querySelector('.tab-btn.active');
      const currentIndex = Array.from(tabButtons).indexOf(currentActive);
      const nextIndex = (currentIndex + 1) % tabButtons.length;
      const nextTab = tabButtons[nextIndex].getAttribute('data-tab');
      switchTab(nextTab);
    }
  });

  // Animação de entrada nas skill bars
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill-progress');
        if (progressBar) {
          const targetWidth = progressBar.style.width;
          progressBar.style.width = '0%';
          setTimeout(() => {
            progressBar.style.width = targetWidth;
          }, 100);
        }
        skillObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-node').forEach(node => {
    skillObserver.observe(node);
  });

  // Console easter egg (estilo Cyberpunk)
  console.log('%c╔════════════════════════════════════╗', 'color: #fcee0a; font-weight: bold;');
  console.log('%c║   SISTEMA NETRUNNER INICIALIZADO  ║', 'color: #fcee0a; font-weight: bold;');
  console.log('%c╚════════════════════════════════════╝', 'color: #fcee0a; font-weight: bold;');
  console.log('%c> STATUS: ONLINE', 'color: #00f0ff; font-weight: bold;');
  console.log('%c> PROTOCOLO: ATIVO', 'color: #00f0ff; font-weight: bold;');
  console.log('%c> ACESSO: AUTORIZADO', 'color: #00f0ff; font-weight: bold;');
  console.log('%c', ''); // linha em branco
  console.log('%c[COMANDO DISPONÍVEL]', 'color: #ff0055; font-weight: bold;');
  console.log('%cDigite hackSystem() para executar protocolo especial...', 'color: #8f8f8f;');

  // Função secreta do console
  window.hackSystem = () => {
    console.log('%c', '');
    console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #fcee0a; font-weight: bold;');
    console.log('%c  HACK INICIADO...', 'color: #ff0055; font-weight: bold;');
    console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #fcee0a; font-weight: bold;');
    console.log('%c', '');
    
    setTimeout(() => {
      console.log('%c> Acessando banco de dados...', 'color: #00f0ff;');
    }, 500);
    
    setTimeout(() => {
      console.log('%c> Descriptografando arquivos...', 'color: #00f0ff;');
    }, 1000);
    
    setTimeout(() => {
      console.log('%c> ACESSO CONCEDIDO!', 'color: #00ff41; font-weight: bold; font-size: 14px;');
      console.log('%c', '');
      console.log('%cMensagem secreta desbloqueada:', 'color: #fcee0a; font-weight: bold;');
      console.log('%c"Continue criando, aprendendo e explorando. O futuro é construído por aqueles que ousam imaginar."', 'color: #00f0ff; font-style: italic;');
      console.log('%c', '');
      
      // Desbloqueia o shard automaticamente
      if (secretShard && !isDecrypted) {
        switchTab('curiosidades');
        setTimeout(() => {
          decryptBtn.click();
        }, 500);
      }
    }, 1500);
  };

  // Efeito de glitch aleatório no nome do perfil
  const profileName = document.querySelector('.profile-name');
  if (profileName) {
    const originalName = profileName.textContent;
    
    setInterval(() => {
      if (Math.random() > 0.95) { // 5% de chance a cada 3 segundos
        const glitchChars = '◆◇◈◉○◌◍◎●';
        let glitchedName = originalName.split('').map((char, index) => {
          if (Math.random() > 0.7 && char !== ' ') {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join('');
        
        profileName.textContent = glitchedName;
        
        setTimeout(() => {
          profileName.textContent = originalName;
        }, 100);
      }
    }, 3000);
  }
});
