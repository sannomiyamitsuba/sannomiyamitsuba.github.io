document.addEventListener('DOMContentLoaded', function() {
    fetchData(); 
});

function fetchData() {
    fetch('https://script.google.com/macros/s/AKfycbwzX4fH8HyDcbwo8LKSj9GFKVypos6P1GN6y3J2TAlrGWc73zbadRj_5VbgSQ6xiBsS/exec')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

function displayData(data) {
    var container = document.getElementById('data-container');
    var table = '<table>';

    data.forEach(function(row) {
        table += `<tr>
                    <td>${row['順位'] || ''}</td>
                    <td>${row['番号']}</td>
                    <td>${row['スコア']}</td>
                  </tr>`;
    });

    table += '</table>';
    container.innerHTML = table;
}
