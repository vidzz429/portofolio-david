tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
            },
            colors: {
                brand: {
                    50: '#ecfeff',
                    100: '#cffaff',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    900: '#164e63',
                },
                emeraldAccent: {
                    400: '#34d399',
                    500: '#10b981',
                }
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.03)' },
                }
            }
        }
    }
};