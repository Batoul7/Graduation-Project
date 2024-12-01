/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "myprimary-yellow-55": "#FFD11A",
                "myprimary-yellow-60": "#FFD633",
                "myprimary-yellow-70": "#FFE066",
                "myprimary-yellow-80": "#FFEB99",
                "mysecondary-yellow-90": "#FFF5CC",
                "mysecondary-yellow-95": "#FFFAE5",
                "mysecondary-yellow-97": "#FFFCF0",
                "mysecondary-yellow-99": "#FBFBFE",
                "mysecondary-yellow-119": "#FFD119",
                "myprimary-dark-08": "#141414",
                "myprimary-dark-10": "#1A1A1A",
                //    "myprimary-dark-15":"#262626", neutral-800
                "myprimary-dark-20": "#333333",
                //    "mysecondary-dark-25" : "#404040", neutral-700
                "mysecondary-dark-30": "#4D4D4D",
                "mysecondary-dark-35": "#595959",
                "mysecondary-dark-40": "#666666",
                "myprimary-gray-50": "#7E7E81",
                "myprimary-gray-60": "#98989A",
                "myprimary-gray-70": "#B3B3B3",
                "myprimary-gray-80": "#CCCCCC",
                "mysecondary-gray-90": "#E4E4E7",
                "mysecondary-gray-95": "#F1F1F3",
                "mysecondary-gray-97": "#F7F7F8",
                "mysecondary-gray-99": "##FCFCFD",
            },
            spacing: {
                "7.5": "30px",
                "3.5": "14px",
                '137': '137px',
                '55': '55px',
                '162': '162px',
                '67': '67px',
                '18': '18px',
                '3.55': '3.5px',
                'footerline': '11px',
                '58': '58px',
                '22': '22px',
                '46': '46px',
                '35': '35px',
                '50': '50px',
                '125': '125.23px',
                '143': '134.13px',
                "178": '178.91px',
                '103': '103px',
                '41': '41px',
            },
            borderRadius: {
                "rad-10": "10px"
            },
            spacing : {
                '0.5' : '2px' ,
                '2.5' : '10px' ,
                '4.5' : '18px' ,
                '13' : '50px' ,
                '37' : '150px' ,
                '25' : '100px' ,
                '41' : '170px' ,
                '85.8' : '350px' ,
                '38.9' : '189px' ,
            },
            padding: {
              'mainpaddinglarge':'162px',
              'mainpaddingmedium':'80px',
              'mainpaddingsmall':'16px',
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
              },
              width :{
                '2.5/4' : '59.09%' ,
                '4.5/12' : '40.91%' ,
                '73' : '297.67px' ,
                '82' : '347px' ,
                '53' : '218px' ,
                '43' : '174px' ,
                '3.5/5':'79%'
              },
              fontSize: {
                "6.5xl" : "70px" ,
                "4.5xl" : "40px" ,
                "1.5xl" : '22px',
                "5.5xl" : '55px'
              },
              lineHeight: {
                '12': '84px',
                '11': '60px',
                '11.5': '66px',
                '6.5' : '27px',
                '6.7' : '21.6px',
                '6.8' : '26.4px',
                '5.5' : '24px',
                '10.5' : '45px',
                '7.5' : '30px',
              },
              fontFamily: {
                "inter": "var(--inter-font)",
                "kumbhSans": "var(--kumbh-font)",
            },
        },
    },
    plugins: [],
}