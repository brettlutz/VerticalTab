jQuery.fn.verticalTab = function () {
    var $focus = $('input:first', this),
        tdIndex = $focus.parent('td').index() - 1,
        navInputs = $('tr').siblings().find('td:eq(' + tdIndex + ')').find('input'),
        totalCols = $('tr:eq(2)', this).children('td').length - 1;
    for (var i = 0; i < navInputs.length; i++) {
        if ($focus.attr('id') === $(navInputs[i]).attr('id')) {
            currentInput = i;
            break;
        }
    }

    $(this).keydown(function (e) {
        if (e.shiftKey && e.keyCode === 9) {
            e.preventDefault();
            currentInput -= 1;
            if (currentInput < 0) {
                tdIndex -= 1;
                if (tdIndex < 0) {
                    tdIndex = totalCols;
                }
                navInputs = $('tr').siblings().find('td:eq(' + tdIndex + ')').find('input');
                currentInput = navInputs.length - 1;
            }
            $(navInputs[currentInput]).focus();
        } else if (e.keyCode === 9) {
            e.preventDefault();
            currentInput += 1;
            if (currentInput > navInputs.length - 1) {
                tdIndex += 1;
                if (tdIndex > totalCols) {
                    tdIndex = 0;
                }
                navInputs = $('tr').siblings().find('td:eq(' + tdIndex + ')').find('input');
                currentInput = 0;
            }
            $(navInputs[currentInput]).focus();
        }
    });
}
