/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Calm Palette
                primary: {
                    50: '#F0F7FA',
                    100: '#E1EFF5',
                    200: '#C2DFEB',
                    300: '#A3CFE0',
                    400: '#85BFD6',
                    500: '#3A7CA5', // Base
                    600: '#2E6384',
                    700: '#234A63',
                    800: '#173242',
                    900: '#0C1921',
                    950: '#060C11',
                },
                secondary: {
                    50: '#FCFDF9',
                    100: '#F8F9F3',
                    200: '#E5E7DC',
                    300: '#CFCFC4',
                    400: '#B7B8AB',
                    500: '#9C9E89',
                    600: '#828373',
                    700: '#68695E',
                    800: '#4E4F44',
                    900: '#34352D',
                    950: '#191A16',
                },
                neutral: {
                    50: '#F5F7F7',
                    100: '#EBEEF0',
                    200: '#D7DDE0',
                    300: '#C3CCD1',
                    400: '#AFBBC2',
                    500: '#687174', // Base
                    600: '#535A5D',
                    700: '#3E4446',
                    800: '#2A2D2F',
                    900: '#151717',
                    950: '#0A0B0C',
                },
                success: {
                    50: '#F4F9F8',
                    100: '#E9F2F1',
                    200: '#D2E5E2',
                    300: '#BBD8D3',
                    400: '#A4CBC4',
                    500: '#83B5AC', // Base
                    600: '#69918A',
                    700: '#4F6D67',
                    800: '#344845',
                    900: '#1A2422',
                },
                warning: {
                    50: '#FCFBF4',
                    100: '#F9F7E9',
                    200: '#F3EFD2',
                    300: '#EDE7BC',
                    400: '#E7DFA6',
                    500: '#E1BF5A', // Base
                    600: '#B49948',
                    700: '#877336',
                    800: '#5A4C24',
                    900: '#2D2612',
                },
                error: {
                    50: '#FBF6F6',
                    100: '#F7EDEE',
                    200: '#EFDBDC',
                    300: '#E7C9CB',
                    400: '#DFB7B9',
                    500: '#CF7C7E', // Base
                    600: '#A66365',
                    700: '#7C4A4C',
                    800: '#533232',
                    900: '#291919',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                'soft-md': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
                'soft-lg': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
                'soft-xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
                // Clay Shadows
                'clay-card': 'inset -4px -4px 8px 0 rgba(0,0,0,0.02), inset 4px 4px 8px 0 rgba(255,255,255,0.8), 8px 8px 16px 0 rgba(0,0,0,0.06)',
                'clay-btn': 'inset -2px -2px 4px 0 rgba(0,0,0,0.05), inset 2px 2px 4px 0 rgba(255,255,255,0.4), 4px 4px 8px 0 rgba(0,0,0,0.1)',
                'clay-btn-strong': 'inset -2px -2px 4px 0 rgba(0,0,0,0.05), inset 2px 2px 4px 0 rgba(255,255,255,0.4), 4px 4px 8px 0 rgba(0,0,0,0.25)',
                'clay-btn-active': 'inset 2px 2px 4px 0 rgba(0,0,0,0.05), inset -2px -2px 4px 0 rgba(255,255,255,0.4)',
                'clay-input': 'inset 2px 2px 5px 0 rgba(0,0,0,0.05), inset -2px -2px 5px 0 rgba(255,255,255,0.8)',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
            },
            transitionProperty: {
                'height': 'height',
            }
        },
    },
    plugins: [],
}
