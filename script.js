let menuItems = document.querySelectorAll('.item');
menuItems = [...menuItems];

let submenu = document.querySelectorAll('.submenu');
submenu = [...submenu];

let subItems = document.querySelectorAll('.subitem');
subItems = [...subItems];

let submenu2 = document.querySelectorAll('.submenu2');
submenu2 = [...submenu2];

for(let i = 0; i < submenu.length; i++) {
    submenu[i].setAttribute('data-target', 'item-' + i);
    // let close = document.createElement('span');
    // close.setAttribute('data-close', 'item-' + i);
    // close.textContent = 'zamknij';
    // submenu[i].appendChild(close)
}

for(let i = 0; i < menuItems.length; i++) {

    const submenu = menuItems[i].querySelector('.submenu');

    menuItems[i].setAttribute('data-id', 'item-' + i);

    menuItems[i].addEventListener('click', function() {

        submenu.classList.add("show");

        const container = document.querySelector('.container');
        
        if(submenu.classList.contains('show') && container.clientHeight >= submenu.clientHeight) {

            submenu.style.bottom = '0';

        } else if(submenu.classList.contains('show') && container.clientHeight < submenu.clientHeight) {

            container.style.height = submenu.clientHeight + 'px';

        }
    
        document.addEventListener('mouseup', function(e) {

            if(!menuItems[i].contains(e.target)) {

                submenu.classList.remove('show');
                container.style.height = 'auto';
            }

        });
    });


    // Next level
    for(let i = 0; i < submenu2.length; i++) {
        submenu2[i].setAttribute('data-target', 'item-sub-' + i);
    }

    for(let i = 0; i < subItems.length; i++) {

        const submenu2 = subItems[i].querySelector('.submenu2');

        subItems[i].setAttribute('data-id', 'item-sub-' + i);

        subItems[i].addEventListener('click', function() {

            submenu2.classList.add("show");

            const container = document.querySelector('.container');
        
            if(submenu2.classList.contains('show') && container.clientHeight >= submenu2.clientHeight) {

                submenu2.style.bottom = '0';
                
            } else if(submenu2.classList.contains('show') && container.clientHeight < submenu2.clientHeight) {
                
                container.style.height = submenu.clientHeight + 'px';
                container.style.height = submenu2.clientHeight + 'px';
                submenu2.style.bottom = '0';

            }

            document.addEventListener('mouseup', function(e) {

                if(!subItems[i].contains(e.target)) {
    
                    submenu2.classList.remove('show');
                    container.style.height = 'auto';
                }
    
            });

        });
        
    }

};