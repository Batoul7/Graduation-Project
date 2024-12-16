/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
               "myprimary-yellow-55":"#FFD11A",
               "myprimary-yellow-60":"#FFD633",
               "myprimary-yellow-70":"#FFE066",
               "myprimary-yellow-80":"#FFEB99",
               "mysecondary-yellow-90":"#FFF5CC",
               "mysecondary-yellow-95":"#FFFAE5",
               "mysecondary-yellow-97":"#FFFCF0",
               "mysecondary-yellow-99":"#FBFBFE",
               "myprimary-dark-08":"#141414",
               "myprimary-dark-10":"#1A1A1A",
            //    "myprimary-dark-15":"#262626", neutral-800
               "myprimary-dark-20":"#333333",
            //    "mysecondary-dark-25" : "#404040", neutral-700
               "mysecondary-dark-30" : "#4D4D4D",
               "mysecondary-dark-35" : "#595959",
               "mysecondary-dark-40" : "#666666",
               "myprimary-gray-50" : "#7E7E81",
               "myprimary-gray-60" : "#98989A",
               "myprimary-gray-70" : "#B3B3B3",
               "myprimary-gray-80" : "#CCCCCC",
               "mysecondary-gray-90" : "#E4E4E7",
               "mysecondary-gray-95" : "#F1F1F3",
               "mysecondary-gray-97" : "#F7F7F8",
               "mysecondary-gray-99" : "##FCFCFD",
               "myborder-dark-color":"#262626"
            },
            spacing : {
                '0.5' : '2px' ,
                '2.5' : '10px' ,
                '4.5' : '18px' ,
                '7.5' : '30px' ,
            },
            padding: {
              'mainpaddinglarge':'162px',
            },
            borderRadius: {
                "rad-10" : "10px",
                "rad-4" : "4px"
            },
            gap: {
                '2.5': '10px',
              },
              screens: {
                'lghero': {'min': '1540px', 'max': '1905px'}, 
                "3xl": "1700px"
              },
              fontSize: {
                "6.5xl" : "70px" ,
                "4.5xl" : "40px" ,
                "1.5xl" : '22px',
                "5.5xl" : '55px'
              },
              fontFamily: {
                "inter": "var(--inter-font)",
                "kumbhSans": "var(--kumbh-font)",
            },
        },
    },
    plugins: [],
}