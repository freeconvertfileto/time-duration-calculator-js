(function() {
    var currentOp = 'add';

    function getSeconds(hId, mId, sId) {
        var h = parseInt(document.getElementById(hId).value, 10) || 0;
        var m = parseInt(document.getElementById(mId).value, 10) || 0;
        var s = parseInt(document.getElementById(sId).value, 10) || 0;
        return h * 3600 + m * 60 + s;
    }

    function fmtHMS(totalSec) {
        var neg = totalSec < 0;
        var abs = Math.abs(totalSec);
        var h = Math.floor(abs / 3600);
        var m = Math.floor((abs % 3600) / 60);
        var s = abs % 60;
        var str = (neg ? '-' : '') +
            pad(h) + 'h ' + pad(m) + 'm ' + pad(s) + 's';
        return str;
    }

    function pad(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function calculate() {
        var s1 = getSeconds('tdH1', 'tdM1', 'tdS1');
        var s2 = getSeconds('tdH2', 'tdM2', 'tdS2');
        var total = (currentOp === 'add') ? (s1 + s2) : (s1 - s2);

        document.getElementById('tdResultHMS').textContent = fmtHMS(total);
        document.getElementById('tdTotalSec').textContent = total;
        document.getElementById('tdTotalMin').textContent = (total / 60).toFixed(4);
        document.getElementById('tdTotalHrs').textContent = (total / 3600).toFixed(6);
    }

    var inputIds = ['tdH1', 'tdM1', 'tdS1', 'tdH2', 'tdM2', 'tdS2'];
    for (var i = 0; i < inputIds.length; i++) {
        var el = document.getElementById(inputIds[i]);
        if (el) { el.addEventListener('input', calculate); }
    }

    var addBtn = document.getElementById('tdOpAdd');
    var subBtn = document.getElementById('tdOpSub');

    if (addBtn) {
        addBtn.addEventListener('click', function() {
            currentOp = 'add';
            addBtn.className = 'btn-primary timedur-op-btn active';
            subBtn.className = 'btn-secondary timedur-op-btn';
            calculate();
        });
    }

    if (subBtn) {
        subBtn.addEventListener('click', function() {
            currentOp = 'sub';
            subBtn.className = 'btn-primary timedur-op-btn active';
            addBtn.className = 'btn-secondary timedur-op-btn';
            calculate();
        });
    }

    calculate();
})();
