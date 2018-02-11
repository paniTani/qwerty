function dropDown(clickElement, openedBlock, addedClass) {
    clickElement.addEventListener('click', function () {
        if(openedBlock.classList.contains(addedClass)) {
            openedBlock.classList.toggle(addedClass);
            openedBlock.style.transition = "all 2s";
        }
        else {
            openedBlock.classList.toggle(addedClass);
        }
    });
}

function dropDownMenu() {
    var burger = document.getElementById('burger');
    var sidebar = document.getElementById('sidebar');

    dropDown(burger, sidebar, 'added');
}
dropDownMenu();

function dropDownSidebar() {
    var sidebarHeader = document.getElementsByClassName('sidebar-header');

    for (var i = 0; i < sidebarHeader.length; i++) {
        sidebarHeader[i].addEventListener('click', function() {
            var sidebarContent = this.nextElementSibling;

                if(sidebarContent.classList.contains(  'added-sidebar' )) {
                    sidebarContent.classList.toggle(  'added-sidebar' );
                    sidebarContent.style.transition = "all 1s";
                }
                else {
                    sidebarContent.classList.toggle( 'added-sidebar'  );
                }
        });
    }
}
dropDownSidebar();

function setParagraphFontSize() {
    var fontSizeP = document.getElementById('font-size-p');
    var p = document.getElementsByTagName('p');

    fontSizeP.addEventListener('change', function () {
        for (var i = 0; i < p.length; i++) {
            p[i].style.fontSize = this.value + 'px';
        }
    });
}
setParagraphFontSize();

function changeContainerBackground() {
    var mainContentWrapper = document.getElementsByClassName('main-content-wrapper');
    var selectBckg = document.getElementById('content-background');

    selectBckg.addEventListener('click', function () {
        var newContentBackground =  this.value;
        mainContentWrapper[0].style.backgroundColor = newContentBackground;
    });
}
changeContainerBackground();

function setFontFamily() {
    var fontFamilyForm = document.getElementById('font-family-form');
    var pElements = document.getElementsByTagName('P');

    fontFamilyForm.addEventListener('change', function() {
        var fontFamilyVal = this.fontType.value;

         for (var i = 0; i < pElements.length; i++) {
             pElements[i].style.fontFamily = "'" + fontFamilyVal + "'";
         }
    });
}
setFontFamily();

function deleteLastP() {
    var deleteButton = document.getElementById('p-delete-btn');

    deleteButton.addEventListener('click', function () {
        var p = document.getElementsByTagName('P');
        var lastP = p[p.length - 1];

        lastP.remove();
    });
}
deleteLastP();
