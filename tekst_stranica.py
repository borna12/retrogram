from bs4 import BeautifulSoup
import xlsxwriter

workbook = xlsxwriter.Workbook('stranica.xlsx')


fajlovi=['retrogram-appendini-v11-final29.9.2022.xml','retrogram-della_bella-v12 final 27.9.2022.xml', 'retrogram-kasic-v11-final 22.9.2022.xml', 'retrogram-lanosovic-v11 final 22.9.2022.xml','retrogram-mikalja-v18-final 22.9.2022.xml','retrogram-szentmartony-v11-final 22.9. 2022(2).xml','retrogram-tadijanovic-v11-final 22.9.2022.xml','retrogram-voltic-v12-final 22.9.2022(6).xml']  
for fajl in fajlovi:
    worksheet = workbook.add_worksheet(str(fajl)[:31])
    worksheet.write('A1', 'Stranica')
    worksheet.write('B1', 'Tekst')
    with open(fajl, 'r', encoding='utf8') as f:
        file = f.read()
    # 'xml' is the parser used. For html files, which BeautifulSoup is typically used for, it would be 'html.parser'.
    soup = BeautifulSoup(file, 'xml')

    tekst = soup.find('body')
    tekst2=""
    i=2
    broj=1
    for red in tekst:
        if red.name=="p":
            tekst2+=str(red)
        elif red.name=="pb":
            worksheet.write('A'+str(i),red.get("n"))
            if (i>2):
                worksheet.write('B'+str(i-1),tekst2)
                tekst2=""
            i+=1
    worksheet.write('B'+str(i-1),tekst2)       
workbook.close()
