import PyPDF2
import json
import re

title_first_words = [
    'Software',
    'Backend',
    'Data',
    'Senior',
    'Junior',
    'Full-Stack',
    'Full',
]

print('Parsing resume...')
with open('src/assets/files/lakelon_bailey_resume.pdf', 'rb') as fl:
    text = (
        PyPDF2
        .PdfReader(fl)
        .pages[0]
        .extract_text()
        .split('WORK EXPERIENCE')[-1]
        .split('INVOLVEMENT')[0]
        .replace('\n', ' ')
        .replace('\u2019', "'")
    )

    sections = text.split('•')
    sentences = [
        f"{sentence.strip()}."
        for line in sections
        for sentence in re.split(r'(?<!Inc)\. ', line)
        if sentence.strip()
    ]

    company = None
    title = None
    jobs = {}
    for i, line in enumerate(sentences):
        line = line.strip()
        first_word = line.split(' ')[0].strip()
        if first_word in title_first_words:
            title, *_, duration = line.split('   ')
            title, company = title.split(', ', maxsplit=1)
            duration = duration.strip().replace('\u2013', '-')

            position = {
                'title': title.strip(),
                'duration': duration.strip(),
                'notes': []
            }

            company_data = jobs.get(company, {
                'company': company.strip(),
                'positions': []
            })

            company_data['positions'].append(position)
            jobs[company] = company_data

            continue

        for pos in jobs[company]['positions']:
            if pos['title'] == title and pos['duration'] == duration:
                pos['notes'].append(line)
                break

    with open('src/data/jobData.json', 'w') as fl2:
        fl2.write(json.dumps(list(jobs.values()), indent=2))
