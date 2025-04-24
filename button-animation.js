// Função para criar a animação do botão "Baixar Launcher"
document.addEventListener('DOMContentLoaded', function () {
    // Encontrar o botão "Baixar Launcher"
    const launcherButton = document.querySelector('.minecraft-info .cta-button');

    if (launcherButton) {
        // Adicionar classe para o botão animado
        launcherButton.classList.add('animated-button');

        // Criar elementos de sparkle (brilhos)
        const createSparkles = () => {
            // Número de sparkles a serem criados
            const sparkleCount = 20;

            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';

                // Posicionar aleatoriamente dentro do botão
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                sparkle.style.left = `${x}%`;
                sparkle.style.top = `${y}%`;

                launcherButton.appendChild(sparkle);
            }
        };

        // Criar gradientes animados nas bordas
        const createGradientBorders = () => {
            // Criar elemento para o gradiente superior
            const topGradient = document.createElement('div');
            topGradient.className = 'gradient-border top-gradient';

            // Criar elemento para o gradiente inferior
            const bottomGradient = document.createElement('div');
            bottomGradient.className = 'gradient-border bottom-gradient';

            // Criar elemento para o gradiente esquerdo
            const leftGradient = document.createElement('div');
            leftGradient.className = 'gradient-border left-gradient';

            // Criar elemento para o gradiente direito
            const rightGradient = document.createElement('div');
            rightGradient.className = 'gradient-border right-gradient';

            // Adicionar gradientes ao botão
            launcherButton.appendChild(topGradient);
            launcherButton.appendChild(bottomGradient);
            launcherButton.appendChild(leftGradient);
            launcherButton.appendChild(rightGradient);
        };

        // Inicializar elementos visuais
        createSparkles();
        createGradientBorders();

        // Função para animar os sparkles
        const animateSparkles = () => {
            const sparkles = launcherButton.querySelectorAll('.sparkle');

            sparkles.forEach((sparkle, index) => {
                // Atraso baseado no índice para criar efeito cascata
                const delay = index * 200;

                // Animar cada sparkle
                setTimeout(() => {
                    sparkle.style.animation = 'sparkleAnimation 1.5s ease-in-out';

                    // Remover animação após conclusão para permitir repetição
                    sparkle.addEventListener('animationend', () => {
                        sparkle.style.animation = '';

                        // Reposicionar para próxima animação
                        const newX = Math.random() * 100;
                        const newY = Math.random() * 100;
                        sparkle.style.left = `${newX}%`;
                        sparkle.style.top = `${newY}%`;
                    });
                }, delay);
            });
        };

        // Função para animar os gradientes
        const animateGradients = () => {
            const gradients = launcherButton.querySelectorAll('.gradient-border');

            gradients.forEach((gradient, index) => {
                // Atraso baseado no índice para criar efeito sequencial
                const delay = index * 300;

                // Animar cada gradiente
                setTimeout(() => {
                    gradient.style.animation = 'gradientAnimation 2s ease-in-out';

                    // Remover animação após conclusão para permitir repetição
                    gradient.addEventListener('animationend', () => {
                        gradient.style.animation = '';
                    });
                }, delay);
            });
        };

        // Iniciar animações quando o mouse passar sobre o botão
        launcherButton.addEventListener('mouseenter', () => {
            animateSparkles();
            animateGradients();
        });

        // Também iniciar animações periodicamente para chamar atenção
        setInterval(() => {
            if (!launcherButton.matches(':hover')) {
                animateSparkles();
                animateGradients();
            }
        }, 5000);
    }
});
