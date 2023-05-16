from bs4 import BeautifulSoup
import xlsxwriter
import os, glob

workbook = xlsxwriter.Workbook('retrogram_listanje.xlsx')

adresa="/".join(os.getcwd().split(os.sep))

for fajl in glob.glob(os.path .join(adresa, '*.xml')):
    worksheet = workbook.add_worksheet(str(fajl.split('\\')[-1])[:31])
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
                worksheet.write('B'+str(i-1),tekst2.replace("'","’"))
                tekst2=""
            i+=1
    worksheet.write('B'+str(i-1),tekst2)       
workbook.close()
