from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse
from .models import *
from newsdataapi import NewsDataApiClient
import datetime

def index(request):
    return render(request, "main/index.html")
    
@csrf_exempt
def content(request, level, year, field):
    level = Level.objects.get(code=level)
    year = Year.objects.get(code=year)
    field = Field.objects.get(code=field)
    
    data = []
    books = []
    exercices = []
    exams = []
    for b in Book.objects.filter(level=level, year=year, field=field):
        temp = dict()
        temp['title'] = b.title
        temp['cover'] = b.cover.name
        temp['level'] = b.level.name
        temp['year'] = b.year.name
        temp['field'] = b.field.name
        temp['file'] = b.file.name
        if b.branch:
            temp['branch'] = b.branch.name
        books.append(temp)
        
    ex_books = set([ex.book for ex in Exercice.objects.filter(level=level, year=year, field=field)])
    for book in ex_books:
        temp = dict()
        temp['book'] = book
        temp['data'] = []
        for ex in Exercice.objects.filter(level=level, year=year, field=field, book=book):
            tmp_data = dict()
            tmp_data['title'] = ex.title
            temp['data'].append(tmp_data)
        exercices.append(temp)
        
    for em in ExamPaper.objects.filter(level=level, year=year, field=field):
        temp = dict()
        temp['title'] = em.title
        contentImgs = list(ExamImg.objects.filter(exam_obj=em, isContent=True))
        solutionImgs = list(ExamImg.objects.filter(exam_obj=em, isSolution=True))
        temp['content'] = []
        temp['solution'] = []
        for i in range(len(contentImgs)):
            temp['content'].append(contentImgs[i].img.name)
        for i in range(len(solutionImgs)):
            temp['solution'].append(solutionImgs[i].img.name)
        
        exams.append(temp)        
    data.append(books)
    data.append(exercices)
    data.append(exams)
    return JsonResponse(data, safe=False)
    
@csrf_exempt
def news(request):
    data = []
    if not News.objects.filter(pubDate=datetime.date.today()):
        api = NewsDataApiClient(apikey="pub_34931435791cfa2f671101e9b5f90ee9314b4")
        response = api.news_api(country = 'dz', language="ar")
        results = response['results']
        for res in results:
            y = int(res['pubDate'][:4])
            m = int(res['pubDate'][5:7])
            d = int(res['pubDate'][8:10])
            pubDate = datetime.datetime(y, m, d)
            News.objects.create(title=res['title'], link=res['link'], pubDate=pubDate)
            data.append([res['title'], res['link']])
    else:
        news = list(News.objects.filter(pubDate=datetime.date.today())) + list(News.objects.filter(pubDate=(datetime.date.today() - datetime.timedelta(days=1))))
        for obj in news[:10]:
            data.append([obj.title, obj.link])
    return JsonResponse(data, safe=False)