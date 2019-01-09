
var list = [];

function addElementToList(elementToAdd) {
    var numberToAdd = Number(elementToAdd)

    if (numberToAdd != '') {
        list.push(numberToAdd);
        $("#listContent").append(`<span id="${numberToAdd}">${numberToAdd} </span>`)
    } else {
        console.log('Introduceti un numer!')
    }

}

function clearList() {
    $("#listContent").empty();
    $('#searchResult').html('');
    $('#addElementTolist').val('');
    $('#searchElementLinear').val('');
    $('#searchElementBinary').val('');
    list.length = 0;
}

function linearSearch(elementToSearchLinear) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] == elementToSearchLinear) {
           return $('#searchResult').html(`Elementul ${elementToSearchLinear} a fost gasit pe pozitia ${i}.`)
        }
    }
   return $('#searchResult').html(`Elementul ${elementToSearchLinear} nu a fost gasit in lista.`)
}

function binarySearch(elementToSearchBinary) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (list[mid] == elementToSearchBinary) {
            return $('#searchResult').html(`Elementul ${elementToSearchBinary} a fost gasit pe pozitia ${mid}.`);
        }
        if (list[mid] < elementToSearchBinary) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return $('#searchResult').html(`Elementul ${elementToSearchBinary} nu a fost gasit in lista.`);
}





