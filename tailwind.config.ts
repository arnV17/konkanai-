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
		fontFamily: {
			sans: ['Yatra One', 'cursive'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				// New design system colors
				main: 'var(--main)',
				overlay: 'var(--overlay)',
				bg: 'var(--bg)',
				bw: 'var(--bw)',
				blank: 'var(--blank)',
				text: 'var(--text)',
				mtext: 'var(--mtext)',
				ringOffset: 'var(--ring-offset)',
				secondaryBlack: '#212121',
				// Konkanai custom colors
				forest: {
					500: '#2D5016',
					600: '#234010'
				},
				ocean: {
					500: '#1E4A72',
					600: '#1A3F63'
				},
				sunset: {
					500: '#FF6B35',
					600: '#E55A2B'
				},
				golden: {
					500: '#FFB627',
					600: '#E5A320'
				},
				terracotta: {
					500: '#C65D07',
					600: '#B35206'
				},
				cream: {
					500: '#F5F5DC',
					600: '#EBEBD0'
				},
				beige: {
					500: '#F7F3E9',
					600: '#EFEADD'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				base: '5px'
			},
			boxShadow: {
				shadow: 'var(--shadow)'
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '-4px',
			},
			fontWeight: {
				base: '500',
				heading: '700',
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
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'bird-fly': {
					'0%, 100%': {
						transform: 'translateX(0) translateY(0)'
					},
					'25%': {
						transform: 'translateX(20px) translateY(-10px)'
					},
					'50%': {
						transform: 'translateX(40px) translateY(0)'
					},
					'75%': {
						transform: 'translateX(20px) translateY(10px)'
					}
				},
				'tree-sway': {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(2deg)'
					}
				},
				'firefly': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'cloud-drift': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100vw)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bird-fly': 'bird-fly 8s ease-in-out infinite',
				'tree-sway': 'tree-sway 4s ease-in-out infinite',
				'firefly': 'firefly 3s ease-in-out infinite',
				'cloud-drift': 'cloud-drift 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
