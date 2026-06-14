document.addEventListener('DOMContentLoaded', () => {
  // Interação obrigatória: Botão que revela curiosidade secreta
  const revealBtn = document.getElementById('revealBtn');
  const secretCuriosity = document.getElementById('secretCuriosity');
  let isRevealed = false;

  if (revealBtn && secretCuriosity) {
    revealBtn.addEventListener('click', () => {
      if (!isRevealed) {
        secretCuriosity.style.display = 'flex';
        revealBtn.querySelector('.btn-text').textContent = 'SEGREDO_REVELADO.exe';
        revealBtn.style.background = 'linear-gradient(135deg, #00ff41, #00ffff)';
        isRevealed = true;
        
        // Scroll suave até a curiosidade revelada
        setTimeout(() => {
          secretCuriosity.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        secretCuriosity.style.display = 'none';
        revealBtn.querySelector('.btn-text').textContent = 'DESBLOQUEAR_SEGREDO.exe';
        revealBtn.style.background = 'linear-gradient(135deg, #ff00ff, #00ffff)';
        isRevealed = false;
      }
    });
  }

  // Efeito de terminal typing no título (opcional, mas melhora UX)
  const glitchText = document.querySelector('.glitch-text');
  if (glitchText) {
    const originalText = glitchText.textContent;
    glitchText.setAttribute('data-text', originalText);
    
    // Efeito glitch aleatório no hover
    glitchText.addEventListener('mouseenter', () => {
      let iterations = 0;
      const maxIterations = 3;
      
      const glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
          .split('')
          .map((char, index) => {
            if (index < iterations) return originalText[index];
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          })
          .join('');
        
        iterations += 1/3;
        
        if (iterations >= originalText.length) {
          clearInterval(glitchInterval);
          glitchText.textContent = originalText;
        }
      }, 30);
    });
  }

  // Smooth reveal para seções ao scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-panel').forEach(section => {
    sectionObserver.observe(section);
  });

  // Efeito parallax sutil no background (performance otimizada)
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = `${scrolled * 0.3}px`;
        ticking = false;
      });
      ticking = true;
    }
  });

  // Console easter egg
  console.log('%c🎮 SISTEMA INICIADO', 'color: #00ffff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
  console.log('%cVocê encontrou um easter egg! Desenvolvedor curioso detectado.', 'color: #ff00ff; font-size: 14px;');
  console.log('%cDigite reveal() no console para desbloquear algo especial...', 'color: #00ff41; font-size: 12px;');
  
  window.reveal = () => {
    console.log('%c✨ ACESSO CONCEDIDO ✨', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cMensagem secreta: Continue explorando, criando e nunca pare de aprender!', 'color: #00ffff; font-size: 14px;');
    
    if (secretCuriosity && !isRevealed) {
      secretCuriosity.style.display = 'flex';
      revealBtn.querySelector('.btn-text').textContent = 'SEGREDO_REVELADO.exe';
      revealBtn.style.background = 'linear-gradient(135deg, #00ff41, #00ffff)';
      isRevealed = true;
      secretCuriosity.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
});
