
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tech: {
					blue: '#00D2FF',
					purple: '#8A2BE2',
					green: '#00FF88',
					orange: '#FF6B35',
					red: '#FF3366',
					cyan: '#00FFFF',
					pink: '#FF00FF',
					gold: '#FFD700'
				}
			},
			backgroundImage: {
				'tech-gradient': 'linear-gradient(135deg, #00D2FF 0%, #8A2BE2 50%, #00FF88 100%)',
				'hero-gradient': 'radial-gradient(ellipse at center, #1e3c72 0%, #2a5298 50%, #0f0f23 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(0,210,255,0.1) 0%, rgba(138,43,226,0.1) 50%, rgba(0,255,136,0.1) 100%)',
				'matrix-bg': 'linear-gradient(180deg, transparent 0%, rgba(0,210,255,0.05) 50%, transparent 100%)',
				'code-bg': 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(26,26,46,0.9) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 210, 255, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 210, 255, 0.6), 0 0 60px rgba(138, 43, 226, 0.4)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'25%': {
						backgroundPosition: '100% 50%'
					},
					'50%': {
						backgroundPosition: '200% 50%'
					},
					'75%': {
						backgroundPosition: '100% 50%'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-10px) rotate(1deg)'
					},
					'66%': {
						transform: 'translateY(-5px) rotate(-1deg)'
					}
				},
				'matrix-rain': {
					'0%': {
						transform: 'translateY(-100vh)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'code-typing': {
					'0%, 50%': {
						borderRight: '2px solid rgba(0, 210, 255, 1)'
					},
					'51%, 100%': {
						borderRight: '2px solid transparent'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 5s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 10s linear infinite',
				'code-typing': 'code-typing 2s steps(20) infinite'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(0, 210, 255, 0.5), 0 0 10px rgba(0, 210, 255, 0.5), 0 0 15px rgba(0, 210, 255, 0.5)',
				'neon-purple': '0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.5), 0 0 15px rgba(138, 43, 226, 0.5)',
				'neon-green': '0 0 5px rgba(0, 255, 136, 0.5), 0 0 10px rgba(0, 255, 136, 0.5), 0 0 15px rgba(0, 255, 136, 0.5)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
