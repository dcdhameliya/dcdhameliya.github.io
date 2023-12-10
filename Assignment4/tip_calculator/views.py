from django.shortcuts import render
from django.views.decorators.http import require_POST


def tip_form(request):
    if request.method == 'POST':
        subtotal = float(request.POST['subtotal'])
        tip_percentage = float(request.POST['tip_percentage'])
        tip_amount = subtotal * (tip_percentage / 100)
        total = subtotal + tip_amount
        return render(request, 'tip_form.html', {'total': total})

    return render(request, 'tip_form.html')
